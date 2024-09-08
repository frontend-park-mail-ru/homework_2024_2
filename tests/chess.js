'use strict';

QUnit.module('Тестируем функцию chess', function () {
	QUnit.test('Шахматной доски 1 на 1 не бывает', function (assert) {
		const expectedError = 'Size must be a positive integer more than 1.';
		assert.throws(() => chess(1), new TypeError(expectedError));
		assert.throws(() => chess('1'), new TypeError(expectedError));	
	});

	QUnit.test('Шахматная доска 2 на 2', function (assert) {
		const expected =
			'* \n' +
			' *\n';
		assert.strictEqual(chess(2), expected);
		assert.strictEqual(chess('2'), expected);
	});

	QUnit.test('Шахматная доска 3 на 3', function (assert) {
		const expected =
			'* *\n' +
			' * \n' +
			'* *\n';
		assert.strictEqual(chess(3), expected);
		assert.strictEqual(chess('3'), expected);
	});

	QUnit.test('Шахматная доска 8 на 8', function (assert) {
		const expected =
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n';
		assert.strictEqual(chess(8), expected);
		assert.strictEqual(chess('8'), expected);
	});

	QUnit.test('Некорректные числовые значения', function (assert) {
		assert.throws(
			() => chess(-5),
			new TypeError('Size must be a positive integer more than 1.'),
			'Отрицательное число должно выбросить ошибку'
		);
		assert.throws(
			() => chess(0),
			new TypeError('Size must be a positive integer more than 1.'),
			'Ноль должен выбросить ошибку'
		);
		assert.throws(
			() => chess(2.5),
			new TypeError('Size must be an integer.'),
			'Число с плавающей точкой должно выбросить ошибку'
		);
		assert.throws(
			() => chess('qwerty'),
			new TypeError('Size must be a number.'),
			'Строка должна выбросить ошибку'
		);
		assert.throws(
			() => chess(''),
			new TypeError('Size must be a positive integer more than 1.'),
			'Пустая строка должна выбросить ошибку'
		);
		assert.throws(
			() => chess(NaN),
			new TypeError('Size must be a number.'),
			'Nan должен выбросить ошибку'
		);
		assert.throws(
			() => chess(Infinity),
			new TypeError('Size must be an integer.'),
			'Infinity должен выбросить ошибку'
		);
		assert.throws(
			() => chess(-Infinity),
			new TypeError('Size must be an integer.'),
			'-Infinity должен выбросить ошибку'
		);
	});

	QUnit.test('Число, введенное с пробелами', function (assert) {
		const expected = '* \n' + ' *\n'; // Шахматная доска 2x2
		assert.strictEqual(chess('  2  '), expected, 'Строка с пробелами должна работать корректно');
	});
});
