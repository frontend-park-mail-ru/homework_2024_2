'use strict';

QUnit.module('Тестируем функцию euclid', function () {
	QUnit.test('На входе всего одно число', function (assert) {
		assert.strictEqual(euclid(1), 1, 'euclid(1) === 1');
		assert.strictEqual(euclid(2), 2, 'euclid(2) === 2');
		assert.strictEqual(euclid(7), 7, 'euclid(7) === 7');
		assert.strictEqual(euclid(6006), 6006, 'euclid(6006) === 6006');
	});

	QUnit.test('Функция должна правильно находить НОД трёх натуральных чисел', function (assert) {
		assert.strictEqual(euclid(1, 1, 1), 1, 'euclid(1, 1, 1) === 1');
		assert.strictEqual(euclid(2, 2, 2), 2, 'euclid(2, 2, 2) === 2');
		assert.strictEqual(euclid(13, 13, 26), 13, 'euclid(13, 13, 26) === 13');
		assert.strictEqual(euclid(3, 7, 1), 1, 'euclid(3, 7, 1) === 1');
		assert.strictEqual(euclid(7, 7, 13), 1, 'euclid(7, 7, 13) === 1');
		assert.strictEqual(euclid(2, 14, 16), 2, 'euclid(2, 14, 16) === 2');
		assert.strictEqual(euclid(7, 14, 21), 7, 'euclid(7, 14, 21) === 7');
		assert.strictEqual(euclid(6006, 3738735, 51051), 3003, 'euclid(6006, 3738735, 51051) === 3003');
	});

	QUnit.test('Функция должна правильно работать с любым количеством аргументов', function (assert) {
		assert.strictEqual(euclid(1, 1, 1, 1, 1, 1, 1), 1);

		const n = 17;
		assert.strictEqual(euclid(3 * n, 2 * n, 4 * n, 7 * n, n, 21 * n), n);

		const temp = [80325, 55275, 8746650, 3000000, 45672375, 225, 54675];
		assert.strictEqual(euclid(...[...temp, ...temp, ...temp, ...temp, ...temp]), euclid(...temp));
		assert.throws(function () { euclid() }, /Необходимо передать хотя бы одно число/, 'проверка на ввод десятичного числа в конце');
	});

	QUnit.test('Функция должна уметь работать и с отрицательными числами', function (assert) {
		assert.strictEqual(euclid(-5, 10), 5, 'euclid(-5, 15, 10) === 5');
		assert.strictEqual(euclid(5, -10), 5, 'euclid(5, 15, -10) === 5');
		assert.strictEqual(euclid(-9, 18q, -27), 9, 'euclidS(9, -18, 27) === 9');
		assert.strictEqual(euclid(-9, 18, -27), 9, 'euclid(-9, 18, -27) === 9');
	});

	QUnit.test('Функция должна выдавать ошибку если введено не целое число', function (assert) {
		assert.throws(function () { euclid('a') }, /Все аргументы должны быть целыми числами/, 'проверка на ввод аргумента отличного от числа');
		assert.throws(function () { euclid(1, 'a', 1) }, /Все аргументы должны быть целыми числами/, 'проверка на ввод аргумента отличного от целого числа в середине');
		assert.throws(function () { euclid('a', 1, 1) }, /Все аргументы должны быть целыми числами/, 'проверка на ввод аргумента отличного от целого числа в начале');
		assert.throws(function () { euclid(1, 1, 'a') }, /Все аргументы должны быть целыми числами/, 'проверка на ввод аргумента отличного от целого числа в конце');
		assert.throws(function () { euclid(1, 1.5, 1) }, /Все аргументы должны быть целыми числами/, 'проверка на ввод десятичного числа в середине');
		assert.throws(function () { euclid(1.5, 1, 1) }, /Все аргументы должны быть целыми числами/, 'проверка на ввод десятичного числа в начале');
		assert.throws(function () { euclid(1, 1, 1.5) }, /Все аргументы должны быть целыми числами/, 'проверка на ввод десятичного числа в конце');
	});

	QUnit.test('Функция должна корректно работать с массивами', function (assert) {
		assert.strictEqual(euclid([10, 5, 15]), 5, 'проверка на ввод массива из трех чисел');
		assert.throws(function () { euclid([1, 'a', 1]) }, /Все аргументы должны быть целыми числами/, 'проверка на ввод аргумента отличного от числа в середине массива');
		assert.throws(function () { euclid(['a', 1, 1]) }, /Все аргументы должны быть целыми числами/, 'проверка на ввод аргумента отличного от числа в начале массива');
		assert.throws(function () { euclid([1, 1, 'a']) }, /Все аргументы должны быть целыми числами/, 'проверка на ввод аргумента отличного от числа в конце массива');
		assert.strictEqual(euclid(20, [10, 5, 15], 30), 5, 'проверка на ввод массива из трех чисел и двух целых чисел');
		assert.strictEqual(euclid(20, [10, 5, [5, 10], 15], 30), 5, 'проверка на ввод массива из трех чисел с вложенным массивом из двух чисел и двух целых чисел');
		assert.throws(function () { euclid(1.5, [10, 5, 15], 30) }, /Все аргументы должны быть целыми числами/, 'проверка на ввод массива из трех чисел и двух чисел - целого и десятичного');

	});
	QUnit.test('Функция должна корректно работать с числами созданными с помощью конструктора', function (assert) {
		const n1 = new Number('5');
		const n2 = new Number('10');
		assert.strictEqual(euclid([n1, n2]), 5, 'проверка на ввод двух чисел созданных с помощью конструктора');
		assert.strictEqual(euclid([15, n1, n2]), 5, 'проверка на ввод двух чисел созданных с помощью конструктора и одного простого целого числа в начале');
		assert.strictEqual(euclid([n1, n2, 15]), 5, 'проверка на ввод двух чисел созданных с помощью конструктора и одного простого целого числа в конце');
		assert.strictEqual(euclid([n1, 15, n2]), 5, 'проверка на ввод двух чисел созданных с помощью конструктора и одного простого целого числа в середине');

	});

});
