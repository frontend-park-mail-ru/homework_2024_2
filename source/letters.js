function letters(str, keepFirst) {
    if (str.length === 0) return '';

    let result = [];
    let seen = new Set();
    let prevChar = null;

    if (keepFirst === undefined) {
        let charCount = {};
        for (let char of str) {
            charCount[char] = (charCount[char] || 0) + 1;
        }
        for (let char of str) {
            if (charCount[char] === 1) {
                result.push(char);
            }
        }
    }
    else if (keepFirst) {
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== prevChar && !seen.has(str[i])) {
                result.push(str[i]);
                seen.add(str[i]);
            }
            prevChar = str[i];
        }

    } else {
        let lastIndex = {};
        for (let i = 0; i < str.length; i++) {
            lastIndex[str[i]] = i;
        }
        for (let i = 0; i < str.length; i++) {
            if (i === lastIndex[str[i]] && str[i] !== prevChar) {
                result.push(str[i]);
            }
            prevChar = str[i];
        }
    }

    return result.join('');
}