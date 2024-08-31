'use strict'; // Включение строгого режима

const inverse = (arr, skip = 0) => {
    if (!Array.isArray(arr)) {
        throw new Error("Первый аргумент должен быть массивом");
    }

    if (!Number.isInteger(skip)) {
        throw new Error("Второй аргумент должен быть целым числом");
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

