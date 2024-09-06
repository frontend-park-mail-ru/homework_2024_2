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

	QUnit.test('Шахматная доска 6 на 6', function (assert) {
		const expected =
			'* * \n' +
			' * *\n' +
			'* * \n' +
			' * *\n';
		assert.strictEqual(chess(6), expected);
		assert.strictEqual(chess('6'), expected);
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

	QUnit.test('Шахматная доска 0 на 0', function (assert) {
		const expected =
			null;
		assert.strictEqual(chess(0), expected);
		assert.strictEqual(chess('0'), expected);
	});

	QUnit.test('Шахматная доска -10 на -10', function (assert) {
		const expected =
			null;
		assert.strictEqual(chess(-10), expected);
		assert.strictEqual(chess('-10'), expected);
	});

});
