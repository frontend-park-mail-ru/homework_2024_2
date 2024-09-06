'use strict'; // Включение строгого режима

/**
 * Инвертирует часть массива, начиная с заданного индекса.
 *
 * @param {Array} arr Массив для инвертирования.
 * @param {number} [skip=0] Индекс, с которого начинается инвертирование.
 *                           Положительное значение сдвигает вправо, отрицательное - влево.
 * @returns {Array} Новый массив с инвертированной частью.
 *
 * @throws {Error} Выдает ошибку, если первый аргумент не массив.
 * @throws {Error} Выдает ошибку, если второй аргумент не целое число.
 */
const inverse = (arr, skip = 0) => {
    if (!Array.isArray(arr)) {
        throw new TypeError('Первый аргумент должен быть массивом');
    }

    if (!Number.isInteger(skip)) {
        throw new TypeError('Второй аргумент должен быть целым числом');
    }

    const arrayLength = arr.length;

    if (arrayLength === 0 || Math.abs(skip) >= arrayLength) {
        return arr.slice(); // Возвращаем копию массива
    }

    const startIndex = Math.max(0, skip);
    const endIndex = skip >= 0 ? arrayLength : arrayLength + skip;

    return [
        ...arr.slice(0, startIndex),
        ...arr.slice(startIndex, endIndex).reverse(),
        ...arr.slice(endIndex)
    ];
};

