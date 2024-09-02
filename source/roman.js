//Ховен Ольга, WEB-22
// Вариант 3
'use strict'
function roman (num) {
    const romRadix = [
        {value: 1000, symbol: 'M'},
        {value: 900, symbol: 'CM' },
        {value: 500, symbol: 'D'},
        {value: 400, symbol: 'CD' },
        {value: 100, symbol: 'C'},
        {value: 90, symbol: 'XC' },
        {value: 50, symbol: 'L'},
        {value: 40, symbol: 'XL' },
        {value: 10, symbol: 'X'},
        {value: 9, symbol: 'IX' },
        {value: 5, symbol: 'V'},
        {value: 4, symbol: 'IV' },
        {value: 1, symbol: 'I'}         
    ];
   let result = "";
   if(typeof num === 'string'){
    num=parseInt(num, 10)
   } 
   
   if(Number.isInteger(num)) {
    for(let i=0; i<romRadix.length; i++){
        while(num>=romRadix[i].value){
            num-=romRadix[i].value;
            result+=romRadix[i].symbol;
        }
    }
   }
   return result;    
}

function arabic (roman){
    const arabicRadix = {
        I: 1,
        V: 5, 
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let num = 0;
    let prev = 0;
    
    for(let i = roman.length-1; i>=0; i--){
        let symbol = roman[i].toUpperCase();
        let value = arabicRadix[symbol];
        
        if(value<prev){
            num-=value;
        } else {
            num+=value;
        }
        prev=value;
    } 
    return num;
}

