'use strict';

QUnit.module('Тестируем функцию rle', function () {
	QUnit.test('rle работает правильно', function (assert) {
		assert.strictEqual(rle('AAAB'), 'A3B');
		assert.strictEqual(rle('ABC'), 'ABC');
		assert.strictEqual(rle('A'), 'A');
		assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
		assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
	});

	QUnit.test('пустая строка', function (assert) {
		assert.strictEqual(rle(''), '');
	});

	QUnit.test('строка из одного символа', function (assert) {
		assert.strictEqual(rle('AAAAAAAA'), 'A8');
		assert.strictEqual(rle('BBBBBBBBBBB'), 'B11');
		assert.strictEqual(rle('CCCCCCCCCCCCCCCCCCCCC'), 'C21');
	});

	QUnit.test('некорректный ввод', function (assert) {
		assert.strictEqual(rle(322), null);
		assert.strictEqual(rle({}), null);
		assert.strictEqual(rle([2,2,8]), null);
	});
});
