// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const dp = [];
    let max = A[A.length - 1];
    for (let i = A.length - 1; i >= 0; i--) {
        if (A[i] > max) {
            dp[i] = A[i];
            max = A[i];
        } else dp[i] = max;
    }

    let ans = 0;
    for (let i = 0; i < A.length - 1; i++) {
        const diff = dp[i + 1] - A[i];
        if (ans < diff) {
            ans = diff;
        }
    }
    return ans;
}

