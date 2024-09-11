'use strict';

function solve(expression, x) {

    const replacedExpression = expression.replace(/x/g, x);

    const result = new Function('return ' + replacedExpression)();
    
    return result;
}