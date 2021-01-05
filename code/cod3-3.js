// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
const arr = [];

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    arr[0] = A[0];
    for (let i = 1; i < A.length; i++) {
        arr[i] = arr[i - 1] + A[i];
    }

    const sum = (a, b) => {
        if (a === b) return A[a];
        if (a === 0) return arr[b];
        return Number(arr[b] - arr[a - 1]);
    }

    const diff = [];

    for (let i = 0; i <= A.length - 2; i++) {
        const dif = sum(0, i) - sum(i + 1, A.length - 1);
        dif < 0 ? diff.push(-1 * dif) : diff.push(dif);
    }
    diff.sort((a, b) => a - b);
    return(diff[0]);
}

console.log(solution([3, 1, 2, 3, 4]));