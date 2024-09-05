'use strict';

function solve(formula, x) {
    try {
        const validation = /^(?!.*\*\*)([0-9x()*\s-+]+)$/
        const result = validation.test(formula) ? eval(formula) : null
        return result    
    } catch (error) {
        return null;
    }
}