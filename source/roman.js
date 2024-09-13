'use strict'; //включаем строгий режим, чтобы не думать о косяках старого js, выскакивающих в режиме обратной совместимости

/**
 * @param {number} inputNumber - Десятичное число, которое необходимо перевести в римскую систему счисления.
 * @throws {TypeError} - Введено некорректное число inputNumber
 * @returns {string} - Число в римской системе счисления.
 *
 * @also
 *
 * @param {string} inputNumber - Десятичное число в виде строки, которое необходимо перевести в римскую систему счисления.
 * @throws {TypeError} - Введено некорректное число inputNumber
 * @returns {string} - Число в римской системе счисления.
 *
 * @also
 *
 * @param {string} inputNumber - Число в римской системе счисления в виде строки, которое необходимо перевести в десятичную систему счисления.
 * @throws {TypeError} - Введено некорректное число inputNumber
 * @returns {number} - Число в десятичной системе счисления.
 */
const roman = (inputNumber) => {

    if ( !(+inputNumber) && typeof inputNumber !== 'string' && !(inputNumber instanceof String) ){
        return TypeError(`Ожидался тип number | string, получено ${isNaN(inputNumber) ? NaN : typeof inputNumber}`);
    }

    if (+inputNumber){ //Проверяем, что на входе число

        if (inputNumber % 1 !== 0 || inputNumber <= 0){
            return TypeError('Введено нецелое число или число меньше 1');
        }

        //Переводим число из десятичной системы счисления в римскую
        const romanNumbers = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
        const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        
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

    //Переводим число из десятичной системы счисления в римскую

    inputNumber = inputNumber.toLowerCase();

    const map = { 'i': 1, 'v':5, 'x':10, 'l':50, 'c':100, 'd':500, 'm':1000 };

    let answer = 0;
    const n = inputNumber.length;

    for (let i = 0; i < n; i++) {
        if('mdclxvi'.indexOf(inputNumber[i]) === -1){ // Проверяем, что все символы - это римские цифры
            return TypeError('Введено некорректное римское число. Допустимые символы: I, V, X, L, C, D, M');
        }
        if( map[inputNumber[i]] < map[inputNumber[i+1]] ){
            answer -= map[inputNumber[i]];
        } else{
            answer += map[inputNumber[i]];
        }
    }
    return answer;
};

