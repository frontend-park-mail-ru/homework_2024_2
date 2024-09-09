'use strict';


/**
 * Recursively inserts newProperty to object by the path
 * @returns {Object} Returns modified object
 */
const changeNestedProperty = (object, propertyList, newProperty) =>
    {
            if ( !( propertyList.length ) )
            {
                return newProperty;
            }

            if ( !( propertyList[0] in object ) )
            {
                object[ propertyList[0] ] = {};
            }
 
            object[ propertyList[0] ] = changeNestedProperty( object[propertyList[0] ], propertyList.slice(1), newProperty ); ;
            return object;
            
    };


const set = (object, path, newProperty) =>
{
    if ( path[0] !== "." )
    {
        return object;
    }
    let propertyList = path.split( "." ).slice( 1 );
    let newObject = changeNestedProperty( object, propertyList, newProperty );
    
    return newObject;
};
