'use strict';


const changeNestedProperty = (object, propertyList, newProperty) =>
    {
            if (propertyList.length == 0)
            {
                return newProperty;
            }

            if (!( propertyList[0] in object ))
            {
                object[ propertyList[0] ] = {};
            }

            let nestedObj = changeNestedProperty(object[propertyList[0]], propertyList.slice(1), newProperty);  
            object[propertyList[0]] = nestedObj;
            return object;
            
    };


const set = (object, path, newProperty) =>
{
    let propertyList = (path.split(".")).slice(1);
    let newObject = changeNestedProperty(object, propertyList, newProperty);
    
    return newObject;
};
