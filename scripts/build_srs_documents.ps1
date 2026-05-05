param(
  [Parameter(Mandatory=$true)]
  [string]$MarkdownPath,

  [Parameter(Mandatory=$true)]
  [string]$PdfPath,

  [Parameter(Mandatory=$true)]
  [string]$DocxPath
)

$ErrorActionPreference = "Stop"

function Resolve-ProjectPath {
  param([string]$Path)
  if ([System.IO.Path]::IsPathRooted($Path)) {
    return [System.IO.Path]::GetFullPath($Path)
  }
  return [System.IO.Path]::GetFullPath((Join-Path -Path (Get-Location) -ChildPath $Path))
}

function Ensure-Directory {
  param([string]$Path)
  $dir = Split-Path -Parent $Path
  if ($dir -and -not (Test-Path $dir)) {
    New-Item -ItemType Directory -Path $dir | Out-Null
  }
}

function Escape-Xml {
  param([string]$Text)
  return [System.Security.SecurityElement]::Escape($Text)
}

function Escape-Html {
  param([string]$Text)
  return [System.Net.WebUtility]::HtmlEncode($Text)
}

function Convert-InlineMarkdownToHtml {
  param([string]$Text)
  $html = Escape-Html $Text
  $html = [regex]::Replace($html, '`([^`]+)`', '<code>$1</code>')
  $html = [regex]::Replace($html, '\*\*([^*]+)\*\*', '<strong>$1</strong>')
  $html = [regex]::Replace($html, '\*([^*]+)\*', '<em>$1</em>')
  return $html
}

function Remove-InlineMarkdown {
  param([string]$Text)
  $clean = $Text -replace '!\[([^\]]*)\]\(([^)]+)\)', '$1'
  $clean = $clean -replace '\[([^\]]+)\]\(([^)]+)\)', '$1'
  $clean = $clean -replace '\*\*([^*]+)\*\*', '$1'
  $clean = $clean -replace '\*([^*]+)\*', '$1'
  $clean = $clean -replace '`([^`]+)`', '$1'
  return $clean
}

function Normalize-MarkdownBlocks {
  param([string]$Markdown)

  $lines = $Markdown -split "`r?`n"
  $out = New-Object System.Collections.Generic.List[string]
  $inCode = $false

  for ($i = 0; $i -lt $lines.Count; $i++) {
    $line = $lines[$i]
    $trim = $line.Trim()

    if ($trim -match '^```') {
      $out.Add($line)
      $inCode = -not $inCode
      continue
    }

    if (-not $inCode -and $out.Count -gt 0 -and $trim) {
      $prev = $out[$out.Count - 1].Trim()
      $isBlockStart = (
        $trim -match '^#{1,6}\s+' -or
        $trim -match '^[-*]\s+' -or
        $trim -match '^\d+\.\s+' -or
        ($trim.StartsWith("|") -and $trim.EndsWith("|"))
      )
      $prevIsCompatible = (
        -not $prev -or
        $prev -match '^[-*]\s+' -or
        $prev -match '^\d+\.\s+' -or
        ($prev.StartsWith("|") -and $prev.EndsWith("|")) -or
        $prev -match '^#{1,6}\s+'
      )

      if ($isBlockStart -and -not $prevIsCompatible) {
        $out.Add("")
      }
    }

    $out.Add($line)
  }

  return $out -join [Environment]::NewLine
}

