// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let ans;
    const st = new Set([...A]);
    const size = A.length;
    if (size === 0) return 1;
    for (let i = 1; i <= size + 1; i++) {
        if (!st.has(i)) {
            return i;
        }
    }
}

console.log(solution([]));