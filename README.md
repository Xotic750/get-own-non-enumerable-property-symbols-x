<a href="https://travis-ci.org/Xotic750/get-own-non-enumerable-property-symbols-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/get-own-non-enumerable-property-symbols-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a href="https://david-dm.org/Xotic750/get-own-non-enumerable-property-symbols-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/get-own-non-enumerable-property-symbols-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/get-own-non-enumerable-property-symbols-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/get-own-non-enumerable-property-symbols-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/get-own-non-enumerable-property-symbols-x"
  title="npm version">
<img src="https://badge.fury.io/js/get-own-non-enumerable-property-symbols-x.svg"
  alt="npm version" height="18">
</a>
<a href="https://www.jsdelivr.com/package/npm/get-own-non-enumerable-property-symbols-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/get-own-non-enumerable-property-symbols-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>

<a name="module_get-own-non-enumerable-property-symbols-x"></a>

## get-own-non-enumerable-property-symbols-x

Like Object.getOwnPropertySymbols but gets only non-enumerable properties.

<a name="exp_module_get-own-non-enumerable-property-symbols-x--module.exports"></a>

### `module.exports(target)` ⇒ <code>Array</code> ⏏

This method returns only the non-enumerable own property symbols of an object.

**Kind**: Exported function  
**Returns**: <code>Array</code> - The non-enumerable own property symbols.  
**Throws**:

- <code>typeError</code> - If target is null or undefined.

| Param  | Type                | Description |
| ------ | ------------------- | ----------- |
| target | <code>Object</code> | The target. |

**Example**

```js
import getOwnNonEnumerablePropertySymbols from 'get-own-non-enumerable-property-symbols-x';

const obj = {bar: 1, foo: 2};

const symbol1 = Symbol('first');
Object.defineProperty(obj, symbo1l, {
  enumerable: false,
  value: 'first',
});

const symbol2 = Symbol('second');
Object.defineProperty(obj, symbol2, {
  enumerable: true,
  value: 'second',
});

console.log(getOwnNonEnumerablePropertySymbols(obj)); // [symbol1]
```
