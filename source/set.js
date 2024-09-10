"use strict";


/**
 * Recursively inserts newProperty to object by the path
 * @param {Object} object - object to change
 * @param {String[]} propertyList - array of strings 
 * @param {Number|String|BigInt|Boolean|Object|null|undefined
 *          |Number[]|String[]|BigInt[]|Boolean[]|Object[]} newProperty - instance of any type: number, string, etc.                                     
 * @returns {Object} Returns modified object
 */
const changeNestedProperty = ( object, propertyList, newProperty ) =>
    {
            if ( !propertyList.length )
            {
                return newProperty;
            }

            if ( !object.hasOwnProperty( propertyList[ 0 ] ) )
            {
                object[ propertyList[ 0 ] ] = {};
            }
 
            object[ propertyList[ 0 ] ] = changeNestedProperty( object[propertyList[ 0 ] ], propertyList.slice( 1 ), newProperty );
            return object;
            
    };


/**
 * Inserts newProperty to object by the path
 * @param {Object} object - object to change
 * @param {String} path - string, which describes path to nested property newProperty
 * @param {Number|String|BigInt|Boolean|Object|null|undefined
*          |Number[]|String[]|BigInt[]|Boolean[]|Object[]} newProperty - instance of any type: number, string, etc.                                     
* @returns {Object} Returns modified object if path is correct else returns original object
*/
const set = ( object, path, newProperty ) =>
{
    if ( typeof path !== "string" || path[ 0 ] !== "." || ! path.length)
    {
        return object;
    }
    let propertyList = path.split( "." ).slice( 1 );
    let newObject = changeNestedProperty( object, propertyList, newProperty );
    
    return newObject;
};
