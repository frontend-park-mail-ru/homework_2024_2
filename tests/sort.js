'use strict';

QUnit.module('Тестируем функцию sort', function () {
	QUnit.test('Функция делает первую букву слова прописной', function (assert) {
		assert.strictEqual(sort('яяя'), 'Яяя', 'Работает с русским алфавитом');
		assert.strictEqual(sort('Бббббб'), 'Бббббб');
		assert.strictEqual(sort('zzzzzz'), 'Zzzzzz', 'Работает с английским алфавитом');
		assert.strictEqual(sort('Rrrrrrrr'), 'Rrrrrrrr');
	});

	QUnit.test('Функция делает все буквы, кроме первой, строчными', function (assert) {
		assert.strictEqual(sort('ЯЯЯЯ'), 'Яяяя', 'Работает с русским алфавитом');
		assert.strictEqual(sort('zZzZZzzZZZ'), 'Zzzzzzzzzz', 'Работает с английским алфавитом');
	});

	QUnit.test('Функция работает с предложениями', function (assert) {
		assert.strictEqual(sort('ЯЯЯ яяя яяя яяя'), 'Яяя Яяя Яяя Яяя');
		assert.strictEqual(sort('яяя яяяяя ЯЯЯЯ ЯяяяЯЯЯяя'), 'Яяя Яяяя Яяяяя Яяяяяяяяя');
	});

	QUnit.test('Функция сортирует буквы в отдельных словах по алфавиту', function (assert) {
		assert.strictEqual(sort('fedcba'), 'Abcdef', 'Работает с английским алфавитом');
		assert.strictEqual(sort('zyxwvu'), 'Uvwxyz');
		assert.strictEqual(sort('жёедгвба'), 'Абвгдеёж', 'Работает с русским алфавитом');
		assert.strictEqual(sort('вбава'), 'Аабвв');
	});

	QUnit.test('Функция сортирует слова в предложении по алфавиту', function (assert) {
		assert.strictEqual(sort('f e d c b a'), 'A B C D E F', 'Работает с английским алфавитом');
		assert.strictEqual(sort('z y x w v u'), 'U V W X Y Z');
		assert.strictEqual(sort('ж ё е д г в б а'), 'А Б В Г Д Е Ё Ж', 'Работает с русским алфавитом');
		assert.strictEqual(sort('в б а в а'), 'А А Б В В');
	});

	QUnit.test('Функция работает правильно', function (assert) {
		assert.strictEqual(sort('мама мыла раму'), 'Аамм Алмы Амру');
		assert.strictEqual(sort('космический корабль летит на марс'), 'Абклорь Амрс Ан Еиийккмоссч Еилтт');
		assert.strictEqual(sort('i love frontend'), 'Defnnort Elov I');
		assert.strictEqual(sort('hello world'), 'Dlorw Ehllo');
	});

	// Мои тесты

	QUnit.test('Функция работает с одиночными буквами', function (assert) {
		assert.strictEqual(sort('a'), 'A', 'Одно слово с одной буквой');
		assert.strictEqual(sort('я'), 'Я', 'Одиночная буква в русском алфавите');
		assert.strictEqual(sort('ё'), 'Ё', 'Одиночная буква ё');
		assert.strictEqual(sort('z'), 'Z', 'Одиночная буква в английском алфавите');
	});

	QUnit.test('Функция работает с пустыми строками и пробелами', function (assert) {
		assert.strictEqual(sort(''), '', 'Пустая строка');
		assert.strictEqual(sort('   '), '   ', 'Пробелы остаются, даже если строка без символов');
	});

	QUnit.test('Функция корректно обрабатывает отступы', function (assert) {
        assert.strictEqual(sort('    hello world'), '    Dlorw Ehllo', 'Отступ с английскими буквами');
        assert.strictEqual(sort('   привет мир'), '   Веипрт Имр', 'Отступ с русскими буквами');
    });

	QUnit.test('Функция корректно обрабатывает слова в обратном порядке', function (assert) {
		assert.strictEqual(sort('zyxwvu tsrqpo nmlkji hgfedcba'), 'Abcdefgh Ijklmn Opqrst Uvwxyz', 'Слова в обратном порядке');
		assert.strictEqual(sort('c b a'), 'A B C', ' Корткие слова в обратном порядке');
		assert.strictEqual(sort('млкн ропт сба'), 'Абс Клмн Опрт', 'Слова в обратном порядке на русском');
		assert.strictEqual(sort('я и в а б г'), 'А Б В Г И Я', 'Короткие слова в обратном порядке на русском');
	});

	QUnit.test('Функция корректно обрабатывает некорректный ввод', function (assert) {
		assert.throws(() => sort(undefined), TypeError, 'Обрабатывает undefined');
		assert.throws(() => sort(null), TypeError, 'Обрабатывает null');
		assert.throws(() => sort(1488), TypeError, 'Обрабатывает число');
		assert.throws(() => sort(true), TypeError, 'Обрабатывает boolean');
		assert.throws(() => sort([]), TypeError, 'Обрабатывает массив');
	});	

	QUnit.test('Функция корректно обрабатывает объекты-строки', function (assert) {
		assert.strictEqual(sort(new String('hello world')), 'Dlorw Ehllo', 'Обрабатывает строковый объект на английском');
    	assert.strictEqual(sort(new String('привет мир')), 'Веипрт Имр', 'Обрабатывает строковый объект на русском');
		assert.strictEqual(sort(new String('f')), 'F', 'Обрабатывает строковый объект из одной буквы на английском');
		assert.strictEqual(sort(new String('ё')), 'Ё', 'Обрабатывает строковый объект из одной буквы на русском');
	});	
	
});
