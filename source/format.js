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
const format = (input, columns) => {
	if (columns < 1) {
		throw new Error(`Amount of columns could't be ${columns}`)
	}
	if (columns > input.length) {
		throw new Error(`Amount of columns could't be bigger than amount of numbers (${columns}>${input.length})`)
	}
	//проверяем правильность типов, если будет объект Number его тип все равно будет object и не подойдет
	let wrong_type = ""
	input.forEach((element) => {typeof(element)!=="number" ? wrong_type=typeof(element):0})
	if (wrong_type!==""){
		throw new TypeError(`${wrong_type} is in input data, all elements must be numbers`)
	}
	//находим необходимую ширину каждой колонки
	const maxOfColumns = Array(columns).fill(0);
	input.forEach((element, iter) => {
		((elementLength, columnNomber)=>{
			maxOfColumns[columnNomber] = elementLength>maxOfColumns[columnNomber]?elementLength:maxOfColumns[columnNomber]
		})(String(element).length, iter%columns)
	})
	//формируем двумерный массив колонок
	const columsArr = []
	input.forEach((element, iter) => {
		((element, columnNomber)=>{
			if (columnNomber>=columsArr.length){
				columsArr.push([element])
			} else {
				columsArr[columnNomber].push(element)
			}
		})(element, iter%columns)
	})
	// добавляем ведущие пробелы каждому элементу в колонке
	columsArr.forEach((someColumn, iterColumn) => {
		columsArr[iterColumn].forEach((element, iter)=> {columsArr[iterColumn][iter]=String(element).padStart(maxOfColumns[iterColumn])
		} )})
	// добавляем к элементам первой колонки все остальные элементы
	columsArr[0].forEach((_, iter1)=>{
		columsArr.slice(1,columsArr.length).forEach((element, iter2) => {
			columsArr[0][iter1]+=(element[iter1]!==undefined ?" "+element[iter1] : "")
		})})
	//склеиваем первую колонку в которой теперь есть все готовые строки в итоговый ответ
	return columsArr[0].join("\n")
}