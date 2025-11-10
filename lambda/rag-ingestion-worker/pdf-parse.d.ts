declare module "pdf-parse" {
  interface PDFInfo {
    PDFFormatVersion?: string;
    IsAcroFormPresent?: boolean;
    IsXFAPresent?: boolean;
    Title?: string;
    Author?: string;
    Subject?: string;
    Creator?: string;
    Producer?: string;
    CreationDate?: string;
    ModDate?: string;
    [key: string]: unknown;
  }

  interface PDFMetadata {
    info?: PDFInfo;
    metadata?: {
      _metadataMap?: Record<string, unknown>;
    };
    [key: string]: unknown;
  }

  interface PDFData {
    numpages: number;
    numrender: number;
    info: PDFInfo;
    metadata: PDFMetadata | null;
    text: string;
    version: string;
  }

  function pdfParse(
    data: Buffer | Uint8Array | ArrayBuffer,
    options?: {
      max?: number;
      version?: string;
    }
  ): Promise<PDFData>;

  export = pdfParse;
}

