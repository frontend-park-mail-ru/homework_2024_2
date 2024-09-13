'use strict';

const set = (object, path, value) => {
    const pathArray = path.substring(1).split('.');
    const result = object;
    for (let i = 0; i < pathArray.length - 1; i++) {
        if (!Object.hasOwn(object, pathArray[i])) {
            object[pathArray[i]] = {};
        }
        object = object[pathArray[i]];
    }
    object[pathArray[pathArray.length - 1]] = value;
    return result;
}