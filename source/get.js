'use strict'
/**
 * Get - получение значения вложенного свойства объекта по пути
 * @param {Object} obj - Объект
 * @param {String} path - Путь к свойству в объекте, разделенный точками
 * @returns {*} Значение свойства по пути, undefined - если свойства нет
 */
const get = (obj, path) => path.split('.').filter(str => str !== "").reduce((acc, key) => acc?.[key], obj);

