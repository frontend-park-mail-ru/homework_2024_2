'use strict';

QUnit.module('Тестируем функцию minmaxHashmap', function () {
	QUnit.test('minmaxHashmap работает правильно на строках без чисел', function (assert) {
		assert.deepEqual(minmaxHashmap(''), [ undefined, undefined ], 'Особый случай, когда в строке нет чисел');
		assert.deepEqual(minmaxHashmap('мама мыла раму'), [ undefined, undefined ]);
		assert.deepEqual(minmaxHashmap('undefined NaN false'), [ undefined, undefined ], 'Поймать случай передачи undefined, NaN и false в строке');
		assert.deepEqual(minmaxHashmap(',.`1§23 {}'), [ undefined, undefined ], 'Поймать случай передачи строки, которая содержит число и знаки препинания');
	});

	QUnit.test('minmaxHashmap правильно парсит отдельные числа', function (assert) {
		assert.deepEqual(minmaxHashmap('0'), [ 0, 0 ]);
		assert.deepEqual(minmaxHashmap('1'), [ 1, 1 ]);
		assert.deepEqual(minmaxHashmap('Infinity'), [ Infinity, Infinity ]);
		assert.deepEqual(minmaxHashmap('-Infinity'), [ -Infinity, -Infinity ]);
		assert.deepEqual(minmaxHashmap('42'), [ 42, 42 ]);
		assert.deepEqual(minmaxHashmap('.0'), [ .0, .0 ]);
		assert.deepEqual(minmaxHashmap('1.1'), [ 1.1, 1.1 ]);
		assert.deepEqual(minmaxHashmap('.01'), [ .01, .01 ]);
		assert.deepEqual(minmaxHashmap('1.01'), [ 1.01, 1.01 ]);
		assert.deepEqual(minmaxHashmap('1e5'), [ 1e5, 1e5 ]);
		assert.deepEqual(minmaxHashmap('-1e-5'), [ -1e-5, -1e-5 ]);
		assert.deepEqual(minmaxHashmap('-.1e-5'), [ -.1e-5, -.1e-5 ]);
	});

	QUnit.test('minmaxHashmap правильно парсит несколько чисел', function (assert) {
		assert.deepEqual(minmaxHashmap('0 0 0 0'), [ 0, 0 ]);
		assert.deepEqual(minmaxHashmap('1 1 1 1'), [ 1, 1 ]);
		assert.deepEqual(minmaxHashmap('1 2 3 4'), [ 1, 4 ]);
		assert.deepEqual(minmaxHashmap('-Infinity -1 0 1 Infinity'), [ -Infinity, Infinity ]);
		assert.deepEqual(minmaxHashmap('-.01 0 .01'), [ -.01, .01 ]);
    assert.deepEqual(minmaxHashmap('-1 -2 -3 -4'), [ -4, -1 ], 'Все числа отрицательные');
		assert.deepEqual(minmaxHashmap('-4 -4 -4 -4'), [ -4, -4 ], 'Все числа отрицательные и повторяющиеся');
		assert.deepEqual(minmaxHashmap('-4 4 0      100 '), [ -4, 100 ], 'Комбинация цисел различных знаков с разной длинной пробелов');
	});

	QUnit.test('minmaxHashmap игнорирует обычный текст', function (assert) {
		assert.deepEqual(minmaxHashmap('1, -5.8 или 10, хотя 34 + -5.3 и 73'), [ -5.8, 73 ]);
	});

  QUnit.test('minmaxHashmap выдает сообщение об ошибке типов', function (assert) {
    assert.throws(
      () => minmaxHashmap(true),
      new Error('Incorrect input parameter type, expected: string, got: boolean'),
      'Передан некорректный тип данных'
    );
	});
});
