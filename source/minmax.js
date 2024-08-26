'use strict';

function minmax(numbers = '') {
    if (numbers.length === 0){
        return [undefined, undefined];
    }

    const mas = [];

    numbers.split(" ").forEach(value => {
        const num = parseFloat(value);

        if (!Number.isNaN(num)) {
            mas.push(num);
        }
    });

    if (mas.length === 0) {
        return [undefined, undefined];
    }

    return [Math.min(...mas), Math.max(...mas)];
}