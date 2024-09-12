'use strict';
const parseStr = (str) => {
    const res = []; 
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
                if (!isNaN(parseInt(elem))){
                    curNum = curNum === -1 ? Number(elem) : curNum * 10 + Number(elem);  
                }else{
                    throw new TypeError("Тип должен быть числовым!");
                }
        }
    }

    if (curNum !== -1) {
        res.push(String(curNum));
    }

    return res;
}

const toPolish = (str) => {
    const masStr = parseStr(str); 
    const priorities = new Map([
        ['+', 1],
        ['-', 1], 
        ['*', 2]]);
    const myStack = [];
    const answer = [];

    
    for (let val of masStr) {
        if (['+', '-', '*'].includes(val)) {
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

const solvePolish = (str) => {
    const myStack = [];

    for (let elem of str) {
        switch(elem) {
            case '+':
                myStack.push(myStack.pop() + myStack.pop());
                break;
            case '-':
                const oper1 = myStack.pop();
                const oper2 = myStack.pop();
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


const solve = (str, val) => {
    if (str === undefined || val === undefined) {
        throw new Error("str and val arguments must not be empty");
    }
    if (typeof str === "string" && typeof val === "number" ){
        return solvePolish(toPolish(str.replaceAll('x', val)));
    }else{
        throw new TypeError("argument str must be string, argument val must be int");
    }
}

