'use strict';

/**
 * Сортирует массив initial по полям fields
 * @param {object[]} initial 
 * @param {string[]} fields 
 * @returns {object[]}
 */
const sorting = (initial, fields) => {
    if (!Array.isArray(initial) || !Array.isArray(fields)) {
        throw new Error('initial and fields must be arrays');
    }
    let sorted = initial.slice();
    fields.slice().reverse().forEach(field => {
        if (typeof field !== 'string' && !(field instanceof String)) {
            throw new Error('fields must contain only strings');
        }
        sorted = quickSort(sorted, (a, b) => {
            if (typeof a !== 'object' || typeof b !== 'object') {
                throw new Error('initial must contain only objects');
            }
            if (a[field] === b[field]) {
                return 0;
            }
            return a[field] < b[field] ? -1 : 1;
        });
    });
    return sorted;
};

/**
 * Сортирует массив arr
 * @param {any[]} arr 
 * @param {(a: any, b:any) => number} callback 
 * Функция используется для определения положения элементов массива. Если она возвращает отрицательное число, a будет левее b, если 0, то они равны, если положительное число, то a правее b
 * @returns {any[]}
 */
const quickSort = (arr, callback) => {
    if (arr.length <= 1) {
        return arr;
    };
    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (callback(arr[i], pivot) < 0) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left, callback).concat(pivot, quickSort(right, callback));
};
