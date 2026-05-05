param(
  [Parameter(Mandatory=$true)]
  [string]$MarkdownPath,
  [Parameter(Mandatory=$true)]
  [string]$PdfPath,
  [string]$DocxPath = ""
)

if (-not $DocxPath) {
  $DocxPath = [System.IO.Path]::ChangeExtension($PdfPath, ".docx")
}

& "$PSScriptRoot\build_srs_documents.ps1" -MarkdownPath $MarkdownPath -PdfPath $PdfPath -DocxPath $DocxPath
