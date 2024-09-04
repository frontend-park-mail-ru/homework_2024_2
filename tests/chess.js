'use strict';

QUnit.module('Тестируем функцию chess', function () {
	QUnit.test('Шахматной доски 1 на 1 не бывает', function (assert) {
		assert.strictEqual(chess(1), null);
		assert.strictEqual(chess('1'), null);
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

	QUnit.test('Шахматная доска 9 на 9', function (assert) {
		const expected =
			'* * * * *\n' +
			' * * * * \n' +
			'* * * * *\n' +
			' * * * * \n' +
			'* * * * *\n' +
			' * * * * \n' +
			'* * * * *\n' +
			' * * * * \n' +
			'* * * * *\n';
		assert.strictEqual(chess(9), expected);
		assert.strictEqual(chess('9'), expected);
	});

	QUnit.test('Шахматной доски отрицательного размера не бывает', function (assert) {
		assert.strictEqual(chess(-1), null);
		assert.strictEqual(chess(-99), null);
		assert.strictEqual(chess('-51'), null);
	});

	QUnit.test('Неверное введенный размер доски', function (assert) {
		assert.strictEqual(chess('test'), null);
		assert.strictEqual(chess('t75jf3f'), null);
		assert.strictEqual(chess({password: "1234"}), null);
	});

});
