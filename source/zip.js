'use strict';

function zip(...objects) {
    const result = {};

    for (const obj of objects) {
        for (const key in obj) {
            if (!result.hasOwnProperty(key)) {
                result[key] = obj[key];
            }
        }
    }
    return result;
}
