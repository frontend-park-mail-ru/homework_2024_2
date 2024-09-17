'use strict';

/**
 * Сортирует буквы в словах, а затем и сами слова в предложении по алфавиту. Возвращает слова с первой заглавной буквой.
 * @param {string|String} sentence - Строка или объект строки, содержащий предложение для сортировки.
 * @returns {string} Отсортированное предложение.
 * @throws {TypeError} Если на вход передан не строковый тип данных.
 */
const sort = (sentence) => {
    if (typeof sentence.valueOf() !== 'string') {
        throw new TypeError('Ошибка: Ожидается строка.');
    }

    return sentence.valueOf().split(' ')
        .map(word => {
            const sortedWord = word.toLowerCase().split('').sort((a, b) => a.localeCompare(b, 'ru')).join('');
            return sortedWord.charAt(0).toUpperCase() + sortedWord.slice(1);
        })
        .sort((a, b) => a.localeCompare(b, 'ru'))
        .join(' ');
};
