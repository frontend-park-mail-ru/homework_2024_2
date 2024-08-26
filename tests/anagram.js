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
});
