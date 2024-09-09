'use strict';

function tree(a) {
    if ( !( (typeof a === 'number') || (typeof a == 'string')) )
      return null;
    
    if ( isNaN(a) ) {
      return null;
    }

    if (a < 3)
      return null;
    
    let result = '';
    let crone = '*';
    let i = 0;

    while (i < a - 1) { 
      result += generateCrone(i, a);
      crone = `${crone}**`
      
      i++;
    }

    const empty = ` `.repeat( (2*(a - 2)) / 2 );
    result += `${empty}|${empty}\n`; 

    return result;
  }

function generateCrone(layer, high) {
  const empty = " ".repeat( ( 2 * (high - 2) - layer * 2 ) / 2 );
  return `${empty}*${"*".repeat(2 * layer)}${empty}\n`
}