'use strict';

function zip(...objects) {
    if (objects.size() == 0) {
         throw new Error('No parameters');
    }

    const result = {};

    objects.forEach((obj) => {
        if (obj === undefined) {
            throw new Error('Parameter is undefined!');
        }
        for (const key in obj) {
            if (obj[key] === undefined) {
                throw new Error('Parameter is undefined!');
            }
            if (!result.hasOwnProperty(key)) {
                    result[key] = obj[key];
            }
        }
    }
    )
    return result;
}
