'use strict';

// Напишите функцию `get`, которая получает путь к вложенному свойству объекта и возвращает значение этого свойства (или undefined, если свойства не существует)

/**
 * Finds the value of an object's property by path to property.
 *
 * @param {object} object - Object to find a value in.
 * @param {string} pathToProperty - Path to property.
 * @throws {Error} - If type of pathToProperty is not string or type of object is not object
 * @returns {(object|undefined)} - Value of needed property or undefined if property is not found.
 */
const get = (object, pathToProperty) => {        
    if (typeof pathToProperty !== 'string' || typeof object !== 'object' || !pathToProperty || Array.isArray(object)) {
        throw new Error('Invalid data')
    }

    if (pathToProperty === '.') {
        return object;
    }

    return pathToProperty.slice(1).split('.').reduce((accum, key) => accum === undefined ? undefined : accum[key], object);
}
