'use strict';

const specialChars = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#39;',
};

/**
 * Checks if given value is string.
 *
 * @param {*} value - variable to check
 * @return {boolean} - returns `true` if value is string, otherwise `false`
 */
const isString = (value) => {
    return (typeof value === 'string' || value instanceof String)
}

/**
 * Finds html tag name. Expects valid html tag.
 *
 * @param {string} tag - valid html tag
 * @return {string} - name of html tag
 */
const parseTagName = (tag) => {
    if (!isString(tag)) {
        throw new TypeError(`'tag' must be a type of string, got '${typeof tag}'`);
    }

    return tag.match(/<\/?([a-z]+[\w\d]*)/)?.[1];
};

/**
 * Filters the html code, leaving only permitted html tags
 * and escaping special characters. Expects valid html code.
 *
 * @param {string} htmlText - valid html code
 * @param {string[]} permittedTags - tags need to be left
 * @return {string} - string with permitted tags
 *                    and escaped special characters
 */
const filter = (htmlText, permittedTags) => {
    if (!isString(htmlText)) {
        throw new TypeError(
            `'htmlText' must be a type of 'string', got '${typeof htmlText}'`,
        );
    }

    if (
        !Array.isArray(permittedTags) ||
        !permittedTags.every(isString)
    ) {
        throw new TypeError(
            `'permittedTags' must be a type of 'string[]', got '${typeof permittedTags}'`,
        );
    }

    let shouldSkip = false;

    return [...htmlText].reduce((acc, char, index, chars) => {
        if (shouldSkip) {
            if (char === '>') {
                shouldSkip = false;
            }

            return acc;
        }

        if (char === '<') {
            let tagEnd = chars.indexOf('>', index) + 1;
            if (tagEnd !== -1) {
                let tag = chars.slice(index, tagEnd).join('');
                let tagName = parseTagName(tag);
                if (permittedTags.includes(tagName)) {
                    acc.push(tag);
                    shouldSkip = true;
                    return acc;
                }
            }
        }

        acc.push(specialChars[char] ?? char);

        return acc;
    }, []).join('');
};

