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
	QUnit.test('Функция работает правильно с одинаковыми словами', function (assert) {
		const input = [
			'кот', 'кот', 'кот',
			'стоп', 'стоп', 'стоп',
			'липа', 'липа', 'липа',
			'результат'
		];

		const output = [
			[ 'кот', 'кот', 'кот' ],
			[ 'липа', 'липа', 'липа' ],
			[ 'стоп', 'стоп', 'стоп' ]
			
		];

		assert.deepEqual(anagram(input), output);

	})
	QUnit.test('Функция работает правильно с английскими словами', function (assert) {
		const input = [
			'tears', 'stare', 'aster',
			'tares', 'angel',
			'trade', 'angle', 'rated',
			'apple', 'rates'
		];
		const output = [
			['angel', 'angle'],
			['aster','rates','stare','tares', 'tears'],
			['rated', 'trade']
		];
		assert.deepEqual(anagram(input), output);
	});
	QUnit.test('Функция работает правильно при пустом списке строк', function (assert) {
		const input = [];
		const output = [];
		assert.deepEqual(anagram(input), output);
	});
	QUnit.test('Функция работает правильно со словами разной длины', function (assert) {
		const input = [
			'a', 'ab', 'abc', 'abcd', 'abcde'
		];
		const output = [];
		assert.deepEqual(anagram(input), output);
	});
	
	QUnit.test('Функция работает правильно при похожих английских и русских буквах', function (assert) {
		const input = ['a', 'а', 'c', 'с'];
		const output = [];
		assert.deepEqual(anagram(input), output);
	});
	QUnit.test('Функция работает с неправильными данными', function (assert) {
		const input = 123;
		assert.throws(() => anagram(input), TypeError("parameter is not a list"), "bad parameters")
	});
	QUnit.test('Функция работает с неправильными данными', function (assert) {
		const input = ['str', 2, 'string'];
		assert.throws(() => anagram(input), TypeError("bad parameters"), "bad parameters")
	});
	QUnit.test('Функция работает с множеством', function (assert) {
		const input = {};
		assert.throws(() => anagram(input), TypeError("parameter is not a list"), "bad parameters")
	});
	

});
