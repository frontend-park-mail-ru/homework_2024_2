'use strict';

const zip = (...objects) => {
    if (!objects.length) {
         throw new Error('No parameters');
    }

    const result = {};

    objects.forEach((obj) => {
        if (!obj) {
            throw new TypeError('Parameter is undefined!');
        }

        for (const [key, value] of Object.entries(obj)) {


            if (!result.hasOwnProperty(key)) {
                    result[key] = value;
            }
        }
    }
    )
    return result;
};
