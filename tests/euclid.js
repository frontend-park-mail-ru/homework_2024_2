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

		const temp = [ 80325, 55275, 8746650, 3000000, 45672375, 225, 54675 ];
		assert.strictEqual(euclid(...[ ...temp, ...temp, ...temp, ...temp, ...temp ]), euclid(...temp));
	});

	QUnit.test('ДОБ.: Функция должна уметь обрабатывать отрицательные числа', function (assert) {
		assert.strictEqual(euclid(-9, -3, 27, 9), -3, 'euclid(-9, -3, 27, 9) === -3');
		assert.strictEqual(euclid(-125, -25, 500), -25, 'euclid(-125, -25, 500) === -25');
		assert.strictEqual(euclid(11, -121, 93), 1, 'euclid(11, -121, 93) === 1');
	});

	QUnit.test('ДОБ.: Функция может принимать нечисловые аргументы', function (assert) {
		assert.throws(function() {
		  euclid('a', 2);
		}, TypeError, 'euclid("a", 2) выбрасывает ошибку');
		
		assert.throws(function() {
		euclid(null, 2);
		}, TypeError, 'euclid(null, 2) выбрасывает ошибку');

		assert.throws(function() {
		euclid(1, true);
		}, TypeError, 'euclid(1, true) выбрасывает ошибку');

		assert.throws(function() {
		euclid(1, []);
		}, TypeError, 'euclid(1, []) выбрасывает ошибку');

		assert.throws(function() {
		euclid(undefined, 2);
		}, TypeError, 'euclid(undefined, 2) выбрасывает ошибку');
	});

	QUnit.test('ДОБ.: Функция может обработать отсутствие аргументов', function (assert) {
		assert.throws(function() {
		  euclid();
		}, RangeError, 'euclid() приводит к ошибке');
	});
});