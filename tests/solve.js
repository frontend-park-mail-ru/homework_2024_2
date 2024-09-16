'use strict';

QUnit.module('Тестируем функцию solve', function () {
	QUnit.test('solve работает правильно ', function (assert) {
		assert.strictEqual(solve('x + 1', 1), 2);
		assert.strictEqual(solve('2 + x - 1', 5), 6);
		assert.strictEqual(solve('2 * x - 1', 5), 9);
		assert.strictEqual(solve('2 * ( x - 1 )', 5), 8);
		assert.strictEqual(solve('(5 - x) * (x + 5)', 3), 16);
		assert.strictEqual(solve('((5 - x) * (x + 5)) * x * x', 3), 144);
		assert.strictEqual(solve('6 * (3 * (4 + x) - 7)', 3), 84);
		assert.strictEqual(solve('(x - 5) * (x + 5 * 5) - x', 10), 165);
		assert.strictEqual(solve('(x + x + x) * (x * (x * (x + x)))', 2), 96);
		assert.strictEqual(solve('x * (x + x) - (x * (x + x))', 5), 0);
	});

	QUnit.test('Работает правильно при многосимвольных числах', function (assert) {
		assert.strictEqual(solve('(125 + 125) * (230 - 226) + x', 125), 1125);
		assert.strictEqual(solve('(-199999 + 199995) * 100 + 555', 155), 155);
		assert.strictEqual(solve('(5555 - x) * x + (x - 4500)', 5554), 6608);
	});

	QUnit.test('Работает правильно при отрицательных числах', function (assert) {
		assert.strictEqual(solve('-5 * (-5 + -5) - -25 - -10', 85), 85);
		assert.strictEqual(solve('-5 * (6 * -5) + -25 + x', -25), 100);
		assert.strictEqual(solve('-5 - -5 * (-5 + 6 + -5) - 5', -30), -30);
	});

	QUnit.test('Работает правильно при неправильно расставленных скобках ', function (assert) {
		assert.throws(() => solve('(5 + 6))* (7 + 8)', 10), Error);
		assert.throws(() => solve('(5 + 7 * 8', 25), Error);
		assert.throws(() => solve('(5 + 7 ( + )8 * 9(', -30), Error);
	});

	QUnit.test('Работает правильно при неправильных типах параметров ', function (assert) {
		assert.throws(() => solve('x * (x + x) - (bb * (x + x))', 6), TypeError);
		assert.throws(() => solve('x * (x + x) - (x * (x / y))', 6), TypeError);
		assert.throws(() => solve(7, 'jhxhe'), TypeError);
		assert.throws(() => solve('5 + 7 + \t + 3', 5), TypeError);
		assert.throws(() => solve(), Error);
	});
});


