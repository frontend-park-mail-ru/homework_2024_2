'use strict';

/**
 * Сортирует буквы в словах, а затем и сами слова в предложении по алфавиту. Возвращает слова с первой заглавной буквой.
 * @param {string} sentence - Строка, содержащая предложение для сортировки.
 * @returns {string} Отсортированное предложение.
 * @throws {TypeError} Если на вход передан не строковый тип данных.
 */
const sort = (sentence) => {
    if (typeof sentence !== 'string') {
        throw new TypeError('Ошибка: Ожидается строка.');
    }

    const words = sentence.split(' ');
    let sortedWords = words.map(word => {
        let sortedWord = word.toLowerCase().split('').sort((a, b) => a.localeCompare(b, 'ru')).join('');
        return sortedWord.charAt(0).toUpperCase() + sortedWord.slice(1);
    });

    sortedWords.sort((a, b) => a.localeCompare(b, 'ru'));
    return sortedWords.join(' ');
};
