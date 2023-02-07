"use strict";

const tree = (inHeight) => {
    const height = Number(inHeight);
    if (height === NaN || height < 3) {
        return null;
    }

    const getTreeLine = (char, charCount) => {
        const spaces = Array(height - charCount).join(" ");
        return spaces + Array(charCount * 2).join(char) + spaces + "\n";
    };

    let result = "";
    for (let i = 1; i < height; i++) {
        result += getTreeLine("*", i);
        //  result += Array(height - i).join(" ") + Array(i * 2).join("*") + Array(height - i).join(" ") + "\n";
    }
    result += getTreeLine("|", 1);
    // result += Array(height - 1).join(" ") + Array(2).join("|") + Array(height - 1).join(" ") + "\n";

    return result;
};
