'use strict';

/**
 * Решает математическую формулу, содержащее переменную x
 * Поддерживает операции сложения, вычитания и умножения с целыми числами и скобками
 *
 * @param {string|String} formula - Математическая формула в виде строки
 * @param {number|Number} x - Значение переменной, которое будет подставлено в формулу
 * @returns {number} - Результат вычисления формулы
 * @throws {TypeError} - Если x имеет недопустимое значение 
 * @throws {RangeError} - Если x равно Infinity или -Infinity
 * @throws {SyntaxError} - Если формула содержит недопустимые символы
 * @throws {RangeError} - Если результат вычисления равен Infinity или -Infinity
 */
const solve = (formula, x) => {
    const formulaErrorMessage = 'The expression must consist only of addition, subtraction, and multiplication operations, using only integers and parentheses'
    const variableErrorMessage = 'x must be a number or a Number object'
    const infinityVariableErrorMessage = 'x is too large'
    const infinityResultErrorMessage = 'Result is too large' 

    if (formula instanceof String) {
        formula = formula.toString()
    }

    if (x instanceof Number) {
        x = x.valueOf()
    }

    if (typeof x !== 'number') {
        throw new TypeError(variableErrorMessage);
    }

    if (!Number.isFinite(x)) {
        throw new RangeError(infinityVariableErrorMessage)
    }

    try {
        const validation = /^(?!.*\*\*)([0-9x()*\s-+]+)$/

        if (!validation.test(formula)) {
            throw new SyntaxError(formulaErrorMessage);
        }

        const result = eval(formula)
        if (!Number.isFinite(result)) {
            throw new RangeError(infinityResultErrorMessage);
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
