function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

import toObject from 'to-object-x';
import filter from 'array-filter-x';
import getOPS from 'get-own-property-symbols-x';
import propertyIsEnumerable from 'property-is-enumerable-x';
/**
 * This method returns only the non-enumerable own property symbols of an object.
 *
 * @param {object} target - The target.
 * @throws {TypeError} - If target is null or undefined.
 * @returns {Array} The non-enumerable own property symbols.
 */

export default function getOwnNonEnumerablePropertySymbols(target) {
  var _this = this;

  var object = toObject(target);
  return filter(getOPS(object), function (symbol) {
    _newArrowCheck(this, _this);

    return propertyIsEnumerable(object, symbol) === false;
  }.bind(this));
}

//# sourceMappingURL=get-own-non-enumerable-property-symbols-x.esm.js.map