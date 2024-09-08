'use strict';

const minmax = text => {
    const numbers = text
        .split(/ +/)
        .map(Number.parseFloat)
        .filter(entry => !Number.isNaN(entry));
    if (numbers.length === 0) return [undefined, undefined];
    return [Math.min(...numbers), Math.max(...numbers)];
};