'use strict';

/**
    * функция выделяющая все параметры и их значения
    * @param {Array.<Object>} ...objects - Объекты, из которых выделяем значения и параметры
    * @returns {Object} Объект, содержащий все поля и значения объектов, переданных в качестве параметров
    * @throws {Error} Если нет параметров
    * @throws {TypeError} Если параметр undefind
    * @throws {TypeError} Если параметр примитив
 */
const zip = (...objects) => {
    if (!objects.length) {
         throw new Error('No parameters');
    }

    const result = {};

    objects.forEach((obj) => {
        if (!obj) {
            throw new TypeError('Parameter is undefined!');
        }
        if (obj !== Object(obj)) {
            throw new TypeError('Parameter must be an object!');
        }
        if (!obj.toString().includes('object')) {
            throw new TypeError('Parameter class is not available!');
        }


        Object.entries(obj).forEach(([key, value]) => {
            if (!result.hasOwnProperty(key)) {
                result[key] = value;
            }
        });
    });

    return result;
};
