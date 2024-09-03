'use strict';

QUnit.module('Тестируем функцию minmax', function () {
	QUnit.test('minmax работает правильно на строках без чисел', function (assert) {
		assert.deepEqual(minmax(''), [ undefined, undefined ], 'Особый случай, когда в строке нет чисел');
		assert.deepEqual(minmax('мама мыла раму'), [ undefined, undefined ]);
		assert.deepEqual(minmax('undefined NaN false'), [ undefined, undefined ], 'Поймать случай передачи undefined, NaN и false в строке');
		assert.deepEqual(minmax(',.`1§23 {}'), [ undefined, undefined ], 'Поймать случай передачи строки, которая содержит число и знаки препинания');
	});

	QUnit.test('minmax правильно парсит отдельные числа', function (assert) {
		assert.deepEqual(minmax('0'), [ 0, 0 ]);
		assert.deepEqual(minmax('1'), [ 1, 1 ]);
		assert.deepEqual(minmax('Infinity'), [ Infinity, Infinity ]);
		assert.deepEqual(minmax('-Infinity'), [ -Infinity, -Infinity ]);
		assert.deepEqual(minmax('42'), [ 42, 42 ]);
		assert.deepEqual(minmax('.0'), [ .0, .0 ]);
		assert.deepEqual(minmax('1.1'), [ 1.1, 1.1 ]);
		assert.deepEqual(minmax('.01'), [ .01, .01 ]);
		assert.deepEqual(minmax('1.01'), [ 1.01, 1.01 ]);
		assert.deepEqual(minmax('1e5'), [ 1e5, 1e5 ]);
		assert.deepEqual(minmax('-1e-5'), [ -1e-5, -1e-5 ]);
		assert.deepEqual(minmax('-.1e-5'), [ -.1e-5, -.1e-5 ]);
	});

	QUnit.test('minmax правильно парсит несколько чисел', function (assert) {
		assert.deepEqual(minmax('0 0 0 0'), [ 0, 0 ]);
		assert.deepEqual(minmax('1 1 1 1'), [ 1, 1 ]);
		assert.deepEqual(minmax('1 2 3 4'), [ 1, 4 ]);
		assert.deepEqual(minmax(new String('1 2 3 4')), [ 1, 4 ]);
		assert.deepEqual(minmax('-Infinity -1 0 1 Infinity'), [ -Infinity, Infinity ]);
		assert.deepEqual(minmax('-.01 0 .01'), [ -.01, .01 ]);
    assert.deepEqual(minmax('-1 -2 -3 -4'), [ -4, -1 ], 'Все числа отрицательные');
		assert.deepEqual(minmax('-4 -4 -4 -4'), [ -4, -4 ], 'Все числа отрицательные и повторяющиеся');
		assert.deepEqual(minmax('-4 4 0      100 '), [ -4, 100 ], 'Комбинация цисел различных знаков с разной длинной пробелов');
	});

	QUnit.test('minmax игнорирует обычный текст', function (assert) {
		assert.deepEqual(minmax('1, -5.8 или 10, хотя 34 + -5.3 и 73'), [ -5.8, 73 ]);
	});

  QUnit.test('minmax выдает сообщение об ошибке типов', function (assert) {
    assert.throws(
      () => minmax(true),
      new Error('Incorrect input parameter type, expected: string, got: boolean'),
      'Передан некорректный тип данных'
    );
	});
});
