[mosaikr 0.1.1](../README.md) > ["getSizes"](../modules/_getsizes_.md)

# External module: "getSizes"

## Index

### Functions

* [getSizes](_getsizes_.md#getsizes)

---

## Functions

<a id="getsizes"></a>

###  getSizes

▸ **getSizes**(total: *`number`*, n: *`number`*): `number`[]

*Defined in [getSizes.ts:12](https://github.com/danikaze/mosaikr/blob/679c260/src/getSizes.ts#L12)*

Divide the `total` available space into `n` parts, returning the exact amount on integers
*__example__*: getSizes(12, 4); // \[3, 3, 3, 3\] getSizes(10, 3); // \[3, 4, 3\]

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| total | `number` |  Available space |
| n | `number` |  Parts to divide the space in |

**Returns:** `number`[]
list of sizes

___

