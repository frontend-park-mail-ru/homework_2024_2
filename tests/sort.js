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

	QUnit.test('Функция корректно обрабатывает множественные пробелы', function (assert) {
        assert.strictEqual(sort('    hello world'), '    Dlorw Ehllo', 'Множественные пробелы с русскими буквами');
        assert.strictEqual(sort('   привет мир'), '   Веипрт Имр', 'Множественные пробелы с английскими буквами');
    });

	QUnit.test('Функция корректно обрабатывает слова в обратном порядке', function (assert) {
		assert.strictEqual(sort('zyxwvu tsrqpo nmlkji hgfedcba'), 'Abcdefgh Ijklmn Opqrst Uvwxyz', 'Слова в обратном порядке');
		assert.strictEqual(sort('c b a'), 'A B C', ' Корткие слова в обратном порядке');
		assert.strictEqual(sort('млкн ропт сба'), 'Абс Клмн Опрт', 'Слова в обратном порядке на русском');
		assert.strictEqual(sort('я и в а б г'), 'А Б В Г И Я', 'Короткие слова в обратном порядке на русском');
	});

	QUnit.test('Функция корректно обрабатывает некорректный ввод', function (assert) {
		assert.strictEqual(sort(undefined), 'Ошибка: Неверный тип данных', 'Обрабатывает undefined');
		assert.strictEqual(sort(null), 'Ошибка: Неверный тип данных', 'Обрабатывает null');
		assert.strictEqual(sort(1488), 'Ошибка: Неверный тип данных', 'Обрабатывает число');
		assert.strictEqual(sort(true), 'Ошибка: Неверный тип данных', 'Обрабатывает boolean');
		assert.strictEqual(sort([]), 'Ошибка: Неверный тип данных', 'Обрабатывает массив');
	});
});
