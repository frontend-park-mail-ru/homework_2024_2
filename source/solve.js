'use strict';

// Глобальные константы для приоритета операторов и допустимых символов
const PRECEDENCE = {'(': 0, ')': 0, '+': 1, '-': 1, '*': 2, '/': 2 };
const OPERATORS = Object.keys(PRECEDENCE);

/** 
 * Преобразует инфиксное выражение в постфиксное (обратная польская запись). 
 * @param {string} expression - математическое выражение в инфиксной записи. 
 * @returns {array[string]} Постфиксное выражение. 
 */ 
const infixToPostfix = (expression) => {
  const output = [];
  const operators = [];
  let numberBuffer = '';
  let lastWasOperator = true;

  expression.split('').forEach(char => {
    if (/\d/.test(char)) {
      numberBuffer += char;
      lastWasOperator = false;
      return;
    }

    if (numberBuffer) {
      if (lastWasOperator && numberBuffer === '-') {
        output.push('-' + numberBuffer);
      } else {
        output.push(numberBuffer);
      }
      numberBuffer = '';
    }

    switch (char) {
      case '(':
        operators.push(char);
        lastWasOperator = true;
        break;
      case ')':
        const openBracketIndex = operators.lastIndexOf('(');
        output.push(...operators.splice(openBracketIndex + 1).reverse());
        operators.pop();
        lastWasOperator = false;
        break;
        default: 
        if (!(char in PRECEDENCE)) { 
          if (!/\s/.test(char)) { 
            console.warn(`Not allowed symbol: ${char}`); 
          } 
          break;
        }

        if (char === '-' && lastWasOperator) {
          numberBuffer = '-';
          break;
        }
        const lastLowerPrecedenceIndex = operators.findLastIndex(op => PRECEDENCE[op] < PRECEDENCE[char]); 
        output.push(...operators.splice(lastLowerPrecedenceIndex + 1));
        operators.push(char);
        lastWasOperator = true;
    }
  });

  if (numberBuffer) {
    output.push(numberBuffer);
  }

  output.push(...operators.reverse());
  return output;
};


/**
 * Заменяет определенные последовательности минусов в строке.
 * - Удаляет два или более минусов в начале строки.
 * - Удаляет двойной минус после открывающейся скобки, если он есть.
 * - Заменяет все случаи четного количества подряд идущих минусов на плюс ("+").
 * 
 * @param {string} expression - Входная строка, содержащая математическое выражение с минусами и пробелами.
 * @returns {string} - Обработанная строка, в которой применены указанные замены.
 */
const replaceDoubleMinus = (expression) =>
  expression.replace(/^(\s*-\s*-)+/, '').replace(/\((\s*-\s*-)+/g, '(').replace(/(\s*-\s*-)+/g, '+');


/** 
* Выполняет вычисление постфиксного выражения. 
* @param {array[string]} expression - постфиксное выражение. 
* @returns {number} Результат вычисления. 
*/ 
const evaluatePostfix = (expression) => { 
  const stack = []; 
  
  expression.forEach(char => { 
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
const solve = (expression, x) => {
  const replacedExpression = expression.replaceAll('x', x);
  const replacedExpression2 = replaceDoubleMinus(replacedExpression)
  const postfixExpression = infixToPostfix(replacedExpression2);
  return evaluatePostfix(postfixExpression);
}
