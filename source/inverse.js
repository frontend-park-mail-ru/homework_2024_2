'use strict';

/**
 *
 * Функция inverse меняет порядок элементов в массиве на противоположный
 * @param {Array} numbers - массив чисел
 * @param {Integer} partition - количество нетронутых элементов
 * @returns {Array} - перевернутый массив
 */
const inverse = (numbers, partition) => {
    if (!Array.isArray(numbers)) {
        throw new TypeError("numbers должен быть массивом");
    }
    if (!Number.isInteger(partition)) {
        return [...numbers].reverse();
    }
    if (partition < 0) {
        const reversePartition = numbers.length + partition;
        return [...numbers.slice(0, reversePartition).reverse(), ...numbers.slice(reversePartition)];
    }
    return [...numbers.slice(0, partition), ...numbers.slice(partition).reverse()];
}
