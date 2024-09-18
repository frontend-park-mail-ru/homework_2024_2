'use strict';

function set(object, path, value) {
    const pathArray = path.substring(1).split('.');
    pathArray.reduce((obj, currentKey, index) => {
      if (!Object.hasOwn(obj, currentKey)) {
        obj[currentKey] = {};
      }
      if (index == pathArray.length - 1) {
        obj[currentKey] = value;
      }
      return obj[currentKey];
    }, object);
    return object;
  }
  