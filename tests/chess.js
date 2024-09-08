'use strict';

QUnit.module('Тестируем функцию chess', function () {
	QUnit.test('Шахматная доска 1 на 1', function (assert) {
		const expected =
			'*\n'
			assert.strictEqual(chess(1), expected);
			assert.strictEqual(chess('1'), expected);
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
			() => chess(0), Error('Size must be more than 1'), 'Не бывает доски 0 на 0');
		assert.throws(
			() => chess('0'), Error('Size must be more than 1'), 'Не бывает доски 0 на 0');
	});

	QUnit.test('Шахматная доска -10 на -10', function (assert) {
		assert.throws(
			() => chess(-10), Error('Size must be more than 1'), 'Не бывает доски -10 на -10');
		assert.throws(
			() => chess('-10'), Error('Size must be more than 1'), 'Не бывает доски -10 на -10');
	});

	QUnit.test('Шахматная доска размером не int', function (assert) {
		const expected = 'Size must be an integer.';

		assert.throws(
			() => chess(9.2), 
			new Error(expected), 
			'Должна быть ошибка для нецелого числа'
		);

		assert.throws(
			() => chess('9.2'), 
			new Error(expected), 
			'Должна быть ошибка для строки с числом'
		);

		assert.throws(
			() => chess('nothing'), 
			new Error(expected), 
			'Должна быть ошибка для строки без числа'
		);

		assert.throws(
			() => chess('something'), 
			new Error(expected), 
			'Должна быть ошибка для строки с текстом'
		);

		assert.throws(
			() => chess([]), 
			new Error(expected), 
			'Должна быть ошибка для пустого массива'
		);

		assert.throws(
			() => chess([1, 2, 911]), 
			new Error(expected), 
			'Должна быть ошибка для массива с числами'
		);

		assert.throws(
			() => chess({}), 
			new Error(expected), 
			'Должна быть ошибка для пустого объекта'
		);

		assert.throws(
			() => chess({1: 8}), 
			new Error(expected), 
			'Должна быть ошибка для объекта с числовым ключом'
		);

		assert.throws(
			() => chess({'1': 8}), 
			new Error(expected), 
			'Должна быть ошибка для объекта со строковым ключом'
		);

		assert.throws(
			() => chess(), 
			new Error(expected), 
			'Должна быть ошибка для отсутствующего аргумента'
		);

		assert.throws(
			() => chess(null), 
			new Error(expected), 
			'Должна быть ошибка для null'
		);

		assert.throws(
			() => chess(true), 
			new Error(expected), 
			'Должна быть ошибка для булевого значения'
		);

	
	});

});
