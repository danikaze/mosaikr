import { join, basename } from 'path';
import { existsSync } from 'fs';
import { createMosaic } from './createMosaic';
import { getFiles } from './getFiles';

const promises: Promise<void>[] = [];
const settings = [
  { rows: 2, columns: 2 },
  { rows: 2, columns: 3 },
  { rows: 3, columns: 3 },
];
// __dirname would be build/test
const testFolder = join(__dirname, '..', '..', 'test');
const inputDir = join(testFolder, 'photos');
const outputDir =  join(testFolder, 'output');

if (!existsSync(inputDir)) {
  console.log(`Error: input dir (${inputDir}) doesn't exist`);
}
if (!existsSync(outputDir)) {
  console.log(`Error: input dir (${outputDir}) doesn't exist`);
}

settings.forEach(({ rows, columns }) => {
  console.log(`Creating ${columns}x${rows} mosaics...`);
  let page = 0;
  for (;;) {
    page++;
    const n = rows * columns;
    const output = join(outputDir, `mos${n}-${String(page).padStart(3, '0')}.jpg`)
    if (existsSync(output)) {
      console.log(`Page ${page} (${basename(output)}) already exist. Skipping...`);
      continue;
    }

    const first = 1 + (n * (page - 1));
    const input = getFiles(inputDir, first, n);
    if (input.length !== n) {
      return;
    }

    console.log(`Creating page ${page} (${basename(output)})...`);
    const promise = createMosaic(input, output, columns, rows)
      .then((file) => console.log(`Mosaic created: ${file}`));
    promises.push(promise);
  }
})

Promise.all(promises).then(() => {
  console.log('End');
});
