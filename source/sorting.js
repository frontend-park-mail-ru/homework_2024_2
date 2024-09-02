'use strict';

const sorting = (initial, fields) => {
    fields.reverse().forEach(field => {
        initial.sort((a, b) => {
            if (a[field] === b[field]) return 0;
            return a[field] < b[field] ? -1 : 1;
        });
    })
    return initial;
}
