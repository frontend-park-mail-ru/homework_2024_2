'use strict';

const letters = (str, flag) => {
    str = String(str);
    let repeatingLetters = '', uniqueLetters = '';
    for(let i = 0; i < str.length; i++){
        if(!uniqueLetters.includes(str[i])){
            uniqueLetters += str[i];
        } else {
            if(flag == false){
                uniqueLetters = uniqueLetters.replace(str[i], '');
                uniqueLetters += str[i];
            }
            repeatingLetters += str[i];
        }
    }
    if(flag == undefined){
        for(let i = 0; i < repeatingLetters.length; i++){
            uniqueLetters = uniqueLetters.replaceAll(repeatingLetters[i], '');
        }
        return uniqueLetters;
    }
    return uniqueLetters;
}

