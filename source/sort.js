// Земляков Алексей
'use strict';

const collator = new Intl.Collator()

function sortSentence(sentence) {
    let str = sentence.toLowerCase()
    let words = sortLetterInWords(str.split(" "))
    words.sort(collator.compare)
    return words.join(" ")
}

function sortLetterInWords(words){
    for (let i in words) {
        let letterArray = words[i].split("")
        letterArray.sort(collator.compare)
        if (letterArray.length > 0) {
            words[i] = letterArray[0].toUpperCase() + letterArray.join("").slice(1)
        }
    }
    return words
}

const sort = sentence => sortSentence(sentence)