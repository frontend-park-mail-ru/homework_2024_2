'use strict';


/**
 * Напишите функцию format, которая форматирует переданные целые числа в несколько колонок. Числа в получившейся таблице должны идти слева направо, сверху вниз.
 * 
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
const format1 = (input, columns) => {
	if (columns < 1) {
		throw new Error(`Amount of columns could't be ${columns}`)
	}
	if (columns > input.length) {
		throw new Error(`Amount of columns could't be bigger than amount of numbers (${columns}>${input.length})`)
	}
	let output = Array(Math.ceil(input.length / columns)).fill("");
	for (let j = 0; j < columns; j++) {
		let tmpList = []
		let maxLen = 0
		for (let i = j; i < input.length; i += columns) {
			if (typeof (input[i]) !== "number") {
				throw new TypeError(`${typeof (input[i])} is in input data, all elements must be numbers`)
			}
			tmpList.push(input[i])
			if (String(input[i]).length > maxLen) {
				maxLen = String(input[i]).length
			}
		}
		tmpList.forEach((element, iter) => {
			output[iter] += (output[iter] == "" ? "" : " ")
				+ String(element).padStart(maxLen)
		});
	}

	return output.join("\n")
}

const format = (input, columns) => {
	if (columns < 1) {
		throw new Error(`Amount of columns could't be ${columns}`)
	}
	if (columns > input.length) {
		throw new Error(`Amount of columns could't be bigger than amount of numbers (${columns}>${input.length})`)
	}
	let maxOfColumns = Array(columns).fill(0);
	let columsArr = []
	const some = (element, iter) => {
		if (typeof (element) !== "number") {
			throw new TypeError(`${typeof (element)} is in input data, all elements must be numbers`)
		}
		if (String(element).length > maxOfColumns[iter%columns]){
			maxOfColumns[iter%columns] = String(element).length
		}
		if (iter%columns>=columsArr.length){
			columsArr.push([element])
		} else {
			columsArr[iter%columns].push(element)
		}
	}
	input.forEach((element, iter) => {try{some(element, iter)}catch(e){throw e}})
	console.log(maxOfColumns)
	columsArr.forEach((someColumn, iterColumn) => {columsArr[iterColumn].forEach((element, iter)=> {columsArr[iterColumn][iter]=String(element).padStart(maxOfColumns[iterColumn])} )})
	for (let j = 0; j < columsArr[0].length; j++){
		for (let i = 1; i < columsArr.length; i++){
			columsArr[0][j]+=(columsArr[i][j]!==undefined ?" "+columsArr[i][j] : "")
		}
	}
	return columsArr[0].join("\n")
}

