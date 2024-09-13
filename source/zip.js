'use strict';

/*
 * возвращает объект, содержащий все поля введенных объектов 
 * 
 * @param {Object[]} objects - массив объектов, которые надо "сжать"
 * @returns {Object} - Объект, содержащий все поля введенных
 * @example
 * 
 * zip({name: "nick"}, {age: 19});
 * // =>
 *{
 *  name: "nick"
 *  age: 19
 *}
 */


function zip(...args){
  let result = {};
  args.forEach((item) => {
    for (let key in item){
      if (!(key in result)){
        result[key] = item[key];
      }
    }
  });
  return result;
}




