'use strict';

QUnit.module('Тестируем функцию anagram', function () {
 QUnit.test('Обработка русскоязычных строк', function (assert) {
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

 QUnit.test('Обработка англоязычных строк', function (assert) {
  const input = [
   'listen', 'silent', 'enlist',
   'evil', 'vile', 'live',
   'rat', 'tar', 'art'
  ];

  const output = [
   [ 'art', 'rat', 'tar', ],
   [ 'enlist', 'listen', 'silent' ],
   [ 'evil', 'live', 'vile' ]
  ];

  assert.deepEqual(anagram(input), output);
 });

 QUnit.test('Обработка одинаковых строк', function (assert) {
  const input = [
   'aaa', 'aaa', 'aaa',
   'evil', 'lel', 'live',
   'rat', 'tar', 'music'
  ];

  const output = [
   [ 'aaa', 'aaa', 'aaa' ],
   [ 'evil', 'live' ],
   [ 'rat', 'tar', ]
  ];

  assert.deepEqual(anagram(input), output);
 });

 QUnit.test('Обработка пустых строк', function (assert) {
  const input = [
   '', '', '',
   'evil', 'lel', 'live',
   'rat', 'tar', 'music'
  ];

  const output = [
   [ '', '', '' ],
   [ 'evil', 'live' ],
   [ 'rat', 'tar', ]
  ];

  assert.deepEqual(anagram(input), output);
 });
});