'use strict';

/**
 * @param {Map<String, Number>} hashmap - Мапа, которая хранит текущее наименьшее и наибольшее число, либо undefined
 * @param {Number} number - Число, которое необходимо проверить на минимальность и максимальность
 */
const setMapValues = (hashmap, number) => {
  const current_min = hashmap.get('min');
  const current_max = hashmap.get('max');

  if (!current_min || current_min > number) {
    hashmap.set('min', number);
  }

  if (!current_max || current_max < number) {
    hashmap.set('max', number);
  }
}

// Arrow funcions are more readable for me, comparing with function expressions
/**
 * @param {string} numberString - Входная строка для обработки.
 * @returns {Array} - Массив из 2-х чисел, где первое является наименьшим в строке, а второе наибольшим, либо 2-х undefined.
 */
const minmax = (numberString) => {
  // Dont want to convert types to be more reliable
  // Dont like to raise error. In my opinion, there must be an error_handler, that will
  // render some special response, but it would be an overengineering for this task, so just raise message.
  if (typeof numberString !== 'string' && !(numberString instanceof String)) {
    throw new TypeError(`Incorrect input parameter type, expected: string, got: ${typeof numberString}`);
  }

  if (numberString instanceof String) {
    numberString = numberString.valueOf();
  }

  const extremeValues = new Map([
    ['min', undefined],
    ['max', undefined],
  ]);

  numberString.split(" ").forEach(value => {
    const current_num = parseFloat(value);
    if (!Number(current_num) && current_num !== 0) {
      return;
    }

    setMapValues(extremeValues, current_num);
  });

  return [extremeValues.get('min'), extremeValues.get('max')];
};
