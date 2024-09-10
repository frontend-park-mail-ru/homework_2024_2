'use strict';

// Напишите функцию `get`, которая получает путь к вложенному свойству объекта и возвращает значение этого свойства (или undefined, если свойства не существует)

/**
 * Finds the value of an object's property by path to property.
 *
 * @param {object} object - Object to find a value in.
 * @param {string} pathToProperty - Path to property.
 * @returns {(object|undefined)} - Value of needed property or undefined if property is not found.
 */
const get = (object, pathToProperty) => {        
    if (!pathToProperty || typeof pathToProperty !== 'string') {
        throw new Error('Invalid data')
    }
    
    if (pathToProperty === '.') {
        return object;
    }

    const keys = pathToProperty.slice(1).split('.');
    let currentObject = object;

    return keys.reduce((accum, key) => accum === undefined ? undefined : accum[key], currentObject);
}
