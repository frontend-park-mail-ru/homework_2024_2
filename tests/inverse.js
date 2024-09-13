'use strict';

QUnit.module('Тестируем функцию inverse', () => {
	QUnit.test('Функция работает с пустым массивом', (assert) => {
		assert.deepEqual(inverse([]), []);
	});

	QUnit.test('Функция работает с пустым массивом и с переданным параметром', (assert) => {
		assert.deepEqual(inverse([], 0), []);
		assert.deepEqual(inverse([], 1), []);
		assert.deepEqual(inverse([], 2), []);
		assert.deepEqual(inverse([], -2), []);
	});

	QUnit.test('Функция работает с массивом длины один', (assert) => {
		assert.deepEqual(inverse([ 1 ]), [ 1 ]);
		assert.deepEqual(inverse([ 'a' ]), [ 'a' ]);
		assert.deepEqual(inverse([ null ]), [ null ]);
		assert.deepEqual(inverse([ false ]), [ false ]);
	});

	QUnit.test('Функция работает, если в неё передан только массив', (assert) => {
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ]), [ 5, 4, 3, 2, 1 ]);
		assert.deepEqual(inverse([ 'a', 'b', 'c', 'd', 'e' ]), [ 'e', 'd', 'c', 'b', 'a' ]);
		assert.deepEqual(inverse([ null, false, 0, Infinity, '' ]), [ '', Infinity, 0, false, null ]);
	});

	QUnit.test('Функция не переставляет первые элементы массива', (assert) => {
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 0), [ 5, 4, 3, 2, 1 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 1), [ 1, 5, 4, 3, 2 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 2), [ 1, 2, 5, 4, 3 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 5), [ 1, 2, 3, 4, 5 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 15), [ 1, 2, 3, 4, 5 ]);
	});

	QUnit.test('Функция не переставляет последние элементы массива', (assert) => {
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 0), [ 5, 4, 3, 2, 1 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], -1), [ 4, 3, 2, 1, 5 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], -2), [ 3, 2, 1, 4, 5 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], -5), [ 1, 2, 3, 4, 5 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], -15), [ 1, 2, 3, 4, 5 ]);
	});

	QUnit.test('Функция работает с параметром по модулю больше или равно длины массива', (assert) => {
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 5), [ 1, 2, 3, 4, 5 ]);
		assert.deepEqual(inverse([ 'a', 'b', 'c', 'd', 'e' ], 6), [ 'a', 'b', 'c', 'd', 'e' ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 10), [ 1, 2, 3, 4, 5 ]);
		assert.deepEqual(inverse([ null, false, 0, Infinity, '' ], 15 ), [ null, false, 0, Infinity, '' ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], -5), [ 1, 2, 3, 4, 5 ]);
		assert.deepEqual(inverse([ 'a', 'b', 'c', 'd', 'e' ], -6), [ 'a', 'b', 'c', 'd', 'e' ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], -10), [ 1, 2, 3, 4, 5 ]);
		assert.deepEqual(inverse([ null, false, 0, Infinity, '' ], -15 ), [ null, false, 0, Infinity, '' ]);
	});

	QUnit.test('Функция работает с массивами, содержащими разные типы данных', (assert) => {
		assert.deepEqual(inverse([1, 'two', null]), [null, 'two', 1]);
		assert.deepEqual(inverse([true, false], -1), [true, false]);
		assert.deepEqual(inverse([undefined, NaN, "apple"], 1), [undefined, "apple", NaN]);
  	});

	QUnit.test('Функция корретно работает, не изменяя исходный массив', (assert) => {
		const firstArray = [1, 2, 3, 4, 5];
		inverse(firstArray);
		assert.deepEqual(firstArray, [1, 2, 3, 4, 5]);
		const secondArray = [1, 2, 3, 4, 5];
		inverse(secondArray, 0);
		assert.deepEqual(secondArray, [1, 2, 3, 4, 5]);
		const thirdArray = [1, 2, 3, 4, 5];
		inverse(thirdArray, -1);
		assert.deepEqual(thirdArray, [1, 2, 3, 4, 5]);
		const fourthArray = [1, 2, 3, 4, 5];
		inverse(fourthArray, 2);
		assert.deepEqual(fourthArray, [1, 2, 3, 4, 5]);
   	});

	QUnit.test('Функция выбрасывает ошибку, если в неё передан некорректный параметр (не целое число)', (assert) => {
		assert.throws(
			() => inverse([ 1, 2, 3, 4, 5 ], "apple"),
			TypeError('The second argument must be an integer number.'),
			'Wrong type of argument: string'
		);
		assert.throws(
			() => inverse([ 1, 2, 3, 4, 5 ], 2.5),
			TypeError('The second argument must be an integer number.'),
			'Wrong type of argument: non-integer number'
		);
		assert.throws(
			() => inverse([ 'a', 'b', 'c', 'd', 'e' ], true),
			TypeError('The second argument must be an integer number.'),
			'Wrong type of argument: boolean'
		);
		assert.throws(
			() => inverse([ null, false, 0, Infinity, '' ], null),
			TypeError('The second argument must be an integer number.'),
			'Wrong type of argument: null'
		);
	});
});
