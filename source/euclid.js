"use strict";

function euclid(...numbers) {
  // Проверка на отсутствие символа в массиве  
  if (!numbers.every(Number.isInteger)) {
    return 'Error';
  }

  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    let a = result;
    let b = numbers[i];
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    result = a;
  }
  return result;
}