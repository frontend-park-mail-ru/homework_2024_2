'use strict';

function solve(formula, x) {
    if (typeof x !== 'number') {
        return null;
    }

    try {
        const validation = /^(?!.*\*\*)([0-9x()*\s-+]+)$/
        const result = validation.test(formula) ? eval(formula) : null
        return result    
    } catch (error) {
        return null;
    }
}