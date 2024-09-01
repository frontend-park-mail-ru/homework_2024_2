"use strict";

const specialChars = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

/**
 * Finds html tag name. Expects valid html tag.
 *
 * @param {string} tag - valid html tag
 * @return {string} - name of html tag
 */
const parseTagName = (tag) => {
  if (typeof tag !== "string") {
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
  if (typeof htmlText !== "string") {
    throw new TypeError(
      `'htmlText' must be a type of 'string', got '${typeof htmlText}'`,
    );
  }

  if (!Array.isArray(permittedTags)) {
    throw new TypeError(
      `'permittedTags' must be a type of 'string[]', got '${typeof permittedTags}'`,
    );
  }

  let chars = [...htmlText];

  let i = 0;
  while (i < chars.length) {
    if (chars[i] === "<") {
      let tagEnd = chars.indexOf(">", i) + 1;
      if (tagEnd !== -1) {
        let tag = chars.slice(i, tagEnd).join("");
        let tagName = parseTagName(tag);
        if (permittedTags.includes(tagName)) {
          i = tagEnd;
          continue;
        }
      }
    }

    chars[i] = specialChars[chars[i]] ?? chars[i];
    ++i;
  }

  return chars.join("");
};
