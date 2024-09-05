
const plainify = (obj, prefix = '') => {
    let result = {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = prefix ? `${prefix}.${key}` : key;
            if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
                Object.assign(result, plainify(obj[key], newKey));
            } else {
                result[newKey] = obj[key];
            }
        }
    }

    return result;
};
