function filter(input, allowedTags) {
    const regExp = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;

    const specialChars = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    };

    // Функция экранирует обычный текст
    function changeHTML(text) {
        return text.replace(/[&<>"']/g, function (char) {
            return specialChars[char];
        });
    }

    let result = '';
    let lastIndex = 0;

    input.replace(regExp, function (match, tagName, currentTag) {
        // Добавляем текст между последним индексом и текущим тегом
        result += changeHTML(input.slice(lastIndex, currentTag));
        lastIndex = currentTag + match.length;


        //экранируем только запрещенные теги
        if (allowedTags.includes(tagName.toLowerCase())) {
            result += match;
        } else {
            result += changeHTML(match);
        }
        return match;
    });

    // Добавляем оставшийся текст после последнего тега
    result += changeHTML(input.slice(lastIndex));

    return result;
}
