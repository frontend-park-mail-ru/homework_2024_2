'use strict';

const zip = (...objects) => {
    /*** проверка на параметры */
    if (!objects.length) {
         throw new Error('No parameters');
    }

    const result = {};

    objects.forEach((obj) => {
        if (obj === undefined) {
            throw new TypeError('Parameter is undefined!');
        }
        for (const key in obj) {
            if (obj[key] === undefined) {
                throw new TypeError('Parameter is undefined!');
            }
            if (!result.hasOwnProperty(key)) {
                    result[key] = obj[key];
            }
        }
    }
    )
    return result;
};
