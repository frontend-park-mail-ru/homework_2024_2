'use strict';

let rle = (str) => {
    if ( str == undefined || typeof(str) != "string") {
        return null;
    }

    if (str.length <= 1) {
        return str;
    }

    let char = str[0];
    let strNew = "";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (char == str[i]) {
            count++;
        } else {
            strNew += char + ((count === 1) ? "" : count);
            char = str[i];
            count = 1;
        }

    }
    strNew += char + ((count === 1) ? "" : count);
    return strNew;
}
