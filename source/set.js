'use strict';

const set = function (object, path, value) {
    let pathArray = path.substring(1).split('.');
    let obj = object;
    for (let i = 0; i < pathArray.length - 1; i++) {
        if (!Object.hasOwn(obj, pathArray[i])) {
            obj[pathArray[i]] = {};
        }
        obj = obj[pathArray[i]];
    }
    obj[pathArray[pathArray.length - 1]] = value;
    return object;
}