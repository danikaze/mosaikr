import { mosaikr, MosaikrOptions } from '../src';


export function createMosaic(input: string[], output: string, columns: number, rows: number): Promise<string> {
  return new Promise<string>((resolve) => {
    const size = 500;
    const width = columns * size;
    const height = rows * size;

    const options: MosaikrOptions = {
      input,
      output,
      width,
      height,
      columns,
      rows,
      formatOptions: { quality: 100 },
    };

    mosaikr(options)
      .then(() => resolve(output));
  });
}
