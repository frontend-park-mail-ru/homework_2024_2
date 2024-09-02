"use strict";

const minmax = function (numbers) {
    if (!(typeof numbers === "string")) {
        throw new TypeError('Аргумент должен быть строкой');
    }

    const numbersArray = [];

    numbers.split(" ").forEach(value =>{
        const num = parseFloat(value);

        if (!Number.isNaN(num)) {
            numbersArray.push(num);
        }
    });

    if (numbersArray.length === 0) {
        return [undefined, undefined];
    }

    return [findMin(...numbersArray), findMax(...numbersArray)];
};

const findMax = function (...numbers) {
    if (!numbers) {
        return undefined;
    }

    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
};


const findMin = function (...numbers) {
    if (!numbers) {
        return undefined;
    }

    let min = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }

    return min;
};