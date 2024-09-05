const chess = size => {
    if (size <= 1) return null;

    const board = Array.from({ length: size }, (_, line) =>
        Array.from({ length: size }, (_, row) =>
            (line + row) % 2 === 0 ? '*' : ' '
        ).join('')
    ).join('\n');

    return board + '\n';
};
