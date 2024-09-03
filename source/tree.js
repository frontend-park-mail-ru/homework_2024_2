'use strict';

const MIN_TREE_LAYERS_COUNT = 3;
const STARS_PER_LINE_INCREM_FACTOR = 2;

/**
 * Возвращает ASCII-ёлочку заданной высоты, состоящую из звёздочек
 * 
 * @param {number} height 
 * 
 * @returns {string} ASCII-ёлочка из звёздочек 
 */
function tree(height) {
    if (typeof height !== "number" && typeof height !== "string" ||
        height < MIN_TREE_LAYERS_COUNT) {
        throw new Error("Incorrect argument given!");
    }

    let resultTree = "";
    let width = (height - 1) * STARS_PER_LINE_INCREM_FACTOR - 1;
    let center = Math.floor(width / 2);

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (i == height - 1) {
                if (j == center) {
                    resultTree += "|";
                }
                else {
                    resultTree += " ";
                }
            }
            else {
                if (center - i <= j && j <= center + i) {
                    resultTree += "*";
                }
                else {
                    resultTree += " ";
                }
            }
        }
        resultTree += "\n";
    }

    return resultTree;
}
