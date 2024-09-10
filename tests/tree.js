'use strict';

QUnit.module('Тестируем функцию tree', function () {
	QUnit.test('Высота елочки должна выражаться числом', function (assert) {
		const typeError = new TypeError('The parameter type is invalid!');
		const error = new Error('Parameter is not a number!');

        assert.throws(() => tree([1, 2, 3]), TypeError, 'Ожидалась ошибка типа TypeError для массива');
        assert.throws(() => tree('кривая строка'), Error, 'Ожидалась ошибка для строки');
        assert.throws(() => tree(false), TypeError, 'Ожидалась ошибка типа TypeError для boolean');
	});

	QUnit.test('Ёлочек высотой ниже трёх не бывает', function (assert) {
		const rangeError = new RangeError('The height must be greater than 3')

		assert.throws(() => tree(0), rangeError, 'Ошибка выброшена для высоты 0');
		assert.throws(() => tree(1), rangeError, 'Ошибка выброшена для высоты 1');
		assert.throws(() => tree(2), rangeError, 'Ошибка выброшена для высоты 2');
		assert.throws(() => tree('0'), rangeError, 'Ошибка выброшена для строки "0"');
		assert.throws(() => tree('1'), rangeError, 'Ошибка выброшена для строки "1"');
		assert.throws(() => tree('2'), rangeError, 'Ошибка выброшена для строки "2"');	
	});

	QUnit.test('Ёлочка высотой 3', function (assert) {
		const expected =
			' * \n' +
			'***\n' +
			' | \n';

		assert.strictEqual(tree(3), expected);
		assert.strictEqual(tree('3'), expected);

	});

	QUnit.test('Ёлочка высотой 4', function (assert) {
		const expected =
			'  *  \n' +
			' *** \n' +
			'*****\n' +
			'  |  \n';

		assert.strictEqual(tree(4), expected);
		assert.strictEqual(tree('4'), expected);
	});

	QUnit.test('Ёлочка высотой 5', function (assert) {
		const expected =
			'   *   \n' +
			'  ***  \n' +
			' ***** \n' +
			'*******\n' +
			'   |   \n';

		assert.strictEqual(tree(5), expected);
		assert.strictEqual(tree('5'), expected);
	});

	QUnit.test('Ёлочка высотой 8', function (assert) {
		const expected =
			'      *      \n' +
			'     ***     \n' +
			'    *****    \n' +
			'   *******   \n' +
			'  *********  \n' +
			' *********** \n' +
			'*************\n' +
			'      |      \n';
			
		assert.strictEqual(tree(8), expected);
		assert.strictEqual(tree('8'), expected);
	});
});
