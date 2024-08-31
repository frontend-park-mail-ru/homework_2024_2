'use strict';

// Arrow funcions are more readable for me, comparing with function expressions
let minmax = (numberString) => {
  // Dont want to convert types to be more reliable
  // Dont like to raise error. In my opinion, there must be an error_handler, that will
  // render some special response, but it would be an overengineering for this task, so just raise message.
  if (typeof numberString !== 'string') {
    throw new Error(`Incorrect input parameter type, expected: string, got: ${typeof numberString}`);
  }

  const numbers = [];
  numberString.split(" ").forEach(value => {
    const current_num = parseFloat(value);
    if (current_num != 0 && !Number(current_num)) {
      return;
    }

    numbers.push(current_num);
  });

  if (!numbers.length) {
    return [undefined, undefined];
  }

  return [Math.min(...numbers), Math.max(...numbers)];
};
