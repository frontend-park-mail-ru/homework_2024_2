'use strict';


function toPolish (str) {

    let masStr = str.split("");

    let priorities = new Map([
        ['+', 1],
        ['-', 1], 
        ['*', 2]]);

    let myStack = [];

    let answer = "";

    for (let val of masStr) {
        if (val === '+' || val === '-' || val === '*') {
            while (priorities.get(val) <= priorities.get(myStack.at(-1))){
                answer += myStack.pop();
            }
            myStack.push(val);
        }else if (val === '('){
            myStack.push(val);
        }else if (val === ')'){
            while (myStack.at(-1) !== '('){
                answer += myStack.pop();
            }
            myStack.pop();
        }else if (val !== ' '){
            answer += val;
        }
    }

    while(myStack.length !== 0){
        answer += myStack.pop();
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


