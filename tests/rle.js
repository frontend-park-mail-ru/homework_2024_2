'use strict';

QUnit.module('Тестируем функцию rle', function () {
	QUnit.test('rle работает правильно', function (assert) {
		assert.strictEqual(rle('AAAB'), 'A3B');
		assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
		assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
	});

	QUnit.test('Корректная работа с одиночными символами', function (assert) {
		assert.strictEqual(rle('ABCDE'), 'ABCDE', 'rle("ABCDE") === "ABCDE"');
		assert.strictEqual(rle('ABCD'), 'ABCD', 'rle("ABCD") === "ABCD"');
	});

	QUnit.test('Корректная работа со строками, содержащими только один символ', function (assert) {
		assert.strictEqual(rle('BBBBBBB'), 'B7', 'rle("BBBBBBB") === "B7"');
    	assert.strictEqual(rle('CCCCCCCC'), 'C8', 'rle("CCCCCCCC") === "C8"');
	});

	QUnit.test('Корректная работа с пустой строкой', function (assert) {
    	assert.strictEqual(rle(''), '', 'rle("") === ""');
	});
});
