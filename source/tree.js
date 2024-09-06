'use strict';


function tree(a) {
    if (a < 3)
      return null;
    
    let result = "";
    let crone = "*";
    let i = 0;

    while (i < a) { 
    
      if (i === a - 1) {
        const empty = " ".repeat( (2*(a - 2)) / 2 );
        result += empty + "|" + empty + "\n";
      } else {
        let k = ( 2 * (a - 2) - i * 2 ) / 2;
        const empty = ' '.repeat(k);
        result += empty + crone + empty + '\n';
        crone = crone + "**";
      }
      i++;
    }

    return result;
  }
