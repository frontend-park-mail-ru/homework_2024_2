'use strict';

function ParseStr (str) {

    let res = []; 

    let curNum = -1;

    for (let elem of str) {

        switch (elem) {
            case '+':
            case '-':
            case '*':
            case '(':
            case ')':
                if (curNum != -1) {
                    res.push(String(curNum));
                }
                curNum = -1;
                res.push(elem);
                break;
            case ' ':
                break;
            default:
                curNum = curNum == -1 ? Number(elem) : curNum * 10 + Number(elem)
            
        }
    }
    if (curNum != -1) {
        res.push(String(curNum));
    }
    return res;
}

function toPolish (str) {

    let masStr = ParseStr(str);
    
    let priorities = new Map([
        ['+', 1],
        ['-', 1], 
        ['*', 2]]);

    let myStack = [];

    let answer = [];

    
    for (let val of masStr) {
        if (val === '+' || val === '-' || val === '*') {
            while (priorities.get(val) <= priorities.get(myStack.at(-1))){
                answer.push(myStack.pop());
            }
            myStack.push(val);
        }else if (val === '('){
            myStack.push(val);
        }else if (val === ')'){
            while (myStack.at(-1) !== '('){
                answer.push(myStack.pop());
            }
            myStack.pop();
        }else if (val !== ' '){
            answer.push(val);
        }
    }

    while(myStack.length !== 0){
        answer.push(myStack.pop());
    }
    
    return answer;
}

function solvePolish(str) {

    let myStack = [];

    for (let elem of str) {
        switch(elem) {
            case '+':
                myStack.push(myStack.pop() + myStack.pop());
                break;
            case '-':
                let oper1 = myStack.pop();
                let oper2 = myStack.pop();
                myStack.push(oper2 - oper1);
                break;
            case '*':
                myStack.push(myStack.pop() * myStack.pop());
                break;
            default:
                myStack.push(Number(elem));
                break;
        }
    }
    
    return myStack.at(-1);

}


function solve (str, val) {
    return solvePolish(toPolish(str.replaceAll('x', String(val))));
}




