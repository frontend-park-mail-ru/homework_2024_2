'use strict';

/**
 * Принимает строку, парсит ее и возвращает массив, состоящий из строк представляющих число,
 * скобок и знаков
 * @param {string} str - Строка, которую необходимо парсить
 * @returns {string[]} - Результат парсинга строки (массив знаков, скобок и чисел)
 * @throws {TypeError} - В строке присутствуют недопустимые символы 
 */
const parseStr = (str) => {
    const res = []; 
    let sign = 1;
    let curNum = null;
    
    for (let i = 0; i < str.length; i++) {
        if (['+', '*', '(', ')'].includes(str[i])) {
            if (curNum !== null) {
                res.push(String(sign * curNum));
                sign = 1;
            }
            curNum = null;
            res.push(str[i]);
        } else if (str[i] === '-') {
            if (i + 1 < str.length && str[i + 1] === ' ') {
                if (curNum !== null) {
                    res.push(String(sign * curNum));
                    sign = 1;
                }
                curNum = null;
                res.push(str[i]);
            } else {
                sign *= -1;
            }
        } else if (str[i] !== ' ') {
            if (!isNaN(parseInt(str[i]))) {
                curNum = curNum === null ? Number(str[i]) : curNum * 10 + Number(str[i]);  
            } else {
                throw new TypeError("Тип должен быть числовым!");
            }
        }
    }

    if (curNum !== null) {
        res.push(String(sign * curNum));
    }

    return res;
}
/**
 * Принимает массив строк, полученный в результате функции parseStr, представляющий выражение 
 * и переводит это выражение в обратную польскую запись
 * @param {string[]} str - Массив представляющий выражение, которое нужно перевести в обратную польскую запись 
 * @returns {string[]} - Массив представляющий выражение переведенное в обратную польскую запись
 * @throws {Error} - Если в выражении неправильно расставлены скобки
 */
const toPolish = (str) => {
    const masStr = parseStr(str); 
    const priorities = {
        '+': 1,
        '-': 1, 
        '*': 2,
    }
    const myStack = [];
    const answer = [];

    for (let val of masStr) {
        if (val in priorities) {
            while (priorities[val] <= priorities[myStack.at(-1)]) {
                answer.push(myStack.pop());
            }
            myStack.push(val);
        } else if (val === '(') {
            myStack.push(val);
        } else if (val === ')') {
            while (myStack.length > 0 && myStack.at(-1) !== '(') {
                answer.push(myStack.pop());
            }
            if (myStack.length == 0) {
                throw new Error("Неправильно расставлены скобки !!!");
            }
            myStack.pop();
        } else if (val !== ' ') {
            answer.push(val);
        }
    }

    while (myStack.length) {
        const elem = myStack.pop();
        if (['(', ')'].includes(elem)) {
            throw new Error("Неправильно расставлены скобки !!!");
        }
        answer.push(elem);
    }

    return answer;
}
/**
 * Принимает на вход массив представляющий выражение в обратной польской записи и решает это выражение
 * @param {string[]} str - Массив представляющий выражение, которое нужно решить
 * @returns {number} - Результат вычисления выражения
 */
const solvePolish = (str) => {
    const myStack = [];

    for (let elem of str) {
        switch(elem) {
            case '+':
                myStack.push(myStack.pop() + myStack.pop());
                break;
            case '-':
                const oper1 = myStack.pop();
                const oper2 = myStack.pop();
                myStack.push(oper2 - oper1);
                break;
            case '*':
                myStack.push(myStack.pop() * myStack.pop());
                break;
            default:
                myStack.push(Number(elem));
                break;
        }
    }
    
    return myStack.at(-1);

}

/**
 * Принимает строку представляющую выражение, которое нужно решить, и число, которое нужно подставить вместо x
 * Находит результат выражения
 * Замечание: в функции унарный минус нужно писать следующим образом: -5
 * а бинарный следующим: 6 - 5 (c пробелом)
 * Это происходит из-за того, что унарный минус кладется в строку, т.к он обозначает отрицательный знак числа
 * а не помещается в стек как бинарный минус
 * Такое выражение корректно: 5 - -6
 * Такое некорректно: 5 - - 6
 * @param {string} str - Строка представляющая выражение  
 * @param {number} val - Число которое нужно подставить вместо x 
 * @returns {number} - Результат вычисления выражения
 * @throws {Error} - Если в функцию передали не все параметры
 * @throws {TypeError} - Если в функцию передали параметры других типов
 */
const solve = (str, val) => {
    if (str === undefined || val === undefined) {
        throw new Error("str and val arguments must not be empty");
    } 

    if (typeof str !== "string") {
        throw new TypeError(`Ошибка! Для аргумента str нужен тип string, получен ${typeof str}`);
    }

    if (typeof val !== "number") {
        throw new TypeError(`Ошибка! Для аргумента val нужен тип number, получен ${typeof val}`);
    } 
    
    return solvePolish(toPolish(str.replaceAll('x', val)));
}
