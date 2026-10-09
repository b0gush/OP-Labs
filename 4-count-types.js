'use strict';

const countTypesInArray = (array) => {
  const result = {};
  for (const element of array) {
    const elementType = typeof element;
    const count = result[elementType] ?? 0;
    result[elementType] = count + 1;
  }
  return result;
};

module.exports = { countTypesInArray };
