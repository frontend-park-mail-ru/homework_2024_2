'use strict';
/**
 * Функция сравнения объектов по нескольким свойствам.
 * @param {Object} a - Первый объект.
 * @param {Object} b - Второй объект.
 * @param {string[]} props - Свойства для сравнения.
 * @returns {number} Результат сравнения: -1, 0 или 1.
 * @throws {TypeError} Если какое-либо свойство отсутствует в объектах.
 */
function compareObjects(a, b, props) {
       return props.reduce((result, prop) => {
        if (result) {
                return result; // Если результат уже не равен 0, возвращаем его
        }

        const aValue = a[prop];
        const bValue = b[prop];

        if (aValue === undefined || bValue === undefined) {
                throw new TypeError (`Свойство '${prop}' отсутствует у одного из объектов.`);
        }

        return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
    }, 0);
}


 /**
 * Функция слияния двух отсортированных массивов.
 * @param {Object[]} left - Левый отсортированный массив.
 * @param {Object[]} right - Правый отсортированный массив.
 * @param {string[]} props - Свойства для сортировки.
 * @returns {Object[]} Слитый массив.
 */
 function merge(left, right, props) {
    const result = [];
    while (left.length && right.length) {
        const comparison = compareObjects(left[0], right[0], props);

        result.push(comparison <= 0 ? left.shift() : right.shift());
    }

    return result.concat(left, right); // Используем concat для добавления оставшихся элементов
}


/**
 * Рекурсивная функция сортировки слиянием.
 * @param {Object[]} arr - Массив объектов.
 * @param {string[]} props - Свойства для сортировки.
 * @returns {Object[]} Отсортированный массив.
 */
 function mergeSort(arr, props) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid), props);
    const right = mergeSort(arr.slice(mid), props);

    return merge(left, right, props);
}



/**
 * Сортирует массив объектов по заданным свойствам в порядке возрастания.
 * Сортировка выполняется с учётом лексикографического порядка для строк и
 * числового порядка для чисел. Поддерживает несколько уровней сортировки.
 *
 * @param {Object[]} arr - Массив объектов, который нужно отсортировать.
 * @param {string[]} props - Массив строк, представляющих имена свойств для сортировки. 
 *                           Сначала сортировка происходит по первому свойству, 
 *                           затем по второму и так далее.
 * @returns {Object[]} Отсортированный массив объектов.
 * @throws {TypeError} Если `arr` не является массивом или `props` не является массивом строк, 
 *                  будет выброшена ошибка. Также выбрасывается ошибка, если какое-либо
 *                  свойство отсутствует в объектах.
 *
 */
function sorting(arr, props) {
    // Проверка параметров
    if (!Array.isArray(arr) || !arr.length) {
        return arr;
    }

    if (!Array.isArray(props) || !props.length || !props.every(prop => typeof prop === 'string')) {
        throw new TypeError("Второй параметр должен быть массивом строк.");
    }

    // Запуск сортировки
    return mergeSort(arr, props);
}
