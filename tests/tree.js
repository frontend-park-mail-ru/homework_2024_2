'use strict';

let expectTreeThrow = function(height) {
	let throws;

	try {
		tree(height);
		throws = false;
	}
	catch (error) {
		throws = true;
	}

	return throws;
}

QUnit.module('Тестируем функцию tree', function () {	
	QUnit.test('Ёлочек высотой ниже трёх не бывает', function (assert) {
		assert.strictEqual(expectTreeThrow(0), true);
		assert.strictEqual(expectTreeThrow(1), true);
		assert.strictEqual(expectTreeThrow(2), true);
		assert.strictEqual(expectTreeThrow('0'), true);
		assert.strictEqual(expectTreeThrow('1'), true);
		assert.strictEqual(expectTreeThrow('2'), true);
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

	QUnit.test('Ёлочка высотой 6', function (assert) {
		const expected =
			'    *    \n' +
			'   ***   \n' +
			'  *****  \n' +
			' ******* \n' +
			'*********\n' +
			'    |    \n';
		assert.strictEqual(tree(6), expected);
		assert.strictEqual(tree('6'), expected);
	});

	QUnit.test('Ёлочка высотой 7', function (assert) {
		const expected =
			'     *     \n' +
			'    ***    \n' +
			'   *****   \n' +
			'  *******  \n' +
			' ********* \n' +
			'***********\n' +
			'     |     \n';
		assert.strictEqual(tree(7), expected);
		assert.strictEqual(tree('7'), expected);
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

	QUnit.test('Вызов функции построения дерева без указания высоты', function (assert) {
		assert.strictEqual(expectTreeThrow(), true);
	});

	QUnit.test('Вызов функции построения дерева с массивом в качестве высоты', function (assert) {
		assert.strictEqual(expectTreeThrow([1, 2, 3]), true);
	});

	QUnit.test('Вызов функции построения дерева с объектом в качестве высоты', function (assert) {
		assert.strictEqual(expectTreeThrow({ city: 'Moscow' }), true);
	});
});