function Convert-MarkdownToHtml {
  param(
    [string]$Markdown,
    [string]$BaseDirectory
  )

  $lines = $Markdown -split "`r?`n"
  $body = New-Object System.Collections.Generic.List[string]
  $inCode = $false
  $codeLines = New-Object System.Collections.Generic.List[string]
  $inList = $false

  function Close-List {
    param(
      [ref]$ListIsOpen,
      [System.Collections.Generic.List[string]]$HtmlBody
    )
    if ($ListIsOpen.Value) {
      $HtmlBody.Add("</ul>")
      $ListIsOpen.Value = $false
    }
  }

  for ($i = 0; $i -lt $lines.Count; $i++) {
    $line = $lines[$i]
    $trim = $line.Trim()

    if ($trim -match '^```') {
      if ($inCode) {
        Close-List -ListIsOpen ([ref]$inList) -HtmlBody $body
        $body.Add("<pre><code>$(Escape-Html ($codeLines -join "`n"))</code></pre>")
        $codeLines.Clear()
        $inCode = $false
      } else {
        Close-List -ListIsOpen ([ref]$inList) -HtmlBody $body
        $inCode = $true
      }
      continue
    }

    if ($inCode) {
      $codeLines.Add($line)
      continue
    }

    if ([string]::IsNullOrWhiteSpace($line)) {
      Close-List -ListIsOpen ([ref]$inList) -HtmlBody $body
      continue
    }

    if ($trim -match '^---+$') {
      Close-List -ListIsOpen ([ref]$inList) -HtmlBody $body
      $body.Add("<hr />")
      continue
    }

    if ($trim -match '^(#{1,6})\s+(.+)$') {
      Close-List -ListIsOpen ([ref]$inList) -HtmlBody $body
      $level = $Matches[1].Length
      $text = Convert-InlineMarkdownToHtml $Matches[2]
      $body.Add("<h$level>$text</h$level>")
      continue
    }

    if ($trim -match '^!\[([^\]]*)\]\(([^)]+)\)') {
      Close-List -ListIsOpen ([ref]$inList) -HtmlBody $body
      $alt = Escape-Html $Matches[1]
      $src = $Matches[2]
      if (-not [System.IO.Path]::IsPathRooted($src)) {
        $src = Join-Path -Path $BaseDirectory -ChildPath $src
      }
      $srcUri = ([System.Uri]::new([System.IO.Path]::GetFullPath($src))).AbsoluteUri
      $body.Add("<figure><img src=""$srcUri"" alt=""$alt"" /><figcaption>$alt</figcaption></figure>")
      continue
    }

    $next = if ($i + 1 -lt $lines.Count) { $lines[$i + 1].Trim() } else { "" }
    if ($trim.StartsWith("|") -and $trim.EndsWith("|") -and $next -match '^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$') {
      Close-List -ListIsOpen ([ref]$inList) -HtmlBody $body
      $tableLines = New-Object System.Collections.Generic.List[string]
      while ($i -lt $lines.Count -and $lines[$i].Trim().StartsWith("|") -and $lines[$i].Trim().EndsWith("|")) {
        $tableLines.Add($lines[$i].Trim())
        $i++
      }
      $i--

      $body.Add("<table>")
      for ($r = 0; $r -lt $tableLines.Count; $r++) {
        if ($r -eq 1) { continue }
        $cells = ($tableLines[$r].Trim("|") -split '\|') | ForEach-Object { Convert-InlineMarkdownToHtml $_.Trim() }
        $tag = if ($r -eq 0) { "th" } else { "td" }
        $body.Add("<tr>" + (($cells | ForEach-Object { "<$tag>$_</$tag>" }) -join "") + "</tr>")
      }
      $body.Add("</table>")
      continue
    }

    if ($trim -match '^[-*]\s+(.+)$') {
      if (-not $inList) {
        $body.Add("<ul>")
        $inList = $true
      }
      $body.Add("<li>$(Convert-InlineMarkdownToHtml $Matches[1])</li>")
      continue
    }

    if ($trim -match '^\d+\.\s+(.+)$') {
      Close-List -ListIsOpen ([ref]$inList) -HtmlBody $body
      $body.Add("<p>$(Convert-InlineMarkdownToHtml $trim)</p>")
      continue
    }

      Close-List -ListIsOpen ([ref]$inList) -HtmlBody $body
    $body.Add("<p>$(Convert-InlineMarkdownToHtml $trim)</p>")
  }

    Close-List -ListIsOpen ([ref]$inList) -HtmlBody $body
  if ($inCode) {
    $body.Add("<pre><code>$(Escape-Html ($codeLines -join "`n"))</code></pre>")
  }

  return @"
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>CarCare SRS</title>
  <style>
    @page { size: A4; margin: 18mm 16mm; }
    body { color: #172033; font-family: "Segoe UI", Arial, sans-serif; font-size: 10.5pt; line-height: 1.45; }
    h1 { color: #0f3f5f; font-size: 24pt; margin: 0 0 18pt; padding-bottom: 8pt; border-bottom: 2px solid #1f6f8b; }
    h2 { color: #0f3f5f; font-size: 16pt; margin: 22pt 0 8pt; page-break-after: avoid; }
    h3 { color: #214b63; font-size: 12.5pt; margin: 16pt 0 6pt; page-break-after: avoid; }
    h4 { color: #2f5265; font-size: 11pt; margin: 12pt 0 4pt; page-break-after: avoid; }
    p { margin: 0 0 7pt; }
    ul { margin: 0 0 8pt 18pt; padding: 0; }
    li { margin: 2pt 0; }
    table { width: 100%; border-collapse: collapse; margin: 8pt 0 12pt; page-break-inside: auto; font-size: 8.4pt; }
    th { background: #e9f2f6; color: #17384a; font-weight: 700; }
    th, td { border: 1px solid #aebdc7; padding: 4pt 5pt; vertical-align: top; overflow-wrap: anywhere; }
    pre { background: #f5f7f9; border: 1px solid #d7e0e7; border-radius: 4px; padding: 8pt; white-space: pre-wrap; font-size: 8pt; page-break-inside: avoid; }
    code { font-family: Consolas, "Courier New", monospace; font-size: 0.92em; }
    img { max-width: 100%; height: auto; display: block; margin: 8pt auto; }
    figure { margin: 10pt 0 14pt; page-break-inside: avoid; }
    figcaption { color: #4f6270; font-size: 8.5pt; text-align: center; }
    hr { border: 0; border-top: 1px solid #cdd7df; margin: 14pt 0; }
  </style>
</head>
<body>
$($body -join "`n")
</body>
</html>
"@
}

function Get-BrowserPath {
  $cmd = Get-Command msedge -ErrorAction SilentlyContinue
  if ($cmd) { return $cmd.Source }

  $candidates = @(
    "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    "C:\Program Files\Microsoft\Edge\Application\msedge.exe",
    "C:\Program Files\Google\Chrome\Application\chrome.exe",
    "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
  )
  foreach ($candidate in $candidates) {
    if (Test-Path $candidate) { return $candidate }
  }
  return $null
}

function New-PdfWithBrowser {
  param(
    [string]$Markdown,
    [string]$HtmlPath,
    [string]$PdfPath,
    [string]$BaseDirectory
  )

  $browser = Get-BrowserPath
  if (-not $browser) {
    throw "Pandoc/LaTeX is unavailable and no Chromium-based browser was found for PDF fallback."
  }

  Ensure-Directory $HtmlPath
  Ensure-Directory $PdfPath
  $html = Convert-MarkdownToHtml -Markdown $Markdown -BaseDirectory $BaseDirectory
  Set-Content -Path $HtmlPath -Value $html -Encoding utf8

  $targetPdfPath = $PdfPath
  $printPdfPath = "$PdfPath.tmp.pdf"
  if (Test-Path $printPdfPath) {
    Remove-Item -Path $printPdfPath -Force
  }

  $userDataDir = Join-Path -Path (Split-Path -Parent $HtmlPath) -ChildPath "browser-profile"
  if (-not (Test-Path $userDataDir)) {
    New-Item -ItemType Directory -Path $userDataDir | Out-Null
  }

  $htmlUri = ([System.Uri]::new([System.IO.Path]::GetFullPath($HtmlPath))).AbsoluteUri
  $args = @(
    "--headless",
    "--disable-gpu",
    "--no-first-run",
    "--no-default-browser-check",
    "--user-data-dir=$userDataDir",
    "--print-to-pdf=$printPdfPath",
    $htmlUri
  )
  & $browser @args | Out-Null
  if ($LASTEXITCODE -ne 0 -or -not (Test-Path $printPdfPath)) {
    throw "Browser PDF fallback failed."
  }

  try {
    if (Test-Path $targetPdfPath) {
      Remove-Item -Path $targetPdfPath -Force
    }
    Move-Item -Path $printPdfPath -Destination $targetPdfPath -Force
  } catch {
    if (Test-Path $targetPdfPath) {
      Write-Warning "Could not replace locked PDF '$targetPdfPath'. Existing non-empty PDF was kept; temporary refreshed PDF is '$printPdfPath'."
    } else {
      throw
    }
  } finally {
    Remove-Item -Path $userDataDir -Recurse -Force -ErrorAction SilentlyContinue
  }
}

function Get-DocxParagraph {
  param(
    [string]$Text,
    [string]$Style = ""
  )

  $styleXml = ""
  if ($Style) {
    $styleXml = "<w:pPr><w:pStyle w:val=""$Style"" /></w:pPr>"
  }
  $escaped = Escape-Xml $Text
  return "<w:p>$styleXml<w:r><w:t xml:space=""preserve"">$escaped</w:t></w:r></w:p>"
}

function Get-DocxTable {
  param([string[]]$Lines)

  $rows = New-Object System.Collections.Generic.List[string]
  for ($r = 0; $r -lt $Lines.Count; $r++) {
    if ($r -eq 1) { continue }
    $cells = $Lines[$r].Trim().Trim("|") -split '\|'
    $cellXml = $cells | ForEach-Object {
      $text = Remove-InlineMarkdown $_.Trim()
      "<w:tc><w:tcPr><w:tcW w:w=""2400"" w:type=""dxa"" /></w:tcPr>$(Get-DocxParagraph -Text $text)</w:tc>"
    }
    $rows.Add("<w:tr>$($cellXml -join '')</w:tr>")
  }

  return @"
<w:tbl>
  <w:tblPr>
    <w:tblW w:w="0" w:type="auto" />
    <w:tblBorders>
      <w:top w:val="single" w:sz="4" w:space="0" w:color="AEBCC7" />
      <w:left w:val="single" w:sz="4" w:space="0" w:color="AEBCC7" />
      <w:bottom w:val="single" w:sz="4" w:space="0" w:color="AEBCC7" />
      <w:right w:val="single" w:sz="4" w:space="0" w:color="AEBCC7" />
      <w:insideH w:val="single" w:sz="4" w:space="0" w:color="AEBCC7" />
      <w:insideV w:val="single" w:sz="4" w:space="0" w:color="AEBCC7" />
    </w:tblBorders>
  </w:tblPr>
  $($rows -join "`n")
</w:tbl>
"@
}

function Convert-MarkdownToDocxXml {
  param([string]$Markdown)

  $lines = $Markdown -split "`r?`n"
  $blocks = New-Object System.Collections.Generic.List[string]
  $inCode = $false
  $codeLines = New-Object System.Collections.Generic.List[string]

  for ($i = 0; $i -lt $lines.Count; $i++) {
    $line = $lines[$i]
    $trim = $line.Trim()

    if ($trim -match '^```') {
      if ($inCode) {
        foreach ($codeLine in $codeLines) {
          $blocks.Add((Get-DocxParagraph -Text $codeLine -Style "CodeBlock"))
        }
        $codeLines.Clear()
        $inCode = $false
      } else {
        $inCode = $true
      }
      continue
    }

    if ($inCode) {
      $codeLines.Add($line)
      continue
    }

    if ([string]::IsNullOrWhiteSpace($line)) {
      continue
    }

    if ($trim -match '^---+$') {
      continue
    }

    if ($trim -match '^(#{1,6})\s+(.+)$') {
      $level = [Math]::Min($Matches[1].Length, 3)
      $text = Remove-InlineMarkdown $Matches[2]
      $blocks.Add((Get-DocxParagraph -Text $text -Style "Heading$level"))
      continue
    }

    $next = if ($i + 1 -lt $lines.Count) { $lines[$i + 1].Trim() } else { "" }
    if ($trim.StartsWith("|") -and $trim.EndsWith("|") -and $next -match '^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$') {
      $tableLines = New-Object System.Collections.Generic.List[string]
      while ($i -lt $lines.Count -and $lines[$i].Trim().StartsWith("|") -and $lines[$i].Trim().EndsWith("|")) {
        $tableLines.Add($lines[$i])
        $i++
      }
      $i--
      $blocks.Add((Get-DocxTable -Lines $tableLines.ToArray()))
      continue
    }

    if ($trim -match '^[-*]\s+(.+)$') {
      $blocks.Add((Get-DocxParagraph -Text ("- " + (Remove-InlineMarkdown $Matches[1])) -Style "ListParagraph"))
      continue
    }

    if ($trim -match '^!\[([^\]]*)\]\(([^)]+)\)') {
      $caption = if ($Matches[1]) { $Matches[1] } else { $Matches[2] }
      $blocks.Add((Get-DocxParagraph -Text ("Figure: " + $caption)))
      continue
    }

    $blocks.Add((Get-DocxParagraph -Text (Remove-InlineMarkdown $trim)))
  }

  if ($inCode) {
    foreach ($codeLine in $codeLines) {
      $blocks.Add((Get-DocxParagraph -Text $codeLine -Style "CodeBlock"))
    }
  }

  return $blocks -join "`n"
}

function Add-ZipEntry {
  param(
    [System.IO.Compression.ZipArchive]$Zip,
    [string]$Name,
    [string]$Content
  )
  $entry = $Zip.CreateEntry($Name)
  $stream = $entry.Open()
  $writer = New-Object System.IO.StreamWriter($stream, [System.Text.UTF8Encoding]::new($false))
  try {
    $writer.Write($Content)
  } finally {
    $writer.Dispose()
    $stream.Dispose()
  }
}

function Optimize-DocxTables {
  param([string]$DocxPath)

  Add-Type -AssemblyName System.IO.Compression
  Add-Type -AssemblyName System.IO.Compression.FileSystem
  $zip = [System.IO.Compression.ZipFile]::Open($DocxPath, [System.IO.Compression.ZipArchiveMode]::Update)
  try {
    $entry = $zip.GetEntry("word/document.xml")
    if (-not $entry) { return }

    $reader = New-Object System.IO.StreamReader($entry.Open())
    try {
      $xml = $reader.ReadToEnd()
    } finally {
      $reader.Dispose()
    }

    $tableRegex = [regex]::new('<w:tbl>.*?</w:tbl>', [System.Text.RegularExpressions.RegexOptions]::Singleline)
    $fixedXml = $tableRegex.Replace($xml, {
      param($match)

      $table = $match.Value
      $columnCount = [regex]::Matches($table, '<w:gridCol\b').Count
      if ($columnCount -lt 1) {
        return $table
      }

      $cellWidth = [Math]::Max(900, [Math]::Floor(9000 / $columnCount))

      if ($table -match '<w:tblW\b[^>]*/>') {
        $table = [regex]::Replace($table, '<w:tblW\b[^>]*/>', '<w:tblW w:type="pct" w:w="5000" />', 1)
      } else {
        $table = $table -replace '<w:tblPr>', '<w:tblPr><w:tblW w:type="pct" w:w="5000" />'
      }

      if ($table -notmatch '<w:tblLayout\b') {
        $table = $table -replace '<w:tblPr>', '<w:tblPr><w:tblLayout w:type="fixed" />'
      }

      $table = $table -replace '<w:tc><w:tcPr\s*/>', "<w:tc><w:tcPr><w:tcW w:w=""$cellWidth"" w:type=""dxa"" /></w:tcPr>"
      return $table
    })

    if ($fixedXml -ne $xml) {
      $entry.Delete()
      Add-ZipEntry -Zip $zip -Name "word/document.xml" -Content $fixedXml
    }
  } finally {
    $zip.Dispose()
  }
}

function New-DocxFallback {
  param(
    [string]$Markdown,
    [string]$DocxPath
  )

  Ensure-Directory $DocxPath
  if (Test-Path $DocxPath) {
    Remove-Item -Path $DocxPath -Force
  }

  Add-Type -AssemblyName System.IO.Compression
  Add-Type -AssemblyName System.IO.Compression.FileSystem

  $documentBody = Convert-MarkdownToDocxXml -Markdown $Markdown
  $documentXml = @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:body>
    $documentBody
    <w:sectPr>
      <w:pgSz w:w="11906" w:h="16838" />
      <w:pgMar w:top="1134" w:right="907" w:bottom="1134" w:left="907" w:header="720" w:footer="720" w:gutter="0" />
    </w:sectPr>
  </w:body>
</w:document>
"@

  $stylesXml = @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:style w:type="paragraph" w:default="1" w:styleId="Normal">
    <w:name w:val="Normal" />
    <w:rPr><w:rFonts w:ascii="Segoe UI" w:hAnsi="Segoe UI" /><w:sz w:val="21" /></w:rPr>
  </w:style>
  <w:style w:type="paragraph" w:styleId="Heading1">
    <w:name w:val="heading 1" /><w:basedOn w:val="Normal" /><w:next w:val="Normal" />
    <w:pPr><w:spacing w:before="240" w:after="120" /><w:outlineLvl w:val="0" /></w:pPr>
    <w:rPr><w:b /><w:color w:val="0F3F5F" /><w:sz w:val="32" /></w:rPr>
  </w:style>
  <w:style w:type="paragraph" w:styleId="Heading2">
    <w:name w:val="heading 2" /><w:basedOn w:val="Normal" /><w:next w:val="Normal" />
    <w:pPr><w:spacing w:before="220" w:after="100" /><w:outlineLvl w:val="1" /></w:pPr>
    <w:rPr><w:b /><w:color w:val="174B64" /><w:sz w:val="26" /></w:rPr>
  </w:style>
  <w:style w:type="paragraph" w:styleId="Heading3">
    <w:name w:val="heading 3" /><w:basedOn w:val="Normal" /><w:next w:val="Normal" />
    <w:pPr><w:spacing w:before="180" w:after="80" /><w:outlineLvl w:val="2" /></w:pPr>
    <w:rPr><w:b /><w:color w:val="2F5265" /><w:sz w:val="23" /></w:rPr>
  </w:style>
  <w:style w:type="paragraph" w:styleId="ListParagraph">
    <w:name w:val="List Paragraph" /><w:basedOn w:val="Normal" />
    <w:pPr><w:ind w:left="360" /><w:spacing w:after="70" /></w:pPr>
  </w:style>
  <w:style w:type="paragraph" w:styleId="CodeBlock">
    <w:name w:val="Code Block" /><w:basedOn w:val="Normal" />
    <w:pPr><w:spacing w:before="40" w:after="40" /></w:pPr>
    <w:rPr><w:rFonts w:ascii="Consolas" w:hAnsi="Consolas" /><w:sz w:val="17" /></w:rPr>
  </w:style>
</w:styles>
"@

  $contentTypesXml = @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" />
  <Default Extension="xml" ContentType="application/xml" />
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml" />
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml" />
</Types>
"@

  $relsXml = @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml" />
</Relationships>
"@

  $documentRelsXml = @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml" />
</Relationships>
"@

  $zip = [System.IO.Compression.ZipFile]::Open($DocxPath, [System.IO.Compression.ZipArchiveMode]::Create)
  try {
    Add-ZipEntry -Zip $zip -Name "[Content_Types].xml" -Content $contentTypesXml
    Add-ZipEntry -Zip $zip -Name "_rels/.rels" -Content $relsXml
    Add-ZipEntry -Zip $zip -Name "word/document.xml" -Content $documentXml
    Add-ZipEntry -Zip $zip -Name "word/styles.xml" -Content $stylesXml
    Add-ZipEntry -Zip $zip -Name "word/_rels/document.xml.rels" -Content $documentRelsXml
  } finally {
    $zip.Dispose()
  }
}

function Build-GeneratedMarkdown {
  param(
    [string]$Markdown,
    [string]$GeneratedDir,
    [System.Collections.Generic.List[string]]$ReportLines
  )

  if (-not (Test-Path $GeneratedDir)) {
    New-Item -ItemType Directory -Path $GeneratedDir | Out-Null
  }

  $hasMmdc = Get-Command mmdc -ErrorAction SilentlyContinue
  $script:SrsDiagramIndex = 0
  $script:SrsRenderedCount = 0
  $regex = [regex]::new('(?ms)^```mermaid\s*\r?\n(.*?)\r?\n```', [System.Text.RegularExpressions.RegexOptions]::Multiline)

  $generated = $regex.Replace($Markdown, {
    param($match)
    $script:SrsDiagramIndex++
    $num = "{0:D2}" -f $script:SrsDiagramIndex
    $mmdPath = Join-Path -Path $GeneratedDir -ChildPath "srs-diagram-$num.mmd"
    $pngPath = Join-Path -Path $GeneratedDir -ChildPath "srs-diagram-$num.png"
    $code = $match.Groups[1].Value.Trim()
    Set-Content -Path $mmdPath -Value $code -Encoding utf8

    if ($hasMmdc) {
      & $hasMmdc.Source -i $mmdPath -o $pngPath | Out-Null
      if ($LASTEXITCODE -eq 0 -and (Test-Path $pngPath)) {
        $script:SrsRenderedCount++
        $absolutePng = [System.IO.Path]::GetFullPath($pngPath)
        return "![SRS Diagram $num]($absolutePng)"
      }
      $ReportLines.Add("WARNING: Mermaid render failed for diagram $num; keeping Mermaid code block.")
    }

    return $match.Value
  })

  $ReportLines.Add("Mermaid blocks found: $script:SrsDiagramIndex")
  $ReportLines.Add("Mermaid diagrams rendered to PNG: $script:SrsRenderedCount")
  if (-not $hasMmdc) {
    $ReportLines.Add("WARNING: Mermaid CLI (mmdc) not found; diagrams remain as Mermaid code blocks in generated outputs.")
  }

  return Normalize-MarkdownBlocks $generated
}

$markdownAbs = Resolve-ProjectPath $MarkdownPath
$pdfAbs = Resolve-ProjectPath $PdfPath
$docxAbs = Resolve-ProjectPath $DocxPath
$sourceDir = Split-Path -Parent $markdownAbs
$generatedDir = Join-Path -Path $sourceDir -ChildPath "diagrams\generated"
$generatedMarkdownPath = Join-Path -Path $generatedDir -ChildPath "SRS_CarCare_Comprehensive.generated.md"
$generatedHtmlPath = Join-Path -Path $generatedDir -ChildPath "SRS_CarCare_Comprehensive.generated.html"
$reportPath = Join-Path -Path $generatedDir -ChildPath "build_report.txt"

if (-not (Test-Path $markdownAbs)) {
  throw "Markdown source not found: $markdownAbs"
}

Ensure-Directory $pdfAbs
Ensure-Directory $docxAbs

$reportLines = New-Object System.Collections.Generic.List[string]
$reportLines.Add("Build timestamp: $(Get-Date -Format o)")
$reportLines.Add("Source markdown: $markdownAbs")
$reportLines.Add("PDF output: $pdfAbs")
$reportLines.Add("DOCX output: $docxAbs")

$sourceMarkdown = Get-Content -Path $markdownAbs -Raw -Encoding utf8
$generatedMarkdown = Build-GeneratedMarkdown -Markdown $sourceMarkdown -GeneratedDir $generatedDir -ReportLines $reportLines
Set-Content -Path $generatedMarkdownPath -Value $generatedMarkdown -Encoding utf8
$reportLines.Add("Generated markdown: $generatedMarkdownPath")

$pandoc = Get-Command pandoc -ErrorAction SilentlyContinue
$pdfBuilt = $false
$docxBuilt = $false

if ($pandoc) {
  $engine = Get-Command xelatex -ErrorAction SilentlyContinue
  if (-not $engine) { $engine = Get-Command pdflatex -ErrorAction SilentlyContinue }

  if ($engine) {
    & $pandoc.Source $generatedMarkdownPath -s -o $pdfAbs "--pdf-engine=$($engine.Name)"
    if ($LASTEXITCODE -eq 0 -and (Test-Path $pdfAbs)) {
      $pdfBuilt = $true
      $reportLines.Add("PDF generated with Pandoc and $($engine.Name).")
    } else {
      $reportLines.Add("WARNING: Pandoc PDF generation failed; trying browser fallback.")
    }
  } else {
    $reportLines.Add("WARNING: Pandoc found, but no xelatex/pdflatex engine found; trying browser fallback for PDF.")
  }

  if ($script:SrsRenderedCount -lt $script:SrsDiagramIndex) {
    $reportLines.Add("WARNING: Skipping Pandoc DOCX because Mermaid diagrams were not rendered; using OOXML fallback for readable diagram code blocks.")
  } else {
    & $pandoc.Source $generatedMarkdownPath -s -o $docxAbs
    if ($LASTEXITCODE -eq 0 -and (Test-Path $docxAbs)) {
      Optimize-DocxTables -DocxPath $docxAbs
      $docxBuilt = $true
      $reportLines.Add("DOCX generated with Pandoc.")
    } else {
      $reportLines.Add("WARNING: Pandoc DOCX generation failed; trying OOXML fallback.")
    }
  }
} else {
  $reportLines.Add("WARNING: Pandoc not found; using local fallback generators.")
}

if (-not $pdfBuilt) {
  New-PdfWithBrowser -Markdown $generatedMarkdown -HtmlPath $generatedHtmlPath -PdfPath $pdfAbs -BaseDirectory $generatedDir
  $pdfBuilt = $true
  $reportLines.Add("PDF generated with Chromium browser print fallback.")
}

if (-not $docxBuilt) {
  New-DocxFallback -Markdown $generatedMarkdown -DocxPath $docxAbs
  $docxBuilt = $true
  $reportLines.Add("DOCX generated with simple OOXML fallback.")
}

foreach ($output in @($pdfAbs, $docxAbs)) {
  if (-not (Test-Path $output)) {
    throw "Expected output was not created: $output"
  }
  $item = Get-Item $output
  if ($item.Length -le 0) {
    throw "Expected output is empty: $output"
  }
  $reportLines.Add("Verified output: $($item.FullName) ($($item.Length) bytes)")
}

Set-Content -Path $reportPath -Value ($reportLines -join [Environment]::NewLine) -Encoding utf8
Write-Output ($reportLines -join [Environment]::NewLine)
