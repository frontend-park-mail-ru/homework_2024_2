'use strict';


/**
 * Напишите функцию format, которая форматирует переданные целые числа в несколько колонок. Числа в получившейся таблице должны идти слева направо, сверху вниз.
 * 
 * Formats array of numbers to string with columns where every column have constant width.
 *
 * 
 * @param {Array} input - The an array with numbers to be formated.
 * @param {number} columns - Amount of colums we need in final string.
 * @throws {TypeError} If there is something but numbers in input.
 * @throws {Error} If amount of columns is less than lenght of input.
 * @returns {number} The sum of the two numbers.
 * @example
 * const formatedString = format([1, 2, 10, 100, 1000, 10000], 6)
 */
const format = (input, columns) => {
	if (columns < 1) {
		throw new Error(`Amount of columns could't be ${columns}`)
	}
	if (columns > input.length) {
		throw new Error(`Amount of columns could't be bigger than amount of numbers (${columns}>${input.length})`)
	}

	//проверяем правильность типов, если будет объект Number его тип все равно будет object и не подойдет
	for (const value of input) {  
        if (!Number.isInteger(value)) {  
            throw new TypeError(`${typeof value} is in input data, all elements must be integers`);  
        }  
    } 

	//находим необходимую ширину каждой колонки
	const maxWidths = new Array(columns).fill(0);  
    input.forEach((number, index) => {  
        const columnIndex = index % columns;  
        maxWidths[columnIndex] = Math.max(maxWidths[columnIndex], String(number).length);  
    });

	// формируем массив строк нужной длинны
	const rows = [];
    for (let i = 0; i < input.length; i += columns) {
        const row = input.slice(i, i + columns); // Извлекаем подмассив
        rows.push(row.map((number, index) => (String(number).padStart(maxWidths[index]))).join(' '));
    }

	// склеиваем строки в итоговый результат
	return rows.join("\n")
}
