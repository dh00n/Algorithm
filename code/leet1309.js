/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    const size = s.length;
    const map = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
                'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let rans = ''
    for(let i = size - 1; i >= 0; i--){
        if (s[i] === '#'){
            const num = Number(s[i-2] + s[i-1]);
            i -= 2;
            rans += map[num - 1];
        } else{
            const num = Number(s[i]);
            rans += map[num - 1];
        }
    }
    let ans = '';
    for(let i = rans.length - 1; i >= 0; i--){
        ans += rans[i];
    }
    return ans;
};