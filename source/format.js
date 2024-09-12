'use strict';

const format = (input, columns) => {
    if (columns < 1) {
        throw new Error('Columns amount must be a positive integer');
    }
    if (columns > input.length) {
        throw new Error('Columns amount must be greater than array size');
    }

    let widths = new Array(columns);
    for (let i = 0; i < columns; i++) {
        widths[i] = Math.max(...input.filter((_, j) => j % columns === i % columns)
            .map(num => num.toString().length));
    }

    let output = '';
    for (let i = 0; i < input.length; i++) {
        if (typeof input[i] !== 'number') {
            throw new TypeError('Input data must contain integers only')
        }

        output += input[i].toString().padStart(widths[i % columns]);
        if (i === input.length - 1) {
            break;
        }

        if (i % columns === columns - 1) {
            output += '\n';
        } else {
            output += ' ';
        }
    }

    return output;
}
