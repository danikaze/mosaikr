import { readdirSync } from 'fs';
import { join } from 'path';

const re = /^(\d+)-.*\.jpg/i;

export function getFiles(dir: string, first: number, qty: number): string[] {
  const res: string[] = [];

  readdirSync(dir).forEach((file) => {
    const match = re.exec(file);
    if (match) {
      const n = Number(match[1]);
      if (n >= first && n < first + qty) {
        res.push(join(dir, file));
      }
    }
  });
  res.sort();

  return res;
}