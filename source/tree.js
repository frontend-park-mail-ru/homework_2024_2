'use strict';

/**
 * Draws an ASCII Christmas tree with a height of `n` characters made of asterisks.
 *
 * @param {number|string} treeHeight - The height of the tree. Can be a number or a string that will be converted to a number.
 * @returns {string} A string representing the ASCII Christmas tree.
 *
 * @example
 * // Returns a string:
 * //   *
 * //  ***
 * // *****
 * //*******
 * //   |
 * tree(5);
 *
 * @example
 * // Returns a string:
 * //   *
 * //  ***
 * // *****
 * //*******
 * //   |
 * tree('5');
 */
const tree = (treeHeight) => {
	const MIN_TREE_HEIGHT = 2;
	const starsRowsCount = Math.trunc(Number(treeHeight)) - 1;

	if (
		!treeHeight ||
		!isFinite(treeHeight) ||
		starsRowsCount + 1 <= MIN_TREE_HEIGHT
	) {
		return null;
	}

	let treeString = '';
	for (let i = 0; i != starsRowsCount; ++i) {
		const spaces = ' '.repeat(treeHeight - i - 2);
		const stars = '*'.repeat(2 * i + 1);
		treeString += spaces + stars + spaces + '\n';
	}

	const lastRowSpaces = ' '.repeat(starsRowsCount - 1);
	treeString += `${lastRowSpaces}|${lastRowSpaces}\n`;

	return treeString;
};
