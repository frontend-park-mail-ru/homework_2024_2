'use strict';

QUnit.module('Тестируем функцию chess', function () {
	QUnit.test('Шахматной доски 1 на 1 не бывает', function (assert) {
		const expected =
			'Size must be a positive integer more than 1.'
		assert.throws(
			() => chess(1), RangeError(expected), 'Не бывает доски 1 на 1');
		assert.throws(
			() => chess('1'), RangeError(expected), 'Не бывает доски 1 на 1');
			
	});

	QUnit.test('Шахматная доска 2 на 2', function (assert) {
		const expected =
			'* \n' +
			' *\n';
		assert.strictEqual(chess(2), expected);
		assert.strictEqual(chess('2'), expected);
	});

	QUnit.test('Шахматная доска 3 на 3', function (assert) {
		const expected =
			'* *\n' +
			' * \n' +
			'* *\n';
		assert.strictEqual(chess(3), expected);
		assert.strictEqual(chess('3'), expected);
	});

	QUnit.test('Шахматная доска 8 на 8', function (assert) {
		const expected =
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n';
		assert.strictEqual(chess(8), expected);
		assert.strictEqual(chess('8'), expected);
	});

	QUnit.test('Шахматная доска 4 на 4', function (assert) {
		const expected =
			'* * \n' +
			' * *\n' +
			'* * \n' +
			' * *\n';
		assert.strictEqual(chess(4), expected);
		assert.strictEqual(chess('4'), expected);
	});

	QUnit.test('Шахматная доска 0 на 0', function (assert) {
		assert.throws(
			() => chess(0), RangeError('Size must be a positive integer more than 1.'), 'Не бывает доски 0 на 0');
		assert.throws(
			() => chess('0'), RangeError('Size must be a positive integer more than 1.'), 'Не бывает доски 0 на 0');
	});

	QUnit.test('Шахматная доска -10 на -10', function (assert) {
		assert.throws(
			() => chess(-10), RangeError('Size must be a positive integer more than 1.'), 'Не бывает доски -10 на -10');
		assert.throws(
			() => chess('-10'), RangeError('Size must be a positive integer more than 1.'), 'Не бывает доски -10 на -10');
	});

	QUnit.test('Шахматная доска размером не int', function (assert) {
		const expected = 'Size must be a number.';


		assert.throws(
			() => chess('9.2'), 
			TypeError('Size must be an integer.'), 
			'Должна быть ошибка для строки с нецелым числом'
		);

		assert.throws(
			() => chess('-9.2'), 
			TypeError('Size must be an integer.'), 
			'Должна быть ошибка для строки с нецелым числом'
		);

		assert.throws(
			() => chess('not1hing'), 
			TypeError('Size must be an integer.'), 
			'Должна быть ошибка для строки без числа'
		);

		assert.throws(
			() => chess('something'), 
			TypeError('Size must be an integer.'), 
			'Должна быть ошибка для строки с текстом'
		);

		assert.throws(
			() => chess([]), 
			TypeError(expected), 
			'Должна быть ошибка для пустого массива'
		);

		assert.throws(
			() => chess([1, 2, 911]), 
			TypeError(expected), 
			'Должна быть ошибка для массива с числами'
		);

		assert.throws(
			() => chess({}), 
			TypeError(expected), 
			'Должна быть ошибка для пустого объекта'
		);

		assert.throws(
			() => chess({1: 8}), 
			TypeError(expected), 
			'Должна быть ошибка для объекта с числовым ключом'
		);

		assert.throws(
			() => chess({'1': 8}), 
			TypeError(expected), 
			'Должна быть ошибка для объекта со строковым ключом'
		);

		assert.throws(
			() => chess(), 
			TypeError(expected), 
			'Должна быть ошибка для отсутствующего аргумента'
		);

		assert.throws(
			() => chess(null), 
			TypeError(expected), 
			'Должна быть ошибка для null'
		);

		assert.throws(
			() => chess(true), 
			TypeError(expected), 
			'Должна быть ошибка для булевого значения'
		);

	
	});

});
