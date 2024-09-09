'use strict';

/**
    * функция выделяющая все параметры и их значения
    * @param {obj} ...objects - Объекты, из которых выделяем значения и параметры
    * @returns {obj} Объект, содержащий все поля и значения объектов, переданных в качестве параметров
    * @throws {Error} Если нет параметров
    * @throws {TypeError} Если параметр nil
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

        for (const [key, value] of Object.entries(obj)) {
            if (!result.hasOwnProperty(key)) {
                    result[key] = value;
            }
        }
    }
    )
    return result;
};
