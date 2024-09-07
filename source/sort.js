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
 * @throws {Error} Если `arr` не является массивом или `props` не является массивом строк, 
 *                  будет выброшена ошибка. Также выбрасывается ошибка, если какое-либо
 *                  свойство отсутствует в объектах.
 *
 */





'use strict';

function sorting(arr, props) {
    // Проверка параметра arr
    if (!Array.isArray(arr)) {
        throw new Error("Первый параметр должен быть массивом объектов.");
    }

    // Если массив пустой — сразу возвращаем его, сортировать нечего
    if (arr.length === 0) {
        return arr;
    }

    // Проверка параметра props
    if (!Array.isArray(props)) {
        throw new Error("Второй параметр должен быть массивом строк (свойств для сортировки).");
    }

    // Если props пуст — возвращаем исходный массив, так как нечем сортировать
    if (props.length === 0) {
        return arr;
    }

    // Функция слияния двух отсортированных массивов
    function merge(left, right, props) {
        let result = [];
        let i = 0;
        let j = 0;

        // Пока есть элементы в обоих массивах
        while (i < left.length && j < right.length) {
            // Сравниваем объекты по списку свойств
            let comparison = compareObjects(left[i], right[j], props);

            if (comparison <= 0) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }

        // Добавляем оставшиеся элементы из левого массива
        while (i < left.length) {
            result.push(left[i]);
            i++;
        }

        // Добавляем оставшиеся элементы из правого массива
        while (j < right.length) {
            result.push(right[j]);
            j++;
        }

        return result;
    }

    // Рекурсивная функция сортировки слиянием
    function mergeSort(arr, props) {
        if (arr.length <= 1) {
            return arr;
        }

        const mid = Math.floor(arr.length / 2);
        const left = mergeSort(arr.slice(0, mid), props);
        const right = mergeSort(arr.slice(mid), props);

        return merge(left, right, props);
    }

    // Функция сравнения объектов по нескольким свойствам
    function compareObjects(a, b, props) {
        for (let prop of props) {
            const aValue = a[prop];
            const bValue = b[prop];

            // Обрабатываем случай, когда свойство отсутствует
            if (aValue === undefined || bValue === undefined) {
                throw new Error(`Свойство '${prop}' отсутствует у одного из объектов.`);
            }

            if (aValue > bValue) {
                return 1;
            } else if (aValue < bValue) {
                return -1;
            }
            // Если значения равны, продолжаем проверку по следующему свойству
        }
        return 0;
    }

    // Запуск сортировки
    return mergeSort(arr, props);
}