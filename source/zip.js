"use strict"


const zip = (...objects) => {
    return objects.reduce((result, obj) => {
        for (const key in obj)
            if (!(key in result))
                result[key] = obj[key];
        return result;
    }, {});
}
