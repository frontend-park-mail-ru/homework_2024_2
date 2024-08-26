'use strict';

function anagram(input) {
    const arrayMap = {};

    input.forEach((value) => {
        const letters = value.split('').sort();

        if (!(letters in arrayMap)) {
            arrayMap[letters] = [];
        }

        arrayMap[letters].push(value);
    });

    return Object.values(arrayMap).filter(value => value.length > 1).map(value => value.sort()).sort();
}
