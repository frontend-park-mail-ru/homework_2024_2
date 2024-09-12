'use strict';

const infixToPostfix = (expression) => {
  const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };
  const output = [];
  const operators = [];
  let numberBuffer = '';

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    if (/\d/.test(char) || (char === '-' && (i === 0 || /[+\-*/(]/.test(expression[i - 1])))) {
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
      } else if (precedence[char] !== undefined) {
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

const evaluatePostfix = (expression) => {
  const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };
  const stack = [];

  expression.split(' ').forEach(char => {
    if (/^-?\d+(\.\d+)?$/.test(char)) {
      stack.push(parseFloat(char));
    } else if (precedence[char] !== undefined) {
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

const solve = (expression, x) => {
  const replacedExpression = expression.replace(/x/g, x);
  const postfixExpression = infixToPostfix(replacedExpression);
  return evaluatePostfix(postfixExpression);
};
