import * as sharp from 'sharp';

import { composite } from './composite';
import { getSizes } from './getSizes';

export interface MosaikrOptions {
  /** Paths to the list of photos to use (in that order). Needs to have `columns * rows` elements */
  input: string[];
  /** Width of the resulting image in px */
  width: number;
  /** Height of the resulting image in px */
  height: number;
  /** Number of columns of the mosaic */
  columns: number;
  /** Number of rows of the mosaic */
  rows: number;
  /** Path to output the result img. If not specified, will return the `Sharp` object */
  output?: string;
  /** How the image should be resized to fit both provided dimensions */
  fit?: keyof sharp.FitEnum;
  /** Format of the output image */
  format?: 'jpeg' | 'png' | 'webp' | 'tiff';
  /** Format options */
  formatOptions?: sharp.JpegOptions | sharp.PngOptions | sharp.WebpOptions | sharp.TiffOptions;
}

const defaultOptions: Partial<MosaikrOptions> = {
  format: 'jpeg',
};

/**
 * Create a mosaic of images
 *
 * @param options
 * @returns `Promise<Sharp>` if `output` is not specified
 *          If `output` is specified it will return a `Promise<void>` (then, a file will be created in that path)
 *
 * @example
 * // this will create a 3x2 grid where each image is 200x200px
 * mosaikr({
 *   input: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'],
 *   columns: 3,
 *   rows: 2,
 *   width: 600,
 *   height: 400,
 *   output: 'mosaic.jpg',
 * });
 */
export async function mosaikr(options: MosaikrOptions): Promise<void | sharp.Sharp> {
  return new Promise<void | sharp.Sharp>(async(resolve, reject) => {
    const opt: MosaikrOptions = { ...defaultOptions, ...options };
    const ws = getSizes(opt.width, opt.columns);
    const hs = getSizes(opt.height, opt.rows);

    let mosaic = sharp({
      create: {
        width: opt.width,
        height: opt.height,
        channels: 3,
        background: { r: 255, g: 255, b: 255 },
      },
    });

    let left: number;
    let top = 0;
    let imgIndex = 0;

    for (let j = 0; j < opt.columns; j++) {
      left = 0;
      const h = hs[j];
      for (let i = 0; i < opt.rows; i++) {
        const w = ws[i];
        const img = sharp(opt.input[imgIndex++]);
        img.resize(w, h, { fit: opt.fit });
        mosaic = await composite(img, mosaic, top, left);
        left += w;
      }
      top += h;
    }

    if (opt.output) {
      mosaic
        .toFormat(opt.format, opt.formatOptions)
        .toFile(opt.output)
        .then(() => resolve());
    } else {
      resolve(mosaic);
    }
  });
}
