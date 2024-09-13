'use strict';

/**
  * Generates a tree-like string
  * @function
  * @param {number | string | String | Number} height - The high of tree.
  * @throws {TypeError} The parameter type is invalid.
  * @throws {Error} Parameter is not a number.
  * @throws {RangeError} The height must be greater than 3.
  * @returns {string} The tree.
  */

function tree(height) {
  if (!((typeof height === 'number') || (typeof height === 'string'))
    || (height instanceof String) || (height instanceof Number)) {
    throw new TypeError('The parameter type is invalid!');
  }

  if (isNaN(height)) {
    throw new Error('Parameter is not a number!');
  }

  if (height < 3) {
    throw new RangeError('The height must be greater than 3');
  }

  let result = '';
  let crown = '*';
  let i = 0;

  while (i < height - 1) {
    result += generateCrown(i, height);
    crown += '**'

    i++;
  }

  const empty = ' '.repeat((2 * (height - 2)) / 2);
  result += `${empty}|${empty}\n`;

  return result;
}

/**
* Generates a line in the tree crown
* @function
* @param {number | string} layer - The height of tree.
* @param {number | string} height - The сurrent crown level.
* @returns {string} The line in the tree crown.
*/

function generateCrown(layer, height) {
  const empty = " ".repeat((2 * (height - 2) - layer * 2) / 2);
  return `${empty}${"*".repeat(2 * layer + 1)}${empty}\n`
}
