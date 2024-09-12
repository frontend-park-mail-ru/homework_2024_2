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
		assert.throws(() => solve('x * (x + x) - (bb * (x + x))', 6), TypeError);
		assert.throws(() => solve('x * (x + x) - (x * (x / y))', 6), TypeError);
		assert.throws(() => solve(7, 'jhxhe'), TypeError);
		assert.throws(() => solve(), Error);
	});
});
