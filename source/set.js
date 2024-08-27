'use strict';

/* Наиболее короткое решение, однако по скорости в среднем немного проигрывает, хотя разница и не значительна

const set = (obj, path, value) => {
    const pathArray = path.replace(/\[(\w+)\]|\["(.+?)"\]/g, '.$1$2').split('.').filter(Boolean);

    pathArray.reduce((acc, key, index) => {
        if (/\[(-\w+)\]/.test(key)) {
            throw new Error("Addressing an array element with a negative key is invalid");
        }

        return acc[key] = (index === pathArray.length - 1) ? value : (typeof acc[key] !== 'object' || acc[key] === null)
            ? (/^\d+$/.test(pathArray[index + 1]) ? [] : {}) : acc[key];
    }, obj);

    return obj;
};

*/

// Более читабельный (по времени +- совпадает с первым решением, в среднем немного быстрее, но не значительно)
const set = (obj, path, value) => {
    const pathArray = path.replace(/\[(\w+)\]|\["(.+?)"\]/g, '.$1$2').split('.').filter(Boolean);

    let acc = obj;

    let index = 0;
    let prev_key = 0;

    pathArray.forEach((key) => {
        if (index !== 0) {
            if (/\[(-\w+)\]/.test(prev_key)) {
                throw new Error("Addressing an array element with a negative key is invalid");
            }

            acc = acc[prev_key] = (typeof acc[prev_key] !== 'object')
                ? (/^\d+$/.test(key) ? [] : {}) : acc[prev_key];
        }

        prev_key = key;
        index++;
    });

    if (index !== 0) acc[prev_key] = value;

    return obj;
};
