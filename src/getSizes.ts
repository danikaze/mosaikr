/**
 * Divide the `total` available space into `n` parts, returning the exact amount on integers
 *
 * @param total Available space
 * @param n Parts to divide the space in
 * @returns list of sizes
 *
 * @example
 * getSizes(12, 4); // [3, 3, 3, 3]
 * getSizes(10, 3); // [3, 4, 3]
 */
export function getSizes(total: number, n: number): number[] {
  const sizes: number[] = [];
  const part = total / n;
  let acc = 0;
  let rac = 0;
  for (let i = 0; i < n; i++) {
    acc += part;
    const rpart = Math.round(acc) - rac;
    sizes.push(rpart);
    rac += rpart;
  }
  return sizes;
}
