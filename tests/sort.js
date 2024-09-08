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

	QUnit.test('Функция работает правильно с пустой строкой', function(assert){
		assert.strictEqual(sort(''), '');
	});

	QUnit.test('Функция работает правильно с одним символом', function(assert){
		assert.strictEqual(sort('в'), 'В');
		assert.strictEqual(sort('У'), 'У');
	});

	QUnit.test('Функция работает с со строками расположенными в обратной сортировке', function(assert){
		assert.strictEqual(sort('zzZzzz DddDddddD ccfed bbbre AAA'), 'Aaa Bbber Ccdef Ddddddddd Zzzzzz');
		assert.strictEqual(sort('Aab aaa'), 'Aaa Aab');
	});

	QUnit.test('Функция работает правильно если строки уже отсортированы', function(assert){
		assert.strictEqual(sort('Aaa Bbb Ccc Ggg'), 'Aaa Bbb Ccc Ggg');
		assert.strictEqual(sort('AaA bbBB CcCCc GgGg'), 'Aaa Bbbb Ccccc Gggg');
	});

	QUnit.test('Функция работает на разных строках', function(assert){
		assert.strictEqual(sort('abcd abbb baa'), 'Aab Abbb Abcd');
		assert.strictEqual(sort('abbbbacc aaa abcdef bbb'), 'Aaa Aabbbbcc Abcdef Bbb');
	})

	QUnit.test('Функция выдает ошибку на не строках', function(assert){
		assert.throws(
			function() {
				sort(1523);
			},
			function(error) {
				return error instanceof TypeError && error.message === 'Параметр должен быть строкой';
			},
			'Ошибка TypeError при входном параметре не строке'
		);

		assert.throws(
			function() {
				sort(true);
			},
			function(error) {
				return error instanceof TypeError && error.message === 'Параметр должен быть строкой';
			},
			'Ошибка TypeError при входном параметре не строке'
		);

		assert.throws(
			function() {
				sort();
			},
			function(error) {
				return error instanceof TypeError && error.message === 'Параметр должен быть строкой';
			},
			'Ошибка TypeError при входном параметре не строке'
		)
	})
});
