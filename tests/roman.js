'use strict';

QUnit.module('Тестируем функцию roman', function () {
	QUnit.test('roman правильно переводит из десятичной системы счисления', function (assert) {
		assert.strictEqual(roman(1), 'I');
		assert.strictEqual(roman(5), 'V');
		assert.strictEqual(roman(1000), 'M');
		assert.strictEqual(roman(50), 'L');
		assert.strictEqual(roman(500), 'D');

		assert.strictEqual(roman(4), 'IV');
		assert.strictEqual(roman(900), 'CM');

		assert.strictEqual(roman(1904), 'MCMIV');
		assert.strictEqual(roman(1990), 'MCMXC');
		assert.strictEqual(roman(2017), 'MMXVII');
	});

	QUnit.test('roman правильно определяет, что было передано на вход', function (assert) {
		assert.strictEqual(roman('1904'), 'MCMIV');
		assert.strictEqual(roman('1990'), 'MCMXC');
		assert.strictEqual(roman('2017'), 'MMXVII');
	});

	QUnit.test('roman выводит ошибку при некорректном вводе', function (assert) {
		assert.throws(() => roman(null), 'null не является числом');
		assert.throws(() => roman(undefined), 'null не является числом');
		assert.throws(() => roman(4.5), 'Переводить дробное число в римское нельзя');
		assert.throws(() => roman(-4), 'Переводить отрицательное число в римское нельзя');
		assert.throws(() => roman(0), 'Переводить отрицательное число в римское нельзя');
		assert.throws(() => roman('hello'), 'Переводить текст в римское нельзя');
	});	
});

QUnit.module('Тестируем функцию arabic', function () {
	QUnit.test('arabic правильно переводит из римской системы счисления', function (assert) {
		assert.strictEqual(arabic('I'), 1);
		assert.strictEqual(arabic('V'), 5);
		assert.strictEqual(arabic('M'), 1000);
		assert.strictEqual(arabic('l'), 50);
		assert.strictEqual(arabic('d'), 500);

		assert.strictEqual(arabic('iv'), 4);
		assert.strictEqual(arabic('iiii'), 4);
		assert.strictEqual(arabic('CM'), 900);

		assert.strictEqual(arabic('MCMIV'), 1904);
		assert.strictEqual(arabic('MCMXC'), 1990);
		assert.strictEqual(arabic('mmxvii'), 2017);
	});

	QUnit.test('arabic выводит ошибку при некорректном вводе', function (assert) {
		assert.throws(() => arabic(''), 'нельзя передавать пустую строку');
		assert.throws(() => roman(null), 'null не является числом');
		assert.throws(() => roman('@!&'), 'Переводить дробное число в римское нельзя');
		assert.throws(() => roman({}), 'Нельзя передавать пустой объект');
		assert.throws(() => roman([]), 'Нельзя передавать пустой массив');
	});	

});
