"use strict";

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
    let result = {};

    for (let key in obj) {
        const newKey = prefix ? `${prefix}.${key}` : key;

        // Проверяем на объект и исключаем falsy значения (включая null)
        if (typeof obj[key] === 'object' && obj[key]) {
            if (Array.isArray(obj[key])) {
                obj[key].forEach((item, index) => {
                    result = { ...result, ...plainify(item, `${newKey}[${index}]`) };
                });
            } else {
                Object.assign(result, plainify(obj[key], newKey));
            }
        } else {
            result[newKey] = obj[key];
        }
    }

    return result;
};
