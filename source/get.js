'use strict';

const get = (obj, path) => {
    if (obj)
    if (!path || path === '.'){
        return obj; 
    } 

    const parts = path.slice(1).split('.'); 

    const result = parts.reduce((acc, part) => {
        if (acc !== undefined) {
            acc = acc[part];
        }
        return acc;
    }, obj);
    
    return result;
}
