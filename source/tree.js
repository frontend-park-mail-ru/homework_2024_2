"use strict";

const MIN_HEIGHT = 3;
const SPACE_CHAR = " ";
const LEAF_CHAR = "*";
const TRUNK_CHAR = "|";
const ENDL = "\n";
const SPACE_REMOVED_PER_TRUNK = 3;
const MIRROR_COEF = 2;

/**
 *
 * @param {number} inHeight - The tree height
 * @returns {string} The string with ASCII tree
 */
const tree = (inHeight) => {
    const height = Number(inHeight);
    if (!isFinite(height) || height < MIN_HEIGHT) {
        return null;
    }

    const calcSpacesCount = (charCount) => {
        return height - (SPACE_REMOVED_PER_TRUNK + charCount) / MIRROR_COEF;
    };

    const getTreeLine = (char, charCount) => {
        const spaces = SPACE_CHAR.repeat(calcSpacesCount(charCount));
        const chars = char.repeat(charCount);
        return spaces + chars + spaces + ENDL;
    };

    let result = "";
    for (let i = 0; i < height - 1; i++) {
        result += getTreeLine(LEAF_CHAR, i * MIRROR_COEF + 1);
    }
    result += getTreeLine(TRUNK_CHAR, 1);

    return result;
};
