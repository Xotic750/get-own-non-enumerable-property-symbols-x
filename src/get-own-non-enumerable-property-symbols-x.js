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
const getOwnNonEnumerablePropertySymbols = function getOwnNonEnumerablePropertySymbols(target) {
  const object = toObject(target);

  return filter(getOPS(object), (symbol) => {
    return propertyIsEnumerable(object, symbol) === false;
  });
};

export default getOwnNonEnumerablePropertySymbols;
