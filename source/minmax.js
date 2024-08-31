'use strict';

const minmax = function (numbers = '') {
    if (!(typeof numbers === 'string') || !numbers){
        return [undefined, undefined];
    }

    const numbersArray = [];

    numbers.split(" ").forEach(value => {
        const num = parseFloat(value);

        if (!Number.isNaN(num)) {
            numbersArray.push(num);
        }
    });

    if (numbersArray.length === 0) {
        return [undefined, undefined];
    }

    return [Math.min(...numbersArray), Math.max(...numbersArray)];
}