'use strict';

QUnit.module('Тестируем функцию format', function () {
	QUnit.test('format работает правильно c одной колонкой и положительными числами', function (assert) {
		const input = [ 0, 1, 2, 10, 100, 1000, 10000 ];

		const expected =
			'    0\n' +
			'    1\n' +
			'    2\n' +
			'   10\n' +
			'  100\n' +
			' 1000\n' +
			'10000';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c одной колонкой и числами разного знака', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const expected =
			'     0\n' +
			'     1\n' +
			'     2\n' +
			'    10\n' +
			'   100\n' +
			'  -100\n' +
			'  1000\n' +
			' 10000\n' +
			'-10000';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c несколькими колонками', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const expected2 =
			'     0     1\n' +
			'     2    10\n' +
			'   100  -100\n' +
			'  1000 10000\n' +
			'-10000';

		const expected3 =
			'   0     1      2\n' +
			'  10   100   -100\n' +
			'1000 10000 -10000';

		assert.strictEqual(format(input, 2), expected2);
		assert.strictEqual(format(input, 3), expected3);
	});
	QUnit.test('format работает правильно c количеством колонок равным количеству чисел', function (assert) {
		const input = [1, 2, 10, 100, 1000, 10000];

		const expected =
			'1 2 10 100 1000 10000';

		assert.strictEqual(format(input, 6), expected);
	});

	QUnit.test('format правильно валидирует элементы массива', function (assert) {
		const input = [1, "some", 10, NaN, 1000, 10000];

		const expected_error = new TypeError("string is in input data, all elements must be numbers")

		assert.throws(()=> format(input, 6), expected_error);
	});

	QUnit.test('format правильно валидирует число колонок', function (assert) {
		const input = [1, 2, 10, 3, 1000, 10000];

		const expected_error1 = new Error("Amount of columns could't be -1")
		const expected_error2 = new Error("Amount of columns could't be bigger than amount of numbers (7>6)")

		assert.throws(()=> format(input, -1), expected_error1);
		assert.throws(()=> format(input, 7), expected_error2);
	});
});
