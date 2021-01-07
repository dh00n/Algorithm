// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const mp = new Map();
    let maxCnt = 0;
    let maxNum;
    A.forEach(v => {
        const temp = mp.get(v);
        if (temp !== undefined) {
            mp.set(v, temp + 1);
            if (maxCnt < temp + 1) {
                maxCnt = temp + 1;
                maxNum = v;
            }
        } else if (temp === undefined) {
            mp.set(v, 1);
            if (maxCnt < 1) {
                maxCnt = 1;
                maxNum = v;
            }
        }
    })
    if (maxCnt <= A.length / 2) return -1;
    const ind = A.findIndex(v => v === maxNum);
    return ind;
}
