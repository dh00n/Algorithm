// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    const temp = (Y - X) % D;
    if (temp === 0) {
        return Math.floor((Y - X) / D);
    } else {
        return Math.floor((Y - X) / D) + 1;
    }
}

console.log(solution(10, 85, 30));