'use strict';

/**
 * Регулярные выражения, используемые для обработки пути к свойству объекта.
 * @type {Object}
 * @property {RegExp} PATH - Регулярное выражение для поиска ключей в квадратных скобках.
 * @property {RegExp} INVALID_KEY - Регулярное выражение для проверки некорректных ключей.
 * @property {RegExp} MASSIVE - Регулярное выражение для проверки числовых индексов.
 */
const REGEX_PATTERNS = {
    PATH: /\[(\w+)\]|\["(.+?)"\]/g,
    INVALID_KEY: /\[(-\w+)\]/,
    MASSIVE: /^\d+$/
};

/**
 * Устанавливает значение в указанное свойство объекта, используя путь.
 *
 * @param {Object} obj - Объект, в который нужно установить значение.
 * @param {string} path - Путь к свойству объекта в виде строки.
 * Путь может быть задан в виде 'a.b.c' или 'a[0].b["key"]'.
 * @param {*} value - Значение, которое необходимо установить.
 * @returns {Object} Объект с установленным значением.
 * @throws {Error} Если пытаются обратиться к элементу массива с отрицательным индексом.
 *
 * @example
 * const obj = {};
 * set(obj, 'a.b.c', 42);
 * // obj теперь равно { a: { b: { c: 42 } } }
 *
 * @example
 * const obj = {};
 * set(obj, 'a[0].b["key"]', 'value');
 * // obj теперь равно { a: [ { b: { key: 'value' } } ] }
 */
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
