/**
 * Рекурсивно преобразует вложенный объект или массив в плоскую структуру с полными путями.
 *
 * @param {Object|Array} current - Входной объект или массив для обработки.
 * @param {string} property - Полный путь до текущего значения.
 * @param {Object} resultMap - Объект для хранения результатов.
 * @returns {Object} - Объект с плоской структурой.
 */
const recursiveIteration = (current, property) => {
    if (Array.isArray(current) || typeof current !== 'object') {
        return { [property]: current };
    }

    return Object.entries(current).reduce((acc, [key, value]) => {
        const newProperty = property ? `${property}.${key}` : key;
        return { ...acc, ...recursiveIteration(value, newProperty) };
    }, {});
};
/**
 * Преобразует вложенный объект или массив в плоскую структуру с полными путями.
 *
 * Если на вход подан null или не объект (например, строка, число), то возвращается его же.
 *
 * @param {Object|Array} nested - Входной объект или массив для преобразования в плоскую структуру.
 * @returns {Object} - Плоская структура с ключами, представляющими полный путь до значения.
 */
const plainify = (nested) => {
    if (!nested || typeof nested != 'object' || Object.prototype.toString.call(nested) != '[object Object]' ){
            throw new Error;
    }
    return recursiveIteration(nested, '');
};