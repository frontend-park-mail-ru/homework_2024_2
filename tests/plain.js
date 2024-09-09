'use strict';

QUnit.module('Тестируем функцию plain', function () {
	QUnit.test('Работает с единственным элементом', function (assert) {
		assert.deepEqual(plain([]), [], 'Работает с пустым массивом');
		assert.deepEqual(plain([ 42 ]), [ 42 ], 'Работает с массивом из одного элемента');
		assert.deepEqual(plain([ 1, 2, 3, 4 ]), [ 1, 2, 3, 4 ], 'Сохраняет порядок элементов');
	});

	QUnit.test('Работает с единственным массивом', function (assert) {
		assert.deepEqual(plain([ [] ]), []);
		assert.deepEqual(plain([ [ 42 ] ]), [ 42 ]);
		assert.deepEqual(plain([ [ 1, 2, 3, 4 ] ]), [ 1, 2, 3, 4 ]);
	});

	QUnit.test('Работает со смешанными значениями', function (assert) {
		assert.deepEqual(plain([ [], 42 ]), [ 42 ]);
		assert.deepEqual(plain([ [ 42 ], 0 ]), [ 42, 0 ]);
		assert.deepEqual(plain([ [ 1, 2, 3, 4 ], 5, 6, 7, 8 ]), [ 1, 2, 3, 4, 5, 6, 7, 8 ]);
	});

	QUnit.test('Работает с несколькими массивами', function (assert) {
		assert.deepEqual(plain([ [], [] ]), [], 'Работает с пустыми массивами');
		assert.deepEqual(plain([ [ 42 ], [ 42 ] ]), [ 42, 42 ]);
		assert.deepEqual(plain([ [ 42, 42 ], [ 42 ] ]), [ 42, 42, 42 ]);
		assert.deepEqual(plain([ [ 1 ], [ 2 ], [ 3 ], [ 4, 5, 6 ] ]), [ 1, 2, 3, 4, 5, 6 ]);
	});

	QUnit.test('Работает с вложенными массивами', function (assert) {
		assert.deepEqual(plain([ [], [ [], [], [] ] ]), [], 'Работает с пустыми массивами');
		assert.deepEqual(plain([ [ 42 ], [ [ 42 ], [], [ 42 ] ], [ 42 ] ]), [ 42, 42, 42, 42 ]);
		assert.deepEqual(plain([ [ 42, 42 ], [ 42, [ 42, [ 42, 42 ], 42 ] ] ]), [ 42, 42, 42, 42, 42, 42, 42 ]);
		assert.deepEqual(plain([ [ 1 ], [ 2 ], [ 3 ], [ 4, 5, [ 6, 7, 8, [ 9 ] ], 10 ], 11 ]), [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]);
	});

	QUnit.test('Работает с элементами разных типов', function (assert) {
		assert.deepEqual(plain([ [ 'abcde' ], [ [ 'f' ], [ null, false ], [ NaN, NaN ], NaN ], -Infinity ]), [ 'abcde', 'f', null, false, NaN, NaN, NaN, -Infinity ]);
	});

	QUnit.test('Работает с глубокими вложенными массивами', function (assert) {
		assert.deepEqual(plain([ [ [ [ [ 1 ] ] ] ] ]), [ 1 ]);
		assert.deepEqual(plain([ [ [ [ [ [ 1, 2, [ [ 3 ] ] ] ] ] ] ] ]), [ 1, 2, 3 ]);
		assert.deepEqual(plain([ [ [ [ [ 1 ], [ 2 ], [ [ 3, [ 4, [ 5 ] ] ] ] ] ] ] ]), [ 1, 2, 3, 4, 5 ]);
	});

	QUnit.test('Работает с пустыми и единичными элементами в разных комбинациях', function (assert) {
		assert.deepEqual(plain([ [], [ [], [ [] ] ], [ [] ] ]), []);
		assert.deepEqual(plain([ [ [ 1 ] ], [] ]), [ 1 ]);
		assert.deepEqual(plain([ [], [ [ 2, [ 3 ] ] ], [ [] ] ]), [ 2, 3 ]);
		assert.deepEqual(plain([ [ [ 1 ], [ 2 ] ], [ [ 3 ] ], [ [ [ 4 ] ] ] ]), [ 1, 2, 3, 4 ]);
	});
	QUnit.test('Работает с некорректным вводом', function (assert) {
		assert.throws(
			() => plain(null),
			TypeError,
			'Выбрасывает ошибку TypeError при передаче null'
		);
		assert.throws(
			() => plain(undefined),
			TypeError,
			'Выбрасывает ошибку TypeError при передаче undefined'
		);
		assert.throws(
			() => plain(42),
			TypeError,
			'Выбрасывает ошибку TypeError при передаче числа'
		);
		assert.throws(
			() => plain('string'),
			TypeError,
			'Выбрасывает ошибку TypeError при передаче строки'
		);
		assert.throws(
			() => plain({}),
			TypeError,
			'Выбрасывает ошибку TypeError при передаче объекта'
		);
	});
});
