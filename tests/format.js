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

	QUnit.test('format работает правильно с пустым массивом', function (assert) {
		const input = [];

		const expected1 =
			'';

		const expected2 =
			'';

		assert.strictEqual(format(input, 1), expected1);
		assert.strictEqual(format(input, 2), expected2);
	});

	QUnit.test('format работает правильно с граничными значениями', function (assert) {
		const intMax32 = 2**31 - 1;
		const intMin32 = -(2**31);

		const input = [1, 10, intMax32, intMin32];

		const expected1 =
			'          1\n' +
			'         10\n' +
			' 2147483647\n' +
			'-2147483648';
	
		const expected2 =
			'         1          10\n' +
			'2147483647 -2147483648';
	
		assert.strictEqual(format(input, 1), expected1);
		assert.strictEqual(format(input, 2), expected2);
	});

	QUnit.test('format работает правильно с невалидными данными', function (assert) {
		const input1 = "string";
		const input2 = true;
		const input3 = ['1', '2', '3'];
		const input4 = [1, 2, Infinity, 4, -Infinity];
		const input5 = [1, NaN]

		const expected =
			'Invalid data';

		assert.throws(() => format(input1, 1), new TypeError(expected));
		assert.throws(() => format(input2, 1), new TypeError(expected));
		assert.throws(() => format(input3, 1), new TypeError(expected));
		assert.throws(() => format(input4, 1), new TypeError(expected));
		assert.throws(() => format(input5, 1), new TypeError(expected));
	});
});

