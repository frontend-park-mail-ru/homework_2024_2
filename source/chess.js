const chess = size => {
    const numericSize = Number(size);
    
    if (isNaN(numericSize) || !Number.isInteger(numericSize)) {
        throw new Error('Size must be an integer.');
    }

    if (size <= 1) return null;
    

    const board = Array.from({ length: size }, (_, line) =>
        Array.from({ length: size }, (_, row) =>
            (line + row) % 2 === 0 ? '*' : ' '
        ).join('')
    ).join('\n');

    return board + '\n';
};
