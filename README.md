# mosaikr

Create a mosaic from a list of images.

It uses [Sharp](https://github.com/lovell/sharp) to operate on images.

## Install

Install with [npm](https://www.npmjs.com/)
```
npm install mosaikr
```

## Usage

```ts
import { mosaikr } from 'mosaikr';

// This will create a 3x2 grid where each image is 200x200px
mosaikr({
  input: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'],
  columns: 3,
  rows: 2,
  width: 600,
  height: 400,
  output: 'mosaic.jpg',
});
```

```ts
import { mosaikr } from 'mosaikr';

// This will do the same but it won't output the image.
// Instead, a Sharp object will be returned asynchronously to allow other operations
// (note that there's no output parameter here)
const img = await mosaikr({
  input: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'],
  columns: 3,
  rows: 2,
  width: 600,
  height: 400,
});

// Now you can do whatever you want here
// (this code will do exactly the same as above)
img.toFormat('jpeg')
   .toFile('mosaic.jpg');
```
