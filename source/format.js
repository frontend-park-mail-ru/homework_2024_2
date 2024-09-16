'use strict';


/**
 * Напишите функцию format, которая форматирует переданные целые числа в несколько колонок. Числа в получившейся таблице должны идти слева направо, сверху вниз.
 * 
 * Formats array of numbers to string with columns where every column have constant width.
 *
 * 
 * @param {number[]} input - The an array with numbers to be formatted.
 * @param {number} columns - Amount of columns we need in final string.
 * @throws {TypeError} If there is something but numbers in input.
 * @throws {Error} If amount of columns is less than length of input.
 * @returns {string} String which represents output table.
 * @example
 * const formattedString = format([1, 2, 10, 100, 1000, 10000], 6)
 */
const format = (input, columns) => {
	if (!Array.isArray(input)){
		throw new TypeError(`${typeof input} is not array`)
	}
	if (columns < 1) {
		throw new Error(`Amount of columns could't be ${columns}`)
	}
	if (columns > input.length) {
		throw new Error(`Amount of columns could't be bigger than amount of numbers (${columns}>${input.length})`)
	}

	//проверяем правильность типов, если будет объект Number его тип все равно будет object и не подойдет
	if (!input.every(value => Number.isInteger(value))) {  
		throw new TypeError('All elements must be integers');  
	}

	//находим необходимую ширину каждой колонки
	const maxWidths = input.reduce((accumulator, number, index) => {  
		const columnIndex = index % columns;  
		accumulator[columnIndex] = Math.max(accumulator[columnIndex], String(number).length);  
	
		return accumulator;  
	}, new Array(columns).fill(0));

	// формируем массив строк нужной длинны
	const rows = input.reduce((accumulator, number, index) => {  
		const columnIndex = index % columns;
		const rowIndex = Math.floor(index / columns);
		
		if (!accumulator[rowIndex]) {  
			accumulator[rowIndex] = [];  
		}  

		accumulator[rowIndex].push(String(number).padStart(maxWidths[columnIndex]));  
	
		return accumulator;
	}, []).map(row => row.join(' '));

	// склеиваем строки в итоговый результат
	return rows.join('\n')
}
