'use strict';

QUnit.module('Тестируем функцию inverse', function () {
	QUnit.test('Функция работает с пустым массивом', (assert) => {
		assert.deepEqual(inverse([]), []);
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

	QUnit.test('Функция работает с различными типами данных и объектами', (assert) => {
		assert.deepEqual(
			inverse([ 1, 'a', null, 1234567890123456789012345678901234567890n, undefined, new Map, [1, 2], {'a': 1}, NaN]),
			[NaN, {'a': 1}, [1, 2], new Map, undefined, 1234567890123456789012345678901234567890n, null, 'a', 1]
		);
		assert.deepEqual(
			inverse([1, null, undefined, 'a', 323n, new Map, [1, 2], NaN, {'a': 1}], 5),
			[1, null, undefined, 'a', 323n, {'a': 1}, NaN, [1, 2], new Map]
		);
		assert.deepEqual(
			inverse([1, null, undefined, 'a', 323n, new Map, [1, 2], NaN, {'a': 1}], -5),
			['a', undefined, null, 1, 323n, new Map, [1, 2], NaN, {'a': 1}]
		);
	});

	QUnit.test('Функция обрабатывает случай, если на вход подано что-то не то', (assert) => {
		assert.throws(() => inverse(new String('abcdf')), TypeError ,'Передана строка вместо массива');
		assert.throws(() => inverse([1, 2, 3], 2.71828), TypeError, 'Передано десятичное число');
		assert.throws(() => inverse([1, 2, 3], null), TypeError, 'Передано null вместо');
	});
});
