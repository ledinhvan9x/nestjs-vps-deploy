import { Exporter } from './exporter.interface';

export class PdfExporter implements Exporter {
  export(data: unknown[]): string {
    return `Exported ${data.length} records as PDF`;
  }
}

