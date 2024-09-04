'use strict';

function tree(a) {
    // alert( 'Всем привет!' );
    if (a  < 3){
        return null;
    } else {
        var result = "";
        var crone = "*";
        let i = 0;

        while (i < a) { // выводит 0, затем 1, затем 2
        // alert( i );
        
        if (i == a - 1) {
            var empty = " ".repeat((2*(a - 2)) / 2);
            result = result + empty + "|" + empty + "\n";
        } else {
            let k = (2*(a - 2) - i * 2) / 2;
            var empty = ' '.repeat(k);
            result = result + empty + crone + empty + '\n';
            crone = crone + "**";
        }
        i++;
        }

        return result;

    }
  }
  
// const tree = nill;