'use strict';

QUnit.module('Тестируем функцию solve', function () {
	QUnit.test('solve работает правильно ', function (assert) {
		assert.strictEqual(solve('4 + 8', 5), 12);
		assert.strictEqual(solve('x', 0), 0);
		assert.strictEqual(solve('x + 1', 1), 2);
		assert.strictEqual(solve('2 + x - 1', 5), 6);
		assert.strictEqual(solve('2 * x - 1', 5), 9);
		assert.strictEqual(solve('2 * ( x - 1 )', 5), 8);
		assert.strictEqual(solve('(5 - x) * (x + 5)', 3), 16);
		assert.strictEqual(solve('((5 - x) * (x + 5)) * x * x', 3), 144);
	});
	QUnit.test('тест валидации', function (assert) {
		assert.strictEqual(solve('alert("hello world")', 1), null);
		assert.strictEqual(solve('“; drop table users', 5), null);
		assert.strictEqual(solve('x / 1', 1), null);
		assert.strictEqual(solve('x**2', 3), null);
		assert.strictEqual(solve('()', 1), null);
		assert.strictEqual(solve('x)', 1), null);
		assert.strictEqual(solve('(x+1', 1), null);
		assert.strictEqual(solve('*', 1), null);
		assert.strictEqual(solve('4 + x', 'abd'), null);
		assert.strictEqual(solve('4', 'abd'), null);
	});
});
