param(
  [Parameter(Mandatory=$true)]
  [string]$MarkdownPath,
  [Parameter(Mandatory=$true)]
  [string]$PdfPath
)

if (-not (Get-Command pandoc -ErrorAction SilentlyContinue)) {
  Write-Error "Pandoc is not installed. Please install Pandoc to generate PDF."
  exit 1
}
Write-Output "Converting Markdown to PDF: $MarkdownPath -> $PdfPath"
pandoc $MarkdownPath -s -o $PdfPath --pdf-engine=pdflatex
Write-Output "PDF generation complete."
