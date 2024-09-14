/**
 * Удаляет из строки символы, которые встречаются в ней больше одного раза.
 * Если `keepFirst` равно `true`, оставляет только первое вхождение повторяющихся символов.
 * Если `keepFirst` равно `false`, оставляет только последнее вхождение повторяющихся символов.
 * Если `keepFirst` не передан, удаляет все повторяющиеся символы.
 *
 * @param {*} str - Исходная строка.
 * @param {boolean} [keepFirst] - Флаг, определяющий, сохранять ли первое вхождение (`true`) или последнее (`false`). Если не указан, удаляются все повторяющиеся символы.
 * @returns {string} - Обработанная строка без повторяющихся символов в соответствии с указанным флагом.
 * @throws {TypeError} - Если `str` не является строкой или не имеет свойства `length`.
 */
function letters(str, keepFirst) {
    if (typeof str !== 'string') {
        throw new TypeError(`Ожидалась строка, но получен тип ${typeof str}`);
    }

    if (typeof str.length !== 'number') {
        throw new TypeError('Входной объект должен иметь свойство length типа number');
    }

    if (str.length === 0) return '';

    let result = [];

    if (keepFirst === undefined) {
        const charCount = str.split('').reduce((acc, char) => {
            acc[char] = (acc[char] || 0) + 1;
            return acc;
        }, {});

        result = str.split('').filter(char => charCount[char] === 1);
    }
    else if (keepFirst) {
        const seen = new Set();
        const chars = Array.from(str);
        result = chars.filter(char => {
            if (!seen.has(char)) {
                seen.add(char);
                return true;
            }
            return false;
        });
    } else {
        const lastIndex = {};
        str.split('').forEach((char, index) => {
            lastIndex[char] = index;
        });

        result = str.split('').filter((char, index) => lastIndex[char] === index);
    }

    return result.join('');
}