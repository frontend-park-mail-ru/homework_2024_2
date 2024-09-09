'use strict';

function format(input, columns) {
    if (columns < 1) {
        return "Columns amount must be a positive integer"
    }
    if (columns > input.length) {
        return "Columns amount must be greater than array size"
    }

    let output = '';
    for (let i = 0; i < input.length; i++) {
        if (typeof (input[i]) != "number") {
            return "Input data must contain integers only"
        }

        const currColumn = input.filter((_, j) => j % columns === i % columns);
        const currWidth = Math.max(...currColumn.map(num => num.toString().length));

        if (i % columns === columns - 1 && i !== input.length - 1) {
            output += input[i].toString().padStart(currWidth) + '\n'
        } else if (i !== input.length - 1) {
            output += input[i].toString().padStart(currWidth) + ' '
        } else {
            output += input[i].toString().padStart(currWidth);
        }
    }

    return output;
}