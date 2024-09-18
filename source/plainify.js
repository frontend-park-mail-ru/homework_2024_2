'use strict';

/**
 * Преобразует вложенный объект в плоский объект, где ключи представляют путь к значению через вложенные объекты.
 *
 * @param {Object} obj - Входной объект, который нужно преобразовать.
 * @param {string} [prefix=''] - Префикс для ключей. Используется при рекурсивном вызове для сохранения пути к свойствам.
 * @returns {Object} - Возвращает плоский объект, где ключи содержат путь к значению через вложенные объекты.
 * 
 * @throws {TypeError} Если передан не объект, выбрасывается ошибка.
 * 
 * @example
 * plainify({ foo: 'bar', baz: { qux: 42 } });
 * // Возвращает { 'foo': 'bar', 'baz.qux': 42 }
 *
 * @example
 * plainify({ a: { b: { c: 1 } } });
 * // Возвращает { 'a.b.c': 1 }
 */

// Функция для проверки, является ли значение объектом
const isPlainObject = (value) => {
    return typeof value === 'object' && value !== null && !Array.isArray(value) && !(value instanceof String);
};

const plainify = (obj, prefix = '') => {
    if (Object.prototype.toString.call(obj) !== '[object Object]') {
        throw new TypeError('Invalid input: plainify expects an object');
    }

    return Object.entries(obj).reduce((acc, [key, value]) => {
        const newKey = prefix ? `${prefix}.${key}` : key;

        if (isPlainObject(value)) {
            Object.assign(acc, plainify(value, newKey));
        } else {
            acc[newKey] = value instanceof String ? value.toString() : value;
        }

        return acc;
    }, {});
};
