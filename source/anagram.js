var anagram = function(strs){
    strs.sort();
    let mp = new Map();

    for(let str of strs) {
        let sortedStr = str.split('').sort().join('');
        if (!mp.get(sortedStr)) {
            mp.set(sortedStr, []);
        }
        let tempArr = mp.get(sortedStr);
        tempArr.push(str);
        mp.set(sortedStr, tempArr);
    }

    let ans = [];
    for(m of mp){
        if (m[1].length >= 2) {
            ans.push(m[1]);
        }
        
    }
    return ans;
}