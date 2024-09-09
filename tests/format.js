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

	QUnit.test('format работает правильно c несколькими колонками и нецелыми числами', function (assert) {
		const input = [ 0, 1.5, 2, 10, 100.5, -100, 1000, 10000, -10000.5 ];

		const expected2 =
			'       0   1.5\n' +
			'       2    10\n' +
			'   100.5  -100\n' +
			'    1000 10000\n' +
			'-10000.5';

		const expected3 =
			'   0   1.5        2\n' +
			'  10 100.5     -100\n' +
			'1000 10000 -10000.5';

		assert.strictEqual(format(input, 2), expected2);
		assert.strictEqual(format(input, 3), expected3);
	});

	QUnit.test('format работает правильно c количеством колонок, равным количеству чисел массива', function (assert) {
		const input = [ 1, 2, 10, 100, 1000, 10000 ];

		const expected =
			'1 2 10 100 1000 10000';

		assert.strictEqual(format(input, 6), expected);
	});

	QUnit.test('format правильно проверяет число колонок', function (assert) {
		const input = [ 1, 2, 10, 3, 1000, 10000 ];

		const expected =
			"Columns amount must be a positive integer";

		const expected2 =
			"Columns amount must be greater than array size";

		assert.strictEqual(format(input, -1), expected);
		assert.strictEqual(format(input, 10), expected2);
	});

	QUnit.test('format правильно проверяет элементы массива', function (assert) {
		const input = [1, 2, 10, 100, "str", 10000];

		const expected =
			"Input data must contain integers only";

		assert.strictEqual(format(input, 6), expected);
	});
});
