// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort((a, b) => b - a);
    const zeroInd = A.findIndex(v => v < 0);
    const zeroCnt = A.length - zeroInd;

    if (zeroCnt < 2) return A[0] * A[1] * A[2];
    else return A[0] * A[A.length - 1] * A[A.length - 2] > A[0] * A[1] * A[2] ?
        A[0] * A[A.length - 1] * A[A.length - 2] : A[0] * A[1] * A[2]

}