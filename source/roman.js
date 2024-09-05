'use strict';

/**
 * @param {number} inputNumber - Десятичное число, которое необходимо перевести в римскую систему счисления.
 * @returns {string} - Число в римской системе счисления.
 *
 * @also
 *
 * @param {string} inputNumber - Десятичное число в виде строки, которое необходимо перевести в римскую систему счисления.
 * @returns {string} - Число в римской системе счисления.
 *
 * @also
 *
 * @param {string} inputNumber - Число в римской системе счисления в виде строки, которое необходимо перевести в десятичную систему счисления.
 * @returns {number} - Число в десятичной системе счисления.
 */
const roman = function (inputNumber) {
    if(!inputNumber){ //Проверяем на NaN, null, undefined и т.д.
        return null;
    }
    if (inputNumber == parseInt(inputNumber, 10) && inputNumber>0){ //Проверяем, что на входе корректное число
        //Переводим число из десятичной системы счисления в римскую
        let romanNumbers = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
        let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        
        let i = 0;
        let answer = "";

        while(inputNumber>0){
            if(inputNumber >= numbers[i]){
                answer += romanNumbers[i];
                inputNumber -= numbers[i];
            }else{
                i++;
            }
        }

        return answer;

    }

    if(typeof inputNumber !== 'string'){ // Проверяем, что на входе строка
        return null;
    }

    //Переводим число из десятичной системы счисления в римскую

    inputNumber = inputNumber.toLowerCase();

    let map = { 'i': 1, 'v':5, 'x':10, 'l':50, 'c':100, 'd':500, 'm':1000 };

    let answer = 0;
    let n = inputNumber.length;
    for (let i = 0; i < n; i++) {
        if("mdclxvi".indexOf(inputNumber[i]) == -1){ // Проверяем, что все символы - это римские цифры
            return null;
        }
        if(map[inputNumber[i]]<map[inputNumber[i+1]]){
            answer -= map[inputNumber[i]];
        }else{
            answer += map[inputNumber[i]];
        }
    }
    return answer;
};
