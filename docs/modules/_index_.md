[mosaikr 0.1.0](../README.md) > ["index"](../modules/_index_.md)

# External module: "index"

## Index

### Interfaces

* [MosaikrOptions](../interfaces/_index_.mosaikroptions.md)

### Functions

* [mosaikr](_index_.md#mosaikr)

---

## Functions

<a id="mosaikr"></a>

###  mosaikr

▸ **mosaikr**(options: *[MosaikrOptions](../interfaces/_index_.mosaikroptions.md)*): `Promise`< `void` &#124; `Sharp`>

*Defined in [index.ts:49](https://github.com/danikaze/mosaikr/blob/f3dbc6e/src/index.ts#L49)*

Create a mosaic of images
*__example__*: // this will create a 3x2 grid where each image is 200x200px mosaikr({ input: \['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'\], columns: 3, rows: 2, width: 600, height: 400, output: 'mosaic.jpg', });

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| options | [MosaikrOptions](../interfaces/_index_.mosaikroptions.md) |  \- |

**Returns:** `Promise`< `void` &#124; `Sharp`>
`Promise<Sharp>` if `output` is not specified
         If `output` is specified it will return a `Promise<void>` (then, a file will be created in that path)

___

