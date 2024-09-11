'use strict';

/**
 *  Валидирует входные данные
 * 
 * @param {object[]} arr массив plain-объектов
 * @param {string[]} props массив свойств, по которым необходимо отсортировать массив
 * @throws {TypeError} Выдаст ошибку, если один из аргументов не передан
 * @throws {TypeError} Выдаст ошибку, если arr это не массив
 * @throws {TypeError} Выдаст ошибку, если props это не массив
 * @throws {TypeError} Выдаст ошибку, если хотя бы один элемент arr не является объектом
 * @throws {Error} Выдаст ошибку, если хотя бы один объект не содержит свойство, по которому arr сортируется
 */
const validations = (arr, props) => {
	if (!arr || !props) {
		throw new TypeError('Either arr or props is undefined');
	}

	if (!Array.isArray(arr)) {
		throw new TypeError('arr should be array');
	}

	if (!Array.isArray(props)) {
		throw new TypeError('props should be array');
	}

	arr.forEach((elem) => {
		if (typeof elem !== 'object' || elem === null) {
			throw new TypeError(
				`arr should contain objects only, not ${typeof elem}`
			);
		}

		props.forEach((prop) => {
		if (elem[prop] === undefined) {
			throw new Error(
				`At least one plain object in arr doesn't contain orderby prop ${prop}`
			);
		}
		});
	});
}

/**
 * Сравнивает два объекта по переданным свойствам
 * 
 * @param {any} a первый элемент 
 * @param {any} b второй элемент
 * @param {string[]} props 
 * @returns {number} результат сравнения двух элементов
 */
const compareObjects = (a, b, props) => {
	for (let prop of props) {
		if (a[prop] > b[prop]) {
			return 1;
		} else if (a[prop] < b[prop]) {
			return -1;
		}
	}
	return 0;
}

/**
 * Реализует сортировку plain-объектов методом пузырька
 * 
 * @param {object[]} arr массив plain-объектов
 * @param {string[]} props массив свойств, по которым необходимо отсортировать массив
 * @returns {object[]} отсортированный массив
 */
const bubbleSort = (arr, props) => {
	if (arr.length <= 1) {
		return arr;
	}

	const sortedArr = [ ...arr ];

	sortedArr.forEach((_, i) => {
		let swapped = false;

		sortedArr.forEach((_, j) => {
			if ((j < sortedArr.length - 1 - i) && (compareObjects(sortedArr[j], sortedArr[j + 1], props) > 0)) {
				[sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
				swapped = true;
			}
		})

		if (!swapped) {
			return sortedArr;
		}
	});

	return sortedArr;
}


/**
 * Принимает на вход массив plain-объектов и массив свойств, по которым необходимо отсортировать массив объектов.
 * Реализует устойчивую сортировку этого массива в порядке возрастания.
 * 
 * @param {object[]} arr массив plain-объектов
 * @param {string[]} props массив свойств, по которым необходимо отсортировать массив
 * @returns {object[]} отсортированный массив
 */
const sorting = (arr, props) => {
	validations(arr, props);

	return bubbleSort(arr, props);
}
