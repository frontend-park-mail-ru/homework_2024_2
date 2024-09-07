'use strict';

const formulaErrorMessage = /The expression must consist only of addition, subtraction, and multiplication operations, using only integers and parentheses/
const variableErrorMessage = /x must be a number or a Number object/
const defaultErrorMessage = /Error in expression/
const infinityVariableErrorMessage = /x is too large/
const infinityResultErrorMessage = /Result is too large/

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
	QUnit.test('тест валидации выражения', function (assert) {
		assert.throws(() => solve('alert("hello world")', 1), formulaErrorMessage);
		assert.throws(() => solve('“; drop table users', 5), formulaErrorMessage);
		assert.throws(() => solve('x / 1', 1), formulaErrorMessage);
		assert.throws(() => solve('x**2', 3), formulaErrorMessage);
		assert.throws(() => solve('()', 1), defaultErrorMessage);
		assert.throws(() => solve('x)', 1), defaultErrorMessage);
		assert.throws(() => solve('(x+1', 1), defaultErrorMessage);
		assert.throws(() => solve('*', 1), defaultErrorMessage);
	});
	QUnit.test('тест валидации параметра x', function (assert) {
		assert.throws(() => solve('4 + x', 'abd'), variableErrorMessage);
		assert.throws(() => solve('4', 'abd'), variableErrorMessage);
	});
	QUnit.test('поддержка передачи объектов', function (assert) {
		assert.strictEqual(solve(new String('x * x').toString(), 3), 9);
		assert.strictEqual(solve(new String('x * x'), 3), 9);
		assert.strictEqual(solve('x', new Number(4).valueOf()), 4);
		assert.strictEqual(solve('x', new Number(4)), 4);
	});
	QUnit.test('выход за диапазон чисел', function (assert) {
		assert.throws(() => solve('x', 2 * 10 ** 308), infinityVariableErrorMessage);
		assert.throws(() => solve('x * x', 2 * 10 ** 307), infinityResultErrorMessage);
		assert.strictEqual(solve('x', Number.MIN_VALUE * 10 ** (-10)), 0);
	});
});
