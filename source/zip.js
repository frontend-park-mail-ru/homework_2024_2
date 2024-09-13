'use strict';

/*
 * возвращает объект, содержащий все поля введенных объектов 
 * 
 * @param {Object[]} objects - массив объектов, которые надо "сжать"
 * @returns {Object} - Объект, содержащий все поля введенных
 * @example
 * 
 * zip({name: "nick"}, {age: 19});
 * // =>
 *{
 *	name: "nick"
 *	age: 19
 *}
 */
const zip = (...args) => {
	let result = {};
	args.forEach((item) => {
		Object.assign(result, {...item, ...result})
	});
	return result;
}
