'use strict';

const solve = (formula, x) => {
    const formulaErrorMessage = 'The expression must consist only of addition, subtraction, and multiplication operations, using only integers and parentheses'
    const variableErrorMessage = 'x must be a number or a Number object'
    const infinityVariableErrorMessage = 'x is too large'
    const infinityResultErrorMessage = 'Result is too large' 

    if (formula instanceof String) {
        formula = formula.toString()
    }

    if (typeof x === 'object' && x instanceof Number) {
        x = x.valueOf()
    }

    if (typeof x !== 'number') {
        throw new Error(variableErrorMessage);
    }

    if (x === Infinity || x === -Infinity) {
        throw new Error(infinityVariableErrorMessage)
    }

    try {
        const validation = /^(?!.*\*\*)([0-9x()*\s-+]+)$/

        if (!validation.test(formula)) {
            throw new Error(formulaErrorMessage);
        }

        const result = eval(formula)

        if (result === Infinity || result === -Infinity) {
            throw new Error(infinityResultErrorMessage);
        }

        return result    
    } catch (error) {
        const allowedMessages = [
            formulaErrorMessage,
            variableErrorMessage,
            infinityVariableErrorMessage,
            infinityResultErrorMessage
        ]
    
        const message = allowedMessages.includes(error.message) 
            ? error.message 
            : 'Error in expression'

        throw new Error(message);
    }
}