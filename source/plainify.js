'use strict';

/**
 * Преобразует вложенный объект в плоский объект, где ключи представляют путь к значению через вложенные объекты.
 *
 * @param {Object} obj - Входной объект, который нужно преобразовать.
 * @param {string} [prefix=''] - Префикс для ключей. Используется при рекурсивном вызове для сохранения пути к свойствам.
 * @returns {Object} - Возвращает плоский объект, где ключи содержат путь к значению через вложенные объекты.
 * 
 * @throws {Error} Если передан не объект, выбрасывается ошибка.
 * 
 * @example
 * plainify({ foo: 'bar', baz: { qux: 42 } });
 * // Возвращает { 'foo': 'bar', 'baz.qux': 42 }
 *
 * @example
 * plainify({ a: { b: { c: 1 } } });
 * // Возвращает { 'a.b.c': 1 }
 */




const plainify = (obj, prefix = '') => {
    if (Object.prototype.toString.call(obj) !== '[object Object]') {
        throw new Error('Invalid input: plainify expects an object');
    }

    return Object.keys(obj).reduce((acc, key) => {
        const newKey = prefix ? `${prefix}.${key}` : key;

        if (typeof obj[key] === 'object' && obj[key] && !Array.isArray(obj[key]) && !(obj[key] instanceof String)) {
            if (Array.isArray(obj[key])) {
                obj[key].forEach((item, index) => {
                    Object.assign(acc, plainify(item, `${newKey}[${index}]`));
                });
            } else {
                Object.assign(acc, plainify(obj[key], newKey));
            }
        } else {
            acc[newKey] = obj[key] instanceof String ? obj[key].toString() : obj[key];
        }

        return acc;
    }, {});
};

