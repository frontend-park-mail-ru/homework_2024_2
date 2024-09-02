'use strict';

QUnit.module('Тестируем функцию anagram', function () {
	QUnit.test('Функция работает правильно', function (assert) {
		const input = [
			'кот', 'пила', 'барокко',
			'стоп', 'ток', 'кошка',
			'липа', 'коробка', 'пост'
		];

		const output = [
			[ 'барокко', 'коробка' ],
			[ 'кот', 'ток' ],
			[ 'липа', 'пила' ],
			[ 'пост', 'стоп' ]
		];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция возвращает пустой массив при отсутствии анаграмм', function (assert) {
		const input = ['яблоко', 'груша', 'банан', 'липа', 'стоп'];
		const output = [];
		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция корректно обрабатывает пустой входной массив', function (assert) {
		const input = [];
		const output = [];
		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция возвращает массив с дубликатами', function (assert) {
		const input = ['дом', 'машина', 'дерево', 'дом'];
		const output = [['дом', 'дом']];
		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция корректно работает, если все слова являются анаграммами друг друга', function (assert) {
		const input = ['кот', 'ток', 'окт'];
		const output = [
			['кот', 'окт', 'ток']
		];
		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция корректно возвращает ошибку, если аргумент не является массивом (подается строка)', function (assert) {
		const input = 'кот, ток, окт';
		assert.throws(() => {
			anagram(input)
		}, new Error('Argument must be an array'))
	});

	QUnit.test('Функция корректно возвращает ошибку, если аргумент не является массивом (подается число)', function (assert) {
		const input = 123;
		assert.throws(() => {
			anagram(input)
		}, new Error('Argument must be an array'))
	});
	QUnit.test('Функция корректно возвращает ошибку, если массив содержит не только слова', function (assert) {
		const input = ['кот', 1, true, 'ток123', '123'];
		assert.throws(() => {
			anagram(input)
		}, new Error('Array must only contain words'))
	});

	QUnit.test('Функция корректно возвращает ошибку, если массив содержит не только слова', function (assert) {
		const input = ['кот', 'ток123', '123'];
		assert.throws(() => {
			anagram(input)
		}, new Error('Array must only contain words'))
	});

	QUnit.test('Функция работает правильно с английским алфавитом', function (assert) {
		const input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
		const output = [['ate', 'eat', 'tea'], ['nat', 'tan']]
		assert.deepEqual(anagram(input), output);
	});
});
