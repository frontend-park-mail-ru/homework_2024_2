'use strict';

/**
 * Получает путь к вложенному свойству объекта и возвращает значение этого свойства.
 * 
 * @function
 * @param {object} obj - Объект, из которого нужно получить вложенное свойство.
 * @param {string} path - Строка, которая содержит путь к искомому значению.
 * @throws {Error} - Если указанный путь не строка.
 * @returns {*} Найденное свойство или undefined, если свойства не существует.
 */
const get = (obj, path) => {
    if (typeof path !== 'string') {
        throw new TypeError('path is not a string');
    }

    if (typeof obj !== 'object' || obj === null) {
        return undefined;
    }

    if (!path || path === '.') {
        return obj;
    }

    if (!path.startsWith(".")) {
        throw new TypeError('path does not start with "."');
    }

    const parts = path.slice(1).split('.');

    const result = parts.reduce((acc, part) => {
        if (acc === undefined) {
            return undefined;
        }

        if (typeof acc === 'string') {
            if (!isNaN(part)) {
                return acc[Number(part)];
            }
            return acc[part];
        }

        if (typeof acc === 'object') {
            return acc[part];
        }
        return;
    }, obj);

    return result;
};
