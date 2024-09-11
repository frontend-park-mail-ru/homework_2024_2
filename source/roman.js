'use strict';

const DIGITS = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1};

function roman(num) {
    let res = "";
    if (/^\d+$/.test(num)) {
       res = decimalToRoman(num);
    } else if (/^[MDCLXVImdclxvi]+$/.test(num)) {
        res = romanToDecimal(num);
    } else {
        res = "Bad number format"
    }

    return res
}

function romanToDecimal(num) {
    num = num.toUpperCase();
    let result = 0;

    for (let i = 0; i < num.length; i++) {
        const firstNum = DIGITS[num[i]];
        const secNum = DIGITS[num[i + 1]] || 0;
        const thirdNum = DIGITS[num[i + 2]] || 0;

        if (secNum && thirdNum && firstNum <= secNum && secNum < thirdNum) {
            return ('Bad roman number format');
        }

        result += secNum > firstNum ? -firstNum : firstNum;
    }

    return result;
}

function decimalToRoman(num) {
    let res = "";
    for (let symb in DIGITS) {
        while (num >= DIGITS[symb]) {
            res += symb;
            num -= DIGITS[symb];
        }
    }
    return res;
}