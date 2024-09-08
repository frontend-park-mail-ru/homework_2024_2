'use strict';

QUnit.module('Тестируем функцию letters', function () {
	QUnit.test('Оставляет без изменений строки, где все символы уникальны', function (assert) {
		assert.strictEqual(letters('1234'), '1234');
		assert.strictEqual(letters('abcd'), 'abcd');
		assert.strictEqual(letters('олдж фыва'), 'олдж фыва');
		assert.strictEqual(letters(',.;=\n\t '), ',.;=\n\t ');
		assert.strictEqual(letters('ウェブ'), 'ウェブ');

		assert.strictEqual(letters('1234', true), '1234');
		assert.strictEqual(letters('abcd', true), 'abcd');
		assert.strictEqual(letters('олдж фыва', true), 'олдж фыва');
		assert.strictEqual(letters(',.;=\n\t ', true), ',.;=\n\t ');
		assert.strictEqual(letters('ウェブ', true), 'ウェブ');

		assert.strictEqual(letters('1234', false), '1234');
		assert.strictEqual(letters('abcd', false), 'abcd');
		assert.strictEqual(letters('олдж фыва', false), 'олдж фыва');
		assert.strictEqual(letters(',.;=\n\t ', false), ',.;=\n\t ');
		assert.strictEqual(letters('ウェブ', false), 'ウェブ');
	});

	QUnit.test('Удаляет идущие подряд буквы', function (assert) {
		assert.strictEqual(letters('111'), '');
		assert.strictEqual(letters('www'), '');
		assert.strictEqual(letters('...'), '');
		assert.strictEqual(letters('   '), '');
		assert.strictEqual(letters('\n\n\n'), '');
	});

	QUnit.test('Оставляет первую букву, остальные удаляет', function (assert) {
		assert.strictEqual(letters('121', true), '12');
		assert.strictEqual(letters('wWw', true), 'wW');
		assert.strictEqual(letters('.-.', true), '.-');
		assert.strictEqual(letters(' 0 ', true), ' 0');
		assert.strictEqual(letters('\n1a1\n', true), '\n1a');
	});

	QUnit.test('Оставляет последнюю букву, остальные удаляет', function (assert) {
		assert.strictEqual(letters('121', false), '21');
		assert.strictEqual(letters('wWw', false), 'Ww');
		assert.strictEqual(letters('.-.', false), '-.');
		assert.strictEqual(letters(' 0 ', false), '0 ');
		assert.strictEqual(letters('\n1a1\n', false), 'a1\n');
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

	QUnit.test('Правильно работает с пустой строкой', function (assert) {
		assert.strictEqual(letters(''), '');

		assert.strictEqual(letters('', true), '');
		
		assert.strictEqual(letters('', false), '');
	});

	QUnit.test('Работает с разными типами данных, помимо строки', function (assert) {
		assert.strictEqual(letters(1223), '13');
		assert.strictEqual(letters(true), 'true');
		assert.strictEqual(letters(NaN), 'a');
		assert.strictEqual(letters(null), 'nu');

		assert.strictEqual(letters(1232, true), '123');
		assert.strictEqual(letters(true, true), 'true');
		assert.strictEqual(letters(NaN, true), 'Na');
		assert.strictEqual(letters(null, true), 'nul');

		assert.strictEqual(letters(1232, false), '132');
		assert.strictEqual(letters(true, false), 'true');
		assert.strictEqual(letters(NaN, false), 'aN');
		assert.strictEqual(letters(null, false), 'nul');
	})
});
