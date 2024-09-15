'use strict';


/**
 * Recursively inserts newProperty to object by the path
 * @param {Object} object - object to change
 * @param {String[]} propertyList - array of strings 
 * @param {*} newProperty - instance of any type: number, string, etc. - new property for object                                     
 * @returns {Object} Returns modified object
 */
const changeNestedProperty = (object, propertyList, newProperty) => {
            if (!propertyList.length) {
                return newProperty;
            }
            if (!object.hasOwnProperty(propertyList[0])) {
                object[propertyList[0]] = {};
            }
            object[propertyList[0]] = changeNestedProperty(object[propertyList[0]], propertyList.slice(1), newProperty);
            return object;
            
    };


/**
 * Inserts newProperty to object by the path
 * @param {Object} object - object to change
 * @param {String} path - string, which describes path to nested property newProperty: each path element must contain "." before itself
 * @param {*} newProperty - instance of any type: number, string, etc. - new property for object                                     
 * @returns {Object} Returns modified object if path is correct else returns original object
*/
const set = (object, path, newProperty) => {
    if (!(path instanceof String) || !path.length || path[0] !== '.') {
        return object;
    }
    const propertyList = path.split('.').slice(1);
    return changeNestedProperty(object, propertyList, newProperty);
};
