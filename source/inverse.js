'use strict';

const inverse = (numbers, val) => {
    if (val === undefined) {
        return numbers.reverse();
    }
    else {
        if ( val < 0) {
            val = numbers.length + val;
            return [...numbers.slice(0,val).reverse(), ...numbers.slice(val)];
        }
        return [...numbers.slice(0,val), ...numbers.slice(val).reverse()];
    }
}
console.log(inverse([1, 2, 3, 4, 5], -1))