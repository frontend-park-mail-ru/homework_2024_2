'use strict';

const tree = function (count) {
    if (count < 3) {
        return null
    }

    let expected = "";
    let width = (count - 1) * 2 - 1;
    let center = Math.floor(width / 2);
    let stars = 0;

    for (let i = 0; i < count; i++) {
        for (let j = 0; j < width; j++) {
            if (i < count - 1) {
                if (center - stars <= j && j <= center + stars)
                    expected += '*';
                else
                    expected += ' ';
            }
            else {
                if (j == center)
                    expected += '|';
                else
                    expected += ' ';
            }
        }
        expected += '\n';
        stars++;
    }

    return expected;
}
