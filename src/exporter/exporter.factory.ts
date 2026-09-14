import { CsvExporter } from './csv-exporter';
import { ExcelExporter } from './excel-exporter';
import { Exporter } from './exporter.interface';
import { PdfExporter } from './pdf-exporter';

export enum ExportType {
  PDF = 'pdf',
  CSV = 'csv',
  EXCEL = 'excel',
}

export class ExporterFactory {
  create(type: ExportType): Exporter {
    switch (type) {
      case ExportType.PDF:
        return new PdfExporter();

      case ExportType.CSV:
        return new CsvExporter();

      case ExportType.EXCEL:
        return new ExcelExporter();

      default:
        throw new Error(`Unsupported export type: ${type}`);
    }
  }
}
