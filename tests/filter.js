"use strict";

QUnit.module("Проверка работы функции filter", function () {
	QUnit.test("filter экранирует символы в обычном тексте", function (assert) {
		const input = '- "42!", сказала Машина. Это и был главный ответ на Вопрос жизни, вселенной & всего такого...';

		const output = filter(input, ["strong", "em"]);

		const expected = "- &quot;42!&quot;, сказала Машина. Это и был главный ответ на Вопрос жизни, вселенной &amp; всего такого...";

		assert.strictEqual(output, expected);
	});

	QUnit.test("filter не экранирует валидные html-тэги", function (assert) {
		const input = "<strong>Hello, <em>World!</em></strong> 1 + 2 < 4!";

		const output = filter(input, ["strong", "em"]);

		const expected = "<strong>Hello, <em>World!</em></strong> 1 + 2 &lt; 4!";

		assert.strictEqual(output, expected);
	});

	QUnit.test("filter экранирует XSS", function (assert) {
		assert.strictEqual(filter(`<script>alert('1');</script>`, ["strong", "em"]), "&lt;script&gt;alert(&#39;1&#39;);&lt;/script&gt;");
		assert.strictEqual(filter(`<img src="bad" onerror="alert('1');">`, ["strong", "em"]), "&lt;img src=&quot;bad&quot; onerror=&quot;alert(&#39;1&#39;);&quot;&gt;");
	});
});

QUnit.module("Дополнительные тесты для функции filter", function () {
	QUnit.test("filter правильно обрабатывает пустую строку", function (assert) {
		const input = "";
		const output = filter(input, ["strong", "em"]);
		const expected = "";
		assert.strictEqual(output, expected);
	});

	QUnit.test("filter правильно обрабатывает одиночные и закрывающие теги", function (assert) {
		const input = '<img src="image.jpg" /><br />Some text & <hr />';
		const output = filter(input, ["img", "br", "hr"]);
		const expected = '<img src="image.jpg" /><br />Some text &amp; <hr />';
		assert.strictEqual(output, expected);
	});

	QUnit.test("filter экранирует текст внутри допустимых тегов", function (assert) {
		const input = '<strong>Dangerous <em>text</em> & <script>alert("XSS")</script></strong>';
		const output = filter(input, ["strong", "em"]);
		const expected = "<strong>Dangerous <em>text</em> &amp; &lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;</strong>";
		assert.strictEqual(output, expected);
	});

	QUnit.test("filter экранирует текст с невалидными символами вне тегов", function (assert) {
		const input = "Text with < > & \" ' ";
		const output = filter(input, ["strong", "em"]);
		const expected = "Text with &lt; &gt; &amp; &quot; &#39; ";
		assert.strictEqual(output, expected);
	});

	QUnit.test("filter экранирует пустой HTML тег", function (assert) {
		const input = "<div></div>";
		const output = filter(input, ["div"]);
		const expected = "<div></div>";
		assert.strictEqual(output, expected);
	});

	QUnit.test("filter экранирует все специальные символы в строке", function (assert) {
		const input = "Hello & <World> \"Quotes\" 'Single Quotes'";
		const output = filter(input, []);
		const expected = "Hello &amp; &lt;World&gt; &quot;Quotes&quot; &#39;Single Quotes&#39;";
		assert.strictEqual(output, expected);
	});

	QUnit.test("filter корректно обрабатывает нестроковые значения input", function (assert) {
		let input = 12345;
		let output = filter(input, []); // allowedTags пустой массив
		let expected = "12345";
		assert.strictEqual(output, expected, "Число должно быть преобразовано в строку без изменений");

		input = null;
		output = filter(input, []);
		expected = "";
		assert.strictEqual(output, expected, "null должен быть преобразован в пустую строку");

		input = undefined;
		output = filter(input, []);
		expected = "";
		assert.strictEqual(output, expected, "undefined должен быть преобразован в пустую строку");
	});
});
