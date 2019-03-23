[mosaikr 0.1.1](../README.md) > ["index"](../modules/_index_.md) > [MosaikrOptions](../interfaces/_index_.mosaikroptions.md)

# Interface: MosaikrOptions

## Hierarchy

**MosaikrOptions**

## Index

### Properties

* [columns](_index_.mosaikroptions.md#columns)
* [fit](_index_.mosaikroptions.md#fit)
* [format](_index_.mosaikroptions.md#format)
* [formatOptions](_index_.mosaikroptions.md#formatoptions)
* [height](_index_.mosaikroptions.md#height)
* [input](_index_.mosaikroptions.md#input)
* [output](_index_.mosaikroptions.md#output)
* [rows](_index_.mosaikroptions.md#rows)
* [width](_index_.mosaikroptions.md#width)

---

## Properties

<a id="columns"></a>

###  columns

**● columns**: *`number`*

*Defined in [index.ts:14](https://github.com/danikaze/mosaikr/blob/679c260/src/index.ts#L14)*

Number of columns of the mosaic

___
<a id="fit"></a>

### `<Optional>` fit

**● fit**: *`keyof FitEnum`*

*Defined in [index.ts:20](https://github.com/danikaze/mosaikr/blob/679c260/src/index.ts#L20)*

How the image should be resized to fit both provided dimensions

___
<a id="format"></a>

### `<Optional>` format

**● format**: * "jpeg" &#124; "png" &#124; "webp" &#124; "tiff"
*

*Defined in [index.ts:22](https://github.com/danikaze/mosaikr/blob/679c260/src/index.ts#L22)*

Format of the output image

___
<a id="formatoptions"></a>

### `<Optional>` formatOptions

**● formatOptions**: * `JpegOptions` &#124; `PngOptions` &#124; `WebpOptions` &#124; `TiffOptions`
*

*Defined in [index.ts:24](https://github.com/danikaze/mosaikr/blob/679c260/src/index.ts#L24)*

Format options

___
<a id="height"></a>

###  height

**● height**: *`number`*

*Defined in [index.ts:12](https://github.com/danikaze/mosaikr/blob/679c260/src/index.ts#L12)*

Height of the resulting image in px

___
<a id="input"></a>

###  input

**● input**: *`string`[]*

*Defined in [index.ts:8](https://github.com/danikaze/mosaikr/blob/679c260/src/index.ts#L8)*

Paths to the list of photos to use (in that order). Needs to have `columns * rows` elements

___
<a id="output"></a>

### `<Optional>` output

**● output**: *`string`*

*Defined in [index.ts:18](https://github.com/danikaze/mosaikr/blob/679c260/src/index.ts#L18)*

Path to output the result img. If not specified, will return the `Sharp` object

___
<a id="rows"></a>

###  rows

**● rows**: *`number`*

*Defined in [index.ts:16](https://github.com/danikaze/mosaikr/blob/679c260/src/index.ts#L16)*

Number of rows of the mosaic

___
<a id="width"></a>

###  width

**● width**: *`number`*

*Defined in [index.ts:10](https://github.com/danikaze/mosaikr/blob/679c260/src/index.ts#L10)*

Width of the resulting image in px

___

