'use strict';

const allTags = /&lt;\/?([a-zA-Z0-9]+)(.*?)&gt;/g;

/**
 * Фильтрует HTML-строку, экранируя все теги, кроме разрешённых.
 * 
 * @param {string} html - Входная строка, содержащая HTML.
 * @param {string[]} allowedTags - Массив строк с именами разрешённых HTML-тегов.
 * @returns {string} - Отфильтрованная строка, где разрешённые теги остаются в оригинальном виде, а остальные теги экранируются.
 * 
 * @example
 * const html = '<b>Hello</b> <i>world</i> <script>alert("XSS")</script>';
 * const filtered = filter(html, ['b', 'i']);
 * console.log(filtered);
 * // Результат: <b>Hello</b> <i>world</i> &lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;
 */

const filter = (html, allowedTags) => {
	if (typeof html !== 'string' && !(html instanceof String)) {
		throw new TypeError('HTML должен быть строкой');
	}

	if (!Array.isArray(allowedTags) || !allowedTags.every(tag => typeof tag === 'string')) {
		throw new TypeError('allowedTags должен быть массивом строк');
	}

	const replacedHtml = html.replace(/&/g, '&amp;')
				.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;')
				.replace(/"/g, '&quot;')
				.replace(/'/g, '&#39;');



	return replacedHtml.replace(allTags, (findTag, tagName) => {
		tagName = tagName.toLowerCase();

		if (allowedTags.includes(tagName)) {
			const originalTag = findTag.replace(/&lt;/g, '<')
						.replace(/&gt;/g, '>')
						.replace(/&quot;/g, '"')
						.replace(/&#39;/g, '\'')
						.replace(/&amp;/g, '&');
			
			return originalTag;
		}
		return findTag;
	});
};
