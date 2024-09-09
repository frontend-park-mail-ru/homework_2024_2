'use strict';

QUnit.module('Тестируем функцию inverse', function () {
	QUnit.test('Функция работает с пустым массивом', function (assert) {
		assert.deepEqual(inverse([]), []);
	});

	QUnit.test('Функция работает с пустым массивом и с переданным параметром', function (assert) {
		assert.deepEqual(inverse([], 0), []);
		assert.deepEqual(inverse([], 1), []);
		assert.deepEqual(inverse([], 2), []);
	});

	QUnit.test('Функция работает с массивом длины один', function (assert) {
		assert.deepEqual(inverse([ 1 ]), [ 1 ]);
		assert.deepEqual(inverse([ 'a' ]), [ 'a' ]);
		assert.deepEqual(inverse([ null ]), [ null ]);
		assert.deepEqual(inverse([ false ]), [ false ]);
	});

	QUnit.test('Функция работает, если в неё передан только массив', function (assert) {
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ]), [ 5, 4, 3, 2, 1 ]);
		assert.deepEqual(inverse([ 'a', 'b', 'c', 'd', 'e' ]), [ 'e', 'd', 'c', 'b', 'a' ]);
		assert.deepEqual(inverse([ null, false, 0, Infinity, '' ]), [ '', Infinity, 0, false, null ]);
	});

	QUnit.test('Функция не переставляет первые элементы массива', function (assert) {
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 0), [ 5, 4, 3, 2, 1 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 1), [ 1, 5, 4, 3, 2 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 2), [ 1, 2, 5, 4, 3 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 5), [ 1, 2, 3, 4, 5 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 15), [ 1, 2, 3, 4, 5 ]);
	});

	QUnit.test('Функция не переставляет последние элементы массива', function (assert) {
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 0), [ 5, 4, 3, 2, 1 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], -1), [ 4, 3, 2, 1, 5 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], -2), [ 3, 2, 1, 4, 5 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], -5), [ 1, 2, 3, 4, 5 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], -15), [ 1, 2, 3, 4, 5 ]);
	});

	QUnit.test('Функция работает с параметром по модулю больше или равно длины массива', function (assert) {
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 5), [ 1, 2, 3, 4, 5 ]);
		assert.deepEqual(inverse([ 'a', 'b', 'c', 'd', 'e' ], 6), [ 'a', 'b', 'c', 'd', 'e' ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 10), [ 1, 2, 3, 4, 5 ]);
		assert.deepEqual(inverse([ null, false, 0, Infinity, '' ], 15 ), [ null, false, 0, Infinity, '' ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], -5), [ 1, 2, 3, 4, 5 ]);
		assert.deepEqual(inverse([ 'a', 'b', 'c', 'd', 'e' ], -6), [ 'a', 'b', 'c', 'd', 'e' ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], -10), [ 1, 2, 3, 4, 5 ]);
		assert.deepEqual(inverse([ null, false, 0, Infinity, '' ], -15 ), [ null, false, 0, Infinity, '' ]);
	});

	QUnit.test('Функция работает с массивами, содержащими разные типы данных', function (assert) {
		assert.deepEqual(inverse([1, 'two', null]), [null, 'two', 1]);
		assert.deepEqual(inverse([true, false], -1), [true, false]);
		assert.deepEqual(inverse([undefined, NaN, "apple"], 1), [undefined, "apple", NaN]);
  	});

	QUnit.test('Функция корретно работает, не изменяя исходный массив', function (assert) {
       const original = [1, 2, 3, 4, 5];
       inverse(original);
       assert.deepEqual(original, [1, 2, 3, 4, 5]);
	   inverse(original, 0);
	   assert.deepEqual(original, [1, 2, 3, 4, 5]);
	   inverse(original, -1);
	   assert.deepEqual(original, [1, 2, 3, 4, 5]);
	   inverse(original, 2);
	   assert.deepEqual(original, [1, 2, 3, 4, 5]);
   });

	QUnit.test('Функция не переставляет элементы массива, если в неё передан некорректный параметр (не целое число)', function (assert) {
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], "apple"), [ 1, 2, 3, 4, 5 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 2.5), [ 1, 2, 3, 4, 5 ]);
		assert.deepEqual(inverse([ 'a', 'b', 'c', 'd', 'e' ], true), [ 'a', 'b', 'c', 'd', 'e' ]);
		assert.deepEqual(inverse([ null, false, 0, Infinity, '' ], null), [ null, false, 0, Infinity, '' ]);
	});
});
