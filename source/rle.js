function rle(str) {
    if (!str) return '';

    let res = [];
    let cnt = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            cnt++;
        } else {
            res.push(str[i] + (cnt > 1 ? cnt : ''));
            cnt = 1;
        }
    }

    return res.join('');
}

// const rle = str => str.replace(/(.)\1*/g, (match, char) => char + (match.length > 1 ? match.length : ''));