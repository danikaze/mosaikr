import * as sharp from 'sharp';

/**
 * Paste an image `src` onto another image `dst`.
 *
 * @param src Image to paste onto `dst`. It needs to fit.
 * @param dst Target of the operation
 * @param top Top position of `src` inside `dst`
 * @param left Left position of `src` inside `dst`
 * @returns Promise resolved to the `dst` object modified
 */
export async function composite(src: sharp.Sharp, dst: sharp.Sharp, top: number, left: number): Promise<sharp.Sharp> {
  dst.overlayWith(await src.toBuffer(), { top, left });
  const { channels, width, height } = await dst.metadata();
  const img = sharp(await dst.toBuffer(), { raw: { channels, width, height } });

  return img;
}
