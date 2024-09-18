'use strict';

const set = (object, path, value) => {
  path.substring(1).split('.').reduce((obj, currentKey, index) => {
    if (!Object.hasOwn(obj, currentKey)) {
      obj[currentKey] = {};
    }
    if (index == path.substring(1).split('.').length - 1) {
      obj[currentKey] = value;
    }
    return obj[currentKey];
  }, object);
  return object;
  }
