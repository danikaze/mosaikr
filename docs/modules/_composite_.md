[mosaikr 0.0.1](../README.md) > ["composite"](../modules/_composite_.md)

# External module: "composite"

## Index

### Functions

* [composite](_composite_.md#composite)

---

## Functions

<a id="composite"></a>

###  composite

▸ **composite**(src: *`Sharp`*, dst: *`Sharp`*, top: *`number`*, left: *`number`*): `Promise`<`Sharp`>

*Defined in composite.ts:12*

Paste an image `src` onto another image `dst`.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| src | `Sharp` |  Image to paste onto \`dst\`. It needs to fit. |
| dst | `Sharp` |  Target of the operation |
| top | `number` |  Top position of \`src\` inside \`dst\` |
| left | `number` |  Left position of \`src\` inside \`dst\` |

**Returns:** `Promise`<`Sharp`>
Promise resolved to the `dst` object modified

___

