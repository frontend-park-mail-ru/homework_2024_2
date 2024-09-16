/**
 * Удаляет из строки символы, которые встречаются в ней больше одного раза.
 * Если `keepFirst` равно `true`, оставляет только первое вхождение повторяющихся символов.
 * Если `keepFirst` равно `false`, оставляет только последнее вхождение повторяющихся символов.
 * Если `keepFirst` не передан, удаляет все повторяющиеся символы.
 *
 * @param {*} str - Исходное значение. Ожидается строка или объект String.
 * @param {boolean} [keepFirst] - Флаг, определяющий, сохранять ли первое вхождение (`true`) или последнее (`false`). Если не указан, удаляются все повторяющиеся символы.
 * @returns {string} - Обработанная строка без повторяющихся символов в соответствии с указанным флагом.
 * @throws {TypeError} - Если `str` не является строкой или объектом String.
 */
function letters(str, keepFirst) {
    if (typeof str !== 'string' && !(str instanceof String)) {
        throw new TypeError(`Ожидалась строка или объект String, но получен тип ${typeof str}.`);
    }

    if (!str?.length) {
        return '';
    }

    const chars = str.split('');

    if (keepFirst === undefined) {
        const charCount = chars.reduce((acc, char) => {
            acc[char] = (acc[char] || 0) + 1;
            return acc;
        }, {});

        return chars.filter(char => charCount[char] === 1).join('');
    }

    if (keepFirst) {
        const seen = new Set();
        return chars.filter(char => {
            if (!seen.has(char)) {
                seen.add(char);
                return true;
            }
            return false;
        }).join('');
    }

    const lastIndex = chars.reduce((acc, char, index) => {
        acc[char] = index;
        return acc;
    }, {});

    return chars.filter((char, index) => lastIndex[char] === index).join('');
}
