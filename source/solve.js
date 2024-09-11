'use strict';

const infixToPostfix = (expression) => {
  const precedence = { '+': 1, '-': 1, '*': 2 };
  const output = [];
  const operators = [];

  for (let char of expression) {
    if (/\d/.test(char)) {
      output.push(char);
    }
    else if (char === '(') {
      operators.push(char);
    }
    else if (char === ')') {
      while (operators.length && operators[operators.length - 1] !== '(') {
        output.push(operators.pop());
      }
      operators.pop();
    }
    else if (['+', '-', '*'].includes(char)) {
      while (operators.length && precedence[operators[operators.length - 1]] >= precedence[char]) {
        output.push(operators.pop());
      }
      operators.push(char);
    }
  }

  while (operators.length) {
    output.push(operators.pop());
  }

  return output.join('');
};

const evaluatePostfix = (expression) => {
  const stack = [];

  for (let char of expression) {
    if (/\d/.test(char)) {
      stack.push(parseFloat(char));
    } else if (['+', '-', '*'].includes(char)) {
      const b = stack.pop();
      const a = stack.pop();
      switch (char) {
        case '+': stack.push(a + b); break;
        case '-': stack.push(a - b); break;
        case '*': stack.push(a * b); break;
      }
    }
  }

  return stack[0];
};

const solve = (expression, x) => {

  const replacedExpression = expression.replaceAll('x', x);

  const postfixExpression = infixToPostfix(replacedExpression);

  return evaluatePostfix(postfixExpression);
};
