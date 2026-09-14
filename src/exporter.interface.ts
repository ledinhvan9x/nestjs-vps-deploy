export interface Exporter {
  export(data: unknown[]): string;
}
