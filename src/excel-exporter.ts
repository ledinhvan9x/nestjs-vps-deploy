import { Exporter } from './exporter.interface';

export class ExcelExporter implements Exporter {
  export(data: unknown[]): string {
    return `Exported ${data.length} records as Excel`;
  }
}
