function inverse(arr, skip = 0) {
    if (!Array.isArray(arr)) {
        throw new Error("Первый аргумент должен быть массивом");
    }

    if (typeof skip !== 'number') {
        throw new Error("Второй аргумент должен быть числом");
    }

    const len = arr.length;

    if (len === 0 || skip >= len || -skip >= len) {
        return arr.slice(); // Возвращаем копию массива
    }

    const startIndex = Math.max(0, skip);
    const endIndex = skip >= 0 ? len : len + skip;

    return [
        ...arr.slice(0, startIndex),
        ...arr.slice(startIndex, endIndex).reverse(),
        ...arr.slice(endIndex)
    ];
}