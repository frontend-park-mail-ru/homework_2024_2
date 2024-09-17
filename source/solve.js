'use strict';

/**
 * Преобразует инфиксное выражение в постфиксное (обратная польская запись).
 * @param {string} expression - математическое выражение в инфиксной записи.
 * @returns {string} Постфиксное выражение.
 */
const infixToPostfix = (expression) => {
  const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };
  const output = [];
  const operators = [];
  let numberBuffer = '';

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    if (/\d/.test(char) || (char === '-' && (i === 0 || ['+', '-', '*', '/', '('].includes(expression[i - 1])))) {
      numberBuffer += char;
    } else {
      if (numberBuffer) {
        output.push(numberBuffer);
        numberBuffer = '';
      }

      if (char === '(') {
        operators.push(char);
      } else if (char === ')') {
        while (operators.length && operators[operators.length - 1] !== '(') {
          output.push(operators.pop());
        }
        operators.pop();
      } else if (char in precedence) {
        while (operators.length && precedence[operators[operators.length - 1]] >= precedence[char]) {
          output.push(operators.pop());
        }
        operators.push(char);
      }
    }
  }

  if (numberBuffer) {
    output.push(numberBuffer);
  }

  while (operators.length) {
    output.push(operators.pop());
  }

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
const replaceDoubleMinus = (expression) => {
  let result = expression.replace(/^--/, '');
  result = result.replaceAll('--', '+');
  result = result.replaceAll('- -', '+');
  return result;
};


/**
 * Выполняет вычисление постфиксного выражения.
 * @param {string} expression - постфиксное выражение.
 * @returns {number} Результат вычисления.
 */
const evaluatePostfix = (expression) => {
  const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };
  const stack = [];

  expression.split(' ').forEach(char => {
    const num = parseFloat(char);
    if (!isNaN(num)) {
      stack.push(num);
    } else if (char in precedence) {
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
const solve = (expression, x) => {
  const replacedExpression1 = expression.replaceAll('x', x);
  const replacedExpression2 = replaceDoubleMinus(replacedExpression1)
  const postfixExpression = infixToPostfix(replacedExpression2);
  return evaluatePostfix(postfixExpression);
};
 