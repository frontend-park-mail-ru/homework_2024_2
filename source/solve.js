'use strict';

/**
 * Принимает строку, парсит ее и возвращает массив, состоящий из строк представляющих число,
 * скобок и знаков
 * @param {string} str - Строка, которую необходимо парсить
 * @returns {string[]} - Результат парсинга строки (массив знаков, скобок и чисел)
 * @throws {TypeError} - В строке присутствуют недопустимые символы 
 */
const parseStr = (str) => {
    let sign = 1;
    let curNum = null;
    const ops = ['+', '*', '(', ')'];

    const res = str.split('').reduce((acc, char, index) => {
        switch (true) {
            case ops.includes(char):
                if (curNum !== null) {
                    acc.push(String(sign * curNum));
                    sign = 1;
                }
                curNum = null;
                acc.push(char);
                break;
            case char === '-': 
                if (index < str.length && str[index + 1] === ' ') {
                    if (curNum !== null) {
                        acc.push(String(sign * curNum));
                        sign = 1;
                    }
                    curNum = null;
                    acc.push(char);
                } else {
                    sign *= -1;
                }
                break;
            case char !== ' ':
                if (!isNaN(parseInt(char))) {
                    curNum = curNum === null ? Number(char) : curNum * 10 + Number(char);  
                } else {
                    throw new TypeError('Тип должен быть числовым!');
                }
                break;
        }
        return acc;
    }, []);
    

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

    const result = masStr.reduce((acc, val) => {
        switch (true) {
            case val in priorities:
                while (priorities[val] <= priorities[acc.stack.at(-1)]) {
                    acc.answer.push(acc.stack.pop());
                }
                acc.stack.push(val);
                break;
            case val === '(':
                acc.stack.push(val);
                break;
            case val === ')':
                while (acc.stack.length > 0 && acc.stack.at(-1) !== '(') {
                    acc.answer.push(acc.stack.pop());
                }
                if (!acc.stack.length) {
                    throw new Error('Неправильно расставлены скобки !!!');
                }
                acc.stack.pop();
                break;
            case val !== ' ':
                acc.answer.push(val);
                break;
        }
        return acc;
    }, { stack: [], answer: [] });

    const brackets = ['(', ')'];
    return result.stack.reduce((acc, elem) => {
        if (brackets.includes(elem)) {
            throw new Error('Неправильно расставлены скобки !!!');
        }
        acc.push(elem);
        return acc;
    }, result.answer);
}

/**
 * Принимает на вход массив представляющий выражение в обратной польской записи и решает это выражение
 * @param {string[]} str - Массив представляющий выражение, которое нужно решить
 * @returns {number} - Результат вычисления выражения
 */
const solvePolish = (str) => {
    const res = str.reduce((acc, elem) => {
        switch(elem) {
            case '+':
                acc.push(acc.pop() + acc.pop());
                break;
            case '-':
                const oper1 = acc.pop();
                const oper2 = acc.pop();
                acc.push(oper2 - oper1);
                break;
            case '*':
                acc.push(acc.pop() * acc.pop());
                break;
            default:
                acc.push(Number(elem));
                break;
        }
        return acc;
    }, []);
    
    return res.at(-1);
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
    if (!str || !val) {
        throw new Error('Аргументы str и val не должны быть пустыми');
    } 

    if (typeof str !== 'string' && !(str instanceof String)) {
        throw new TypeError(`Ошибка! Для аргумента str нужен тип string, получен ${typeof str}`);
    }

    if (typeof val !== 'number') {
        throw new TypeError(`Ошибка! Для аргумента val нужен тип number, получен ${typeof val}`);
    } 
    
    return solvePolish(toPolish(str.replaceAll('x', val)));
}

