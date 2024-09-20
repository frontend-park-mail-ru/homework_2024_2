'use strict';

// Глобальные константы для приоритета операторов и допустимых символов
const PRECEDENCE = { '+': 1, '-': 1, '*': 2, '/': 2 };
const MATHS = ['+', '-', '*', '/', '('];
const OPERATORS = ['+', '-', '*', '/'];

/**
 * Преобразует инфиксное выражение в постфиксное (обратная польская запись).
 * @param {string} expression - математическое выражение в инфиксной записи.
 * @returns {string} Постфиксное выражение.
 */
const infixToPostfix = (expression) => {
  const output = [];
  const operators = [];
  let numberBuffer = null;

  expression.split('').reduce((_, char, i) => {
    if (/\d/.test(char)) {
      if (numberBuffer < 0){
        numberBuffer *= 10;
        numberBuffer -= parseInt(char);
      } else {
        numberBuffer *= 10;
        numberBuffer += parseInt(char);
      } 
      return;
    }

    if (char === '-' && (i === 0 || MATHS.includes(expression[i - 1]))) {
      numberBuffer = -0;
    }

    if (numberBuffer != null) {
      output.push(numberBuffer);
      numberBuffer = null;
    }

    switch (char) {
      case '(':
        operators.push(char);
        break;
      case ')':
        while (operators.length && operators.at(-1) !== '(') {
          output.push(operators.pop());
        }
        operators.pop();
        break;
      default:
        if (char in PRECEDENCE) {
          while (operators.length && PRECEDENCE[operators.at(-1)] >= PRECEDENCE[char]) {
            output.push(operators.pop());
          }
          operators.push(char);
        }
        break;
    }
  }, []);

  if (numberBuffer != null) {
    output.push(numberBuffer);
  }

  output.push(...operators.reverse());

  return output.join(' ');
};

/**
 * Заменяет определенные последовательности минусов в строке.
 * - Удаляет два минуса в начале строки.
 * - Заменяет все случаи двух подряд идущих минусов ("--") на плюс ("+").
 * - Заменяет все случаи минуса, пробела и еще одного минуса ("- -") на плюс ("+").
 * 
 * @param {string} expression - Входная строка, содержащая математическое выражение с минусами и пробелами.
 * @returns {string} - Обработанная строка, где применены указанные замены.
 */
const replaceDoubleMinus = (expression) =>
  expression.replace(/^--/, '').replaceAll(/--/g, '+').replaceAll(/-\s-/g, '+');

/**
 * Выполняет вычисление постфиксного выражения.
 * @param {string} expression - постфиксное выражение.
 * @returns {number} Результат вычисления.
 */
const evaluatePostfix = (expression) => {
  const stack = [];

  expression.split(' ').forEach(char => {
    const num = parseFloat(char);
    if (!isNaN(num)) {
      stack.push(num);
      return;
    }
    if (OPERATORS.includes(char)) {
      const b = stack.pop();
      const a = stack.pop();
      switch (char) {
        case '+': stack.push(a + b); break;
        case '-': stack.push(a - b); break;
        case '*': stack.push(a * b); break;
        case '/': stack.push(a / b); break;
      }
    }
  });

  return stack[0];
};

/**
 * Решает математическое выражение, подставляя значение переменной x.
 * @param {string} expression - математическое выражение с переменной x.
 * @param {number} x - значение переменной x.
 * @returns {number} Результат вычисления.
 */
const solve = (expression, x) =>
  evaluatePostfix(
    infixToPostfix(
      replaceDoubleMinus(expression.replaceAll('x', x))));

