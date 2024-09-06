'use strict';

QUnit.module('Тестируем функцию inverse', function () {
	QUnit.test('Функция работает с пустым массивом', function (assert) {
		assert.deepEqual(inverse([]), []);
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

	QUnit.test('Функция работает с массивом длиной 2 при skip = 1', function (assert) {
		assert.deepEqual(inverse([1, 2], 1), [1, 2]);
	});

	QUnit.test('Функция работает с массивом длиной 2 при skip = -1', function (assert) {
		assert.deepEqual(inverse([1, 2], -1), [1, 2]);
	});

	QUnit.test('Функция работает с массивом длиной 3 при skip = 1', function (assert) {
		assert.deepEqual(inverse([1, 2, 3], 1), [1, 3, 2]);
	});

	QUnit.test('Функция работает с массивом длиной 3 при skip = -1', function (assert) {
		assert.deepEqual(inverse([1, 2, 3], -1), [2, 1, 3]);
	});

	QUnit.test('Функция работает с массивом длиной 4 при skip = 2', function (assert) {
		assert.deepEqual(inverse([1, 2, 3, 4], 2), [1, 2, 4, 3]);
	});

	QUnit.test('Функция работает с массивом длиной 4 при skip = -2', function (assert) {
		assert.deepEqual(inverse([1, 2, 3, 4], -2), [2, 1, 3, 4]);
	});

	QUnit.test('Вызов с некорректным первым аргументом', function(assert) {
		assert.throws(
			function() {
				inverse('not an array', 2);
			},
			function(err) {
				return err instanceof TypeError && err.message === 'Первый аргумент должен быть массивом';
			},
			'Ошибка должна быть TypeError с правильным сообщением'
		);
	});

	QUnit.test('Вызов с некорректным вторым аргументом', function(assert) {
		// Проверка на нечисловой тип
		assert.throws(
			function() {
				inverse([1, 2, 3], 'not a number');
			},
			function(err) {
				return err instanceof TypeError && err.message === 'Второй аргумент должен быть целым числом';
			},
			'Ошибка должна быть TypeError с правильным сообщением'
		);

		// Проверка на нецелое число
		assert.throws(
			function() {
				inverse([1, 2, 3], 1.5);
			},
			function(err) {
				return err instanceof TypeError && err.message === 'Второй аргумент должен быть целым числом';
			},
			'Ошибка должна быть TypeError с правильным сообщением'
		);
	});
});

