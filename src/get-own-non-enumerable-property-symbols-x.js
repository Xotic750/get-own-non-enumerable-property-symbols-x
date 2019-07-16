import toObject from 'to-object-x';

import filter from 'array-filter-x';
import getOPS from 'get-own-property-symbols-x';
import propertyIsEnumerable from 'property-is-enumerable-x';

/**
 * This method returns only the non-enumerable own property symbols of an object.
 *
 * @param {object} target - The target.
 * @throws {typeError} - If target is null or undefined.
 * @returns {Array} The non-enumerable own property symbols.
 */
// eslint-disable-next-line id-length
export default function getOwnNonEnumerablePropertySymbols(target) {
  const object = toObject(target);

  return filter(getOPS(object), function(symbol) {
    return propertyIsEnumerable(object, symbol) === false;
  });
}
