// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    const stack = [];
    const m = new Map();
    m.set(')', '(');
    m.set('}', '{');
    m.set(']', '[');
    
    for (let i = 0; i < S.length; i++) {
        if (S[i] === '(' || S[i] === '{' || S[i] === '[') {
            stack.push(S[i]);
        } else {
            const temp = stack.pop();
            if (temp !== m.get(S[i])){
                return 0;
            }
        }
    }
    if (stack.length !== 0) return 0;
    return 1;
}
