/**
 *
 * Функция inverse меняет порядок элементов в массиве на противоположный
 * @param {Array} numbers - массив чисел
 * @param {Integer} partition - количество нетронутых элементов
 * @returns {Array} - переыернутый массив
 */

'use strict';

const inverse = (numbers, partition) => {
    if (!Array.isArray(numbers)) return;
    if (!Number.isInteger(partition)) {
        return [...numbers].reverse();
    }
    if (Number.isInteger(partition) && partition < 0) {
        partition = numbers.length + partition;
        return [...[...numbers.slice(0, partition)].reverse(), ...numbers.slice(partition)];
    }
    return [...numbers.slice(0, partition), ...[...numbers.slice(partition)].reverse()];
}
