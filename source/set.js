'use strict';

const REGEX_PATTERNS = {
    PATH: /\[(\w+)\]|\["(.+?)"\]/g,
    INVALID_KEY: /\[(-\w+)\]/,
    MASSIVE: /^\d+$/
};

const set = (obj, path, value) => {
    if (path !== '') {
        const pathArray = path.replace(REGEX_PATTERNS.PATH, '.$1$2').split('.').filter(Boolean);

        let acc = obj;

        let prevKey = 0;

        pathArray.forEach((key, index) => {
            if (index !== 0) {
                if (REGEX_PATTERNS.INVALID_KEY.test(prevKey)) {
                    throw new Error("Addressing an array element with a negative key is invalid");
                }

                acc = acc[prevKey] = (typeof acc[prevKey] !== 'object' || acc[prevKey] === null || !(acc[prevKey] instanceof Object))
                    ? (REGEX_PATTERNS.MASSIVE.test(key) ? [] : {}) : acc[prevKey];
            }

            prevKey = key;
        });

        acc[prevKey] = value;
    }

    return obj;
};
