'use strict';

QUnit.module('Тестируем функцию letters', function () {
	QUnit.test('Оставляет без изменений строки, где все символы уникальны', function (assert) {
		assert.strictEqual(letters('1234'), '1234');
		assert.strictEqual(letters('abcd'), 'abcd');
		assert.strictEqual(letters('олдж фыва'), 'олдж фыва');
		assert.strictEqual(letters(',.;=\n\t '), ',.;=\n\t ');

		assert.strictEqual(letters('1234', true), '1234');
		assert.strictEqual(letters('abcd', true), 'abcd');
		assert.strictEqual(letters('олдж фыва', true), 'олдж фыва');
		assert.strictEqual(letters(',.;=\n\t ', true), ',.;=\n\t ');

		assert.strictEqual(letters('1234', false), '1234');
		assert.strictEqual(letters('abcd', false), 'abcd');
		assert.strictEqual(letters('олдж фыва', false), 'олдж фыва');
		assert.strictEqual(letters(',.;=\n\t ', false), ',.;=\n\t ');
	});

	QUnit.test('Удаляет идущие подряд буквы', function (assert) {
		assert.strictEqual(letters('111'), '');
		assert.strictEqual(letters('www'), '');
		assert.strictEqual(letters('...'), '');
		assert.strictEqual(letters('   '), '');
	});

	QUnit.test('Оставляет первую букву, остальные удаляет', function (assert) {
		assert.strictEqual(letters('121', true), '12');
		assert.strictEqual(letters('wWw', true), 'wW');
		assert.strictEqual(letters('.-.', true), '.-');
		assert.strictEqual(letters(' 0 ', true), ' 0');
	});

	QUnit.test('Оставляет последнюю букву, остальные удаляет', function (assert) {
		assert.strictEqual(letters('121', false), '21');
		assert.strictEqual(letters('wWw', false), 'Ww');
		assert.strictEqual(letters('.-.', false), '-.');
		assert.strictEqual(letters(' 0 ', false), '0 ');
	});

	QUnit.test('Удаляет повторяющиеся буквы в разных словах', function (assert) {
		assert.strictEqual(letters('привет, мир'), 'пвет, м');
		assert.strictEqual(letters('hello, world'), 'he, wrd');
		assert.strictEqual(letters('мама мыла раму'), 'ылру');
		assert.strictEqual(letters('"Кукареку!", сказал Петух'), 'Кр!,сзлПтх');

		assert.strictEqual(letters('мама мыла раму', true), 'ма ылру');
		assert.strictEqual(letters('от топота копыт', true), 'от пакы');
		assert.strictEqual(letters('hello world', true), 'helo wrd');

		assert.strictEqual(letters('мама мыла раму', false), 'ыл раму');
		assert.strictEqual(letters('от топота копыт', false), 'а копыт');
		assert.strictEqual(letters('hello world', false), 'he world');
	});
	
	QUnit.test('Дополнительные тесты', function (assert) {
		assert.strictEqual(letters('aabbcc'), '', 'Удаляет все повторяющиеся символы');
		assert.strictEqual(letters('aabbcc', true), 'abc', 'Сохраняет первую встречу символов');
		assert.strictEqual(letters('abcdabcd', false), 'abcd', 'Сохраняет последнюю встречу символов');
	});
	QUnit.test('Кейсы без повторяющихся символов', function (assert) {
		assert.strictEqual(letters('abcdef'), 'abcdef', 'Возвращает исходную строку, если нет повторов');
		assert.strictEqual(letters('1234567890'), '1234567890', 'Возвращает исходную строку с цифрами, если нет повторов');
	});

	QUnit.test('Кейсы с одним повторяющимся символом', function (assert) {
		assert.strictEqual(letters('aabc'), 'bc', 'Удаляет все повторяющиеся символы, оставляя уникальные');
		assert.strictEqual(letters('aabc', true), 'abc', 'Сохраняет первое вхождение повторяющегося символа');
		assert.strictEqual(letters('aabc', false), 'abc', 'Сохраняет последнее вхождение повторяющегося символа');
	});

	QUnit.test('Пустая строка', function (assert) {
		assert.strictEqual(letters(''), '', 'Возвращает пустую строку, если входная строка пуста');
	});
	QUnit.test('Негативные сценарии: неверные типы аргументов', function (assert) {
		assert.throws(
			function () {
				letters(null);
			},
			TypeError,
			'Бросает TypeError при передаче null вместо строки'
		);

		assert.throws(
			function () {
				letters(12345);
			},
			TypeError,
			'Бросает TypeError при передаче числа вместо строки'
		);

		assert.throws(
			function () {
				letters({ key: 'value' });
			},
			TypeError,
			'Бросает TypeError при передаче объекта вместо строки'
		);

		assert.throws(
			function () {
				letters(['a', 'b', 'c']);
			},
			TypeError,
			'Бросает TypeError при передаче массива вместо строки'
		);

		assert.throws(
			function () {
				letters(undefined);
			},
			TypeError,
			'Бросает TypeError при передаче undefined вместо строки'
		);
	});
});