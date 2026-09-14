import { Exporter } from './exporter.interface';

export class CsvExporter implements Exporter {
  export(data: unknown[]): string {
    return `Exported ${data.length} records as CSV`;
  }
}
