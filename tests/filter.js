'use strict';

QUnit.module('Проверка работы функции filter', function () {
	QUnit.test('filter экранирует символы в обычном тексте', function (assert) {
		const input = '- "42!", сказала Машина. Это и был главный ответ на Вопрос жизни, вселенной & всего такого...';

		const output = filter(input, [ 'strong', 'em' ]);

		const expected = '- &quot;42!&quot;, сказала Машина. Это и был главный ответ на Вопрос жизни, вселенной &amp; всего такого...';

		assert.strictEqual(output, expected);
	});

	QUnit.test('filter не экранирует валидные html-тэги', function (assert) {
		const input = '<strong>Hello, <em>World!</em></strong> 1 + 2 < 4!';

		const output = filter(input, [ 'strong', 'em' ]);

		const expected = '<strong>Hello, <em>World!</em></strong> 1 + 2 &lt; 4!';

		assert.strictEqual(output, expected);
	});

	QUnit.test('filter экранирует XSS', function (assert) {
		assert.strictEqual(filter(`<script>alert('1');</script>`, [ 'strong', 'em' ]), '&lt;script&gt;alert(&#39;1&#39;);&lt;/script&gt;');
		assert.strictEqual(filter(`<img src="bad" onerror="alert('1');">`, [ 'strong', 'em' ]), '&lt;img src=&quot;bad&quot; onerror=&quot;alert(&#39;1&#39;);&quot;&gt;');
	});

	QUnit.test('filter корректно обрабатывает пустую строку', function (assert) {
		assert.strictEqual(filter('', []), '');
		assert.strictEqual(filter('', ['h1', 'p']), '');
  });

	QUnit.test(
		'filter корректно обрабатывает строку без тегов',
		function (assert) {
			assert.strictEqual(
				filter('Lorem ipsum dolor sit amet.', []),
				'Lorem ipsum dolor sit amet.',
			);
			assert.strictEqual(
				filter('Lorem ipsum dolor sit amet.', ['strong']),
				'Lorem ipsum dolor sit amet.',
			);
		},
	);

	QUnit.test(
		'filter корректно обрабатывает символы > и < вне тегов',
		function (assert) {
			assert.strictEqual(
				filter('1 < 2 & 3 > 2', ['strong', 'em']),
				'1 &lt; 2 &amp; 3 &gt; 2',
			);
		},
	);

	QUnit.test(
		'filter корректно работает с разрешенными и неразрешенными самозакрывающимися тегами',
		function (assert) {
			const input = '<br/><hr /><strong>Lorem ipsum</strong><img src="image.jpg" />';
			
			const output = filter(input, ['strong', 'br', 'hr']);
			
			const expected = '<br/><hr /><strong>Lorem ipsum</strong>&lt;img src=&quot;image.jpg&quot; /&gt;';

			assert.strictEqual(output, expected);
		},
	);

	QUnit.test(
		'filter кидает исключение \'TypeError\', если параметр \'htmlText\' имеет тип не \'string\'',
		function (assert) {
			assert.throws(function () {
				filter(10, ['string', 'br']);
			}, TypeError);
		},
	);

	QUnit.test(
		'filter кидает исключение \'TypeError\', если параметр \'permittedTags\' имеет тип не \'string[]\'',
		function (assert) {
			assert.throws(function () {
				filter('<strong>Text</strong>', 10);
			}, TypeError);
			assert.throws(function () {
				filter('<strong>Text</strong>', ['strong', 10]);
			}, TypeError);
		},
	);
});

