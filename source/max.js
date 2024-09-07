'use strict';

const max = numbers => Math.max(...numbers);

function format(input, columns) {
  let output = Array(10).fill("");
  for (let j=0;j<columns;j++){
    listt=[]
    for (let i=j;i<input.length;i+=columns){
      listt.push(input[i])
      console.log(input[i],String(input[i]).length)
    }
    max_len = Math.max(String(Math.max.apply(null, listt)).length, String(Math.min.apply(null, listt)).length)
    listt.forEach((element, iter) => {listt[iter]=" ".repeat(max_len-String(element).length)+element});
    console.log("@", listt)
    listt.forEach((element, iter) => {output[iter]+=" "+" ".repeat(max_len-String(element).length)+element});
    
  }
  return output.join("\n")
}
