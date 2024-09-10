'use strict';

function sort(sentence) {
    const words = sentence.split(' ');

    let sortedWords = words.map(word => {
        // Необходимо переключить на ру локаль, чтобы не было путаницы с e/ё
        let sortedWord = word.toLowerCase().split('').sort((a, b) => a.localeCompare(b, 'ru')).join('');
        return sortedWord.charAt(0).toUpperCase() + sortedWord.slice(1);
    });

    sortedWords.sort((a, b) => a.localeCompare(b, 'ru'));
    return sortedWords.join(' ');
}
