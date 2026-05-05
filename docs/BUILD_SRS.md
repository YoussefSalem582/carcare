# Build Instructions: CarCare Comprehensive SRS

Purpose: render the final comprehensive SRS from Markdown into PDF and DOCX deliverables.

## Source and Outputs

- Source: `docs/SRS_CarCare_Comprehensive.md`
- PDF output: `docs/SRS_CarCare_Comprehensive.pdf`
- DOCX output: `docs/SRS_CarCare_Comprehensive.docx`
- Generated diagram/build artifacts: `docs/diagrams/generated/`

The source Markdown is left unchanged. The build script creates a generated Markdown copy with rendered diagram references when Mermaid CLI is available.

## Recommended Tooling

- Node.js, for Mermaid CLI
- Mermaid CLI: `npm i -g @mermaid-js/mermaid-cli`
- Pandoc
- A LaTeX PDF engine such as `xelatex` or `pdflatex`
- PowerShell 5.1+ or PowerShell Core

If Pandoc, LaTeX, or Mermaid CLI are unavailable, the PowerShell script still attempts local fallbacks:

- Mermaid blocks remain as code blocks if `mmdc` is unavailable.
- PDF generation falls back to Microsoft Edge or another Chromium-based browser when available.
- DOCX generation falls back to a simple OOXML writer.

## Build

From the repository root:

```powershell
powershell -ExecutionPolicy Bypass -File scripts/build_srs_documents.ps1 `
  -MarkdownPath docs/SRS_CarCare_Comprehensive.md `
  -PdfPath docs/SRS_CarCare_Comprehensive.pdf `
  -DocxPath docs/SRS_CarCare_Comprehensive.docx
```

The older compatibility wrapper also works:

```powershell
powershell -ExecutionPolicy Bypass -File scripts/generate_srs_pdf.ps1 `
  -MarkdownPath docs/SRS_CarCare_Comprehensive.md `
  -PdfPath docs/SRS_CarCare_Comprehensive.pdf `
  -DocxPath docs/SRS_CarCare_Comprehensive.docx
```

## Verification

After the build:

1. Confirm `docs/SRS_CarCare_Comprehensive.pdf` exists and is non-empty.
2. Confirm `docs/SRS_CarCare_Comprehensive.docx` exists and is non-empty.
3. Review `docs/diagrams/generated/build_report.txt` for whether Mermaid diagrams were rendered or kept as code blocks.
4. Open the PDF and DOCX to spot-check the title page, headings, tables, and diagrams.
