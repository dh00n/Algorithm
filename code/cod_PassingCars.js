// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
const dp = [];

const getCnt = (a, b) => {
    if (a === 0) {
        return dp[b];
    } else {
        return dp[b] - dp[a - 1];
    }
}

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let oneCnt = 0;

    for (let i = 0; i < A.length; i++) {
        if (A[i] === 1) {
            oneCnt++;
            dp[i] = oneCnt;
        } else {
            dp[i] = oneCnt;
        }
    }

    let ans = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] === 0) {
            ans += getCnt(i + 1, A.length - 1);
        }
        if (ans > 1000000000) return -1;
    }
    return ans;
}