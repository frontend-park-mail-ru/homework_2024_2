const chess = size => {
    size = Number(size);
    if (size < 2 || isNaN(size)) {
        return null;
    }
    let first = '';
    let second = '';
    for (let i = 0; i < size; i++) {
        if (i % 2 == 0) {
            first += '*';
            second += ' ';
        } else {
            first += ' ';
            second += '*';
        }
    }
    first += '\n';
    second += '\n';

    let result = '';
    for (let i = 0; i < size; i++) {
        if (i % 2 === 0) {
            result += first;
        } else {
            result += second;
        }
    }
    return result;
}