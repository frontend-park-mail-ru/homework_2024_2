"use strict";

function zip(){
  let c = {}
  for (let i = 0; i < arguments.length; i++){
    for (let key in arguments[i]){
      if (!(key in c)){
        c[key] = arguments[i][key]
      }
    }
  }
  return c
}