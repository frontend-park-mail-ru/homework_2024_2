"use strict";

const TAG_PATTERNS = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;

const SPECIAL_CHARS = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	'"': "&quot;",
	"'": "&#39;",
};
const changeHTML = (text) => text.replace(/[&<>"']/g, (char) => SPECIAL_CHARS[char]);

// Основная функция фильтрации
const filter = (input, allowedTags) => {
	// Приводим input к строке или пустой строке, если input = null или undefined
	input = typeof input === "string" ? input : input == null ? "" : String(input);

	let result = "";
	let lastIndex = 0;

	input.replace(TAG_PATTERNS, (match, tagName, currentTag) => {
		// Добавляем текст между последним индексом и текущим тегом
		result += changeHTML(input.slice(lastIndex, currentTag));
		lastIndex = currentTag + match.length;

		//экранируем только запрещенные теги
		result += allowedTags.includes(tagName.toLowerCase()) ? match : changeHTML(match);
		return match;
	});

	// Добавляем оставшийся текст после последнего тега
	result += changeHTML(input.slice(lastIndex));

	return result;
};
