'use strict';

// Arrow funcions are more readable for me, comparing with function expressions
let minmaxHashmap = (numberString) => {
  // Dont want to convert types to be more reliable
  // Dont like to raise error. In my opinion, there must be an error_handler, that will
  // render some special response, but it would be an overengineering for this task, so just raise message.
  if (typeof numberString !== 'string') {
    throw new Error(`Incorrect input parameter type, expected: string, got: ${typeof numberString}`);
  }

  const extremeValues = new Map();
  extremeValues.set('min', undefined);
  extremeValues.set('max', undefined);

  numberString.split(" ").forEach(value => {
    const current_num = parseFloat(value);
    if (current_num != 0 && !Number(current_num)) {
      return;
    }

    setMapValues(extremeValues, current_num);
  });

  return [extremeValues.get('min'), extremeValues.get('max')];
};

let setMapValues = (hashmap, number) => {
  let current_min = hashmap.get('min');
  let current_max = hashmap.get('max');

  if (!current_min || current_min > number) {
    hashmap.set('min', number);
  }

  if (!current_max || current_max < number) {
    hashmap.set('max', number);
  }
}
