'use strict';

QUnit.module('Тестируем функцию roman', function () {
	QUnit.test('roman правильно переводит из римской системы счисления', function (assert) {
		assert.strictEqual(roman('I'), 1);
		assert.strictEqual(roman('V'), 5);
		assert.strictEqual(roman('M'), 1000);
		assert.strictEqual(roman('l'), 50);
		assert.strictEqual(roman('d'), 500);

		assert.strictEqual(roman('iv'), 4);
		assert.strictEqual(roman('iiii'), 4);
		assert.strictEqual(roman('CM'), 900);

		assert.strictEqual(roman('MCMIV'), 1904);
		assert.strictEqual(roman('MCMXC'), 1990);
		assert.strictEqual(roman('mmxvii'), 2017);
		assert.strictEqual(roman('MCc'), 1200);
		assert.strictEqual(roman('MmMmDlXiI'), 4562);
		assert.strictEqual(roman('MMMMMMMMMMMMMMMMMMCMLXIV'), 18964);
		assert.strictEqual(roman('MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMmMMDLXXXIv'), 45584);
		
	});

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
		assert.strictEqual(roman('20525'), 'MMMMMMMMMMMMMMMMMMMMDXXV');
		assert.strictEqual(roman('19634'), 'MMMMMMMMMMMMMMMMMMMDCXXXIV');
	});

	QUnit.test("Проверка для объекта String", function(assert) {
		const result = roman(new String('I'));
		assert.strictEqual(typeof result, 'number', "Результат должен быть типа number");
	});
	
	QUnit.test('roman выводит ошибку при некорректном вводе', function (assert) {
		assert.throws(() => roman(''), 'нельзя передавать пустую строку');
		assert.throws(() => roman(null), 'null не является числом');
		assert.throws(() => roman('@!&'), 'Переводить дробное число в римское нельзя');
		assert.throws(() => roman({}), 'Нельзя передавать пустой объект');
		assert.throws(() => roman([]), 'Нельзя передавать пустой массив');
		assert.throws(() => roman('-4'), 'Нельзя передавать отрицательные значения');
		assert.throws(() => roman('aaa'), 'Неподдерживаемый формат');
	});	
});