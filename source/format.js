'use strict';


/**
 * Formats array of numbers to string with columns where every column have constant width.
 *
 * @param {object } input - The an array with numbers to be formated.
 * @param {number} columns - Amount of colums we need in final string.
 * @throws {TypeError} If there is something but numbers in input.
 * @throws {Error} If amount of columns is less than lenght of input.
 * @returns {number} The sum of the two numbers.
 * @example
 * const formatedString = format([1, 2, 10, 100, 1000, 10000], 6)
 */
let format = (input, columns) => {
	if (columns < 1) {
		throw new Error(`Amount of columns could't be ${columns}`)
	}
	if (columns > input.length) {
		throw new Error(`Amount of columns could't be bigger than amount of numbers (${columns}>${input.length})`)
	}
	let output = Array(Math.ceil(input.length / columns)).fill("");
	for (let j = 0; j < columns; j++) {
		let tmp_list = []
		let maxLen = 0
		for (let i = j; i < input.length; i += columns) {
			if (typeof (input[i]) !== "number") {
				throw new TypeError(`${typeof (input[i])} is in input data, all elements must be numbers`)
			}
			tmp_list.push(input[i])
			if (String(input[i]).length > maxLen) {
				maxLen = String(input[i]).length
			}
		}
		tmp_list.forEach((element, iter) => {
			output[iter] += (output[iter] == "" ? "" : " ")
				+ String(element).padStart(maxLen)
		});
	}
	return output.join("\n")
}

