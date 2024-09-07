'use strict';

let format = (input, columns) => {
	if (columns < 1) {
		return `Amount of coloms could't be ${columns}`
	}
	if (columns > input.length) {
		return `Amount of coloms could't be bigger than amount of numbers (${columns}>${input.length})`
	}
	let output = Array(Math.ceil(input.length / columns)).fill("");
	for (let j = 0; j < columns; j++) {
		let lst = []
		let maxLen = 0
		for (let i = j; i < input.length; i += columns) {
			if (typeof (input[i]) != "number") {
				return `${typeof (input[i])} is in input data, all elements must be numbers`
			}
			lst.push(input[i])
			if (String(input[i]).length > maxLen) {
				maxLen = String(input[i]).length
			}
		}
		lst.forEach((element, iter) => {
			output[iter] += (output[iter] == "" ? "" : " ")
				+ " ".repeat(maxLen - String(element).length) + element
		});
	}
	return output.join("\n")
}

