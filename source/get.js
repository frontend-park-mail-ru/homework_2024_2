'use strict';

function get(obj, path) {
    if (!path || path === '.') return obj; 

    const parts = path.slice(1).split('.'); 

    for (const part of parts) {
        if (obj === undefined || obj === null) {
            return undefined;
        }
        obj = obj[part];
    }
    
    return obj;
}
