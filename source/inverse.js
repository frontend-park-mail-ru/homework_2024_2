'use strict';

/**
 * Returns inverted array.
 * If shift is provide and it is positive inverting only part of array that bigger than shift
 * else if shift is negative inverting first elements until shift. 
 * @param {Array} array - array of any elements.
 * @param {number} shift - positive or negative shift (by default 0).
 * @throws {TypeError} if array isn't Array or shift isn't integer
 * @example inverse([1, 2, 3, 4, 5], 2); // returns [1, 2, 5, 4, 3]
 * @returns {Array} inverted array.
 */
const inverse = (array, shift = 0) => {
    // incorrect arguments. Should be array and shift is integer
    if (!Array.isArray(array) || !Number.isInteger(shift)) {
        throw new TypeError('Incorrect types of argument!');
    }
    return shift >= 0
             // The shift is positive or zero so the second part of aray should be inverted 
           ? [...array.slice(0, shift), ...array.slice(shift).reverse()] 
             // Other case. Inverting first part of array
           : [...array.slice(0, shift).reverse(), ...array.slice(shift)];
};
