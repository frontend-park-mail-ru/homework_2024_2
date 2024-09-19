"use strict";

/**
 * Regular expression to match HTML tags.
 * @type {RegExp}
 */
const TAG_PATTERNS = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;

/**
 * A map of special characters to their HTML entity equivalents.
 * @type {Object.<string, string>}
 */
const SPECIAL_CHARS = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	'"': "&quot;",
	"'": "&#39;",
};

/**
 * Escapes special HTML characters in a given string.
 *
 * @param {string} text - The input text that may contain special characters.
 * @returns {string} - The escaped HTML string.
 */
const changeHTML = (text) => text.replace(/[&<>"']/g, (char) => SPECIAL_CHARS[char]);

/**
 * Filters the input string by escaping HTML tags not included in the allowedTags list.
 *
 * @param {string} input - The input string that may contain HTML tags.
 * @param {string[]} allowedTags - An array of allowed tag names. Tags not in this list will be escaped.
 * @returns {string} - The filtered string with only allowed tags.
 */
const filter = (input, allowedTags) => {
    input = typeof input === "string"
        ? input 
        : input == null 
            ? "" 
            : String(input);

	let result = "";
	let lastIndex = 0;

	input.replace(TAG_PATTERNS, (match, tagName, currentTag) => {
		result += changeHTML(input.slice(lastIndex, currentTag));
		lastIndex = currentTag + match.length;

		result += allowedTags.includes(tagName.toLowerCase()) ? match : changeHTML(match);
		return match;
	});

	result += changeHTML(input.slice(lastIndex));

	return result;
};
