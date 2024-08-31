'use strict';

const set = (obj, path, value) => {
    if (path !== '') {
        const pathArray = path.replace(/\[(\w+)\]|\["(.+?)"\]/g, '.$1$2').split('.').filter(Boolean);

        let acc = obj;

        let prevKey = 0;

        pathArray.forEach((key, index) => {
            if (index !== 0) {
                if (/\[(-\w+)\]/.test(prevKey)) {
                    throw new Error("Addressing an array element with a negative key is invalid");
                }

                acc = acc[prevKey] = (typeof acc[prevKey] !== 'object')
                    ? (/^\d+$/.test(key) ? [] : {}) : acc[prevKey];
            }

            prevKey = key;
        });

        acc[prevKey] = value;
    }

    return obj;
};
