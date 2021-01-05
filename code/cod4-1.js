// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const counter = new Array(N).fill(0);
    let max = 0;
    let prev = A[0] - 1;
    A.forEach((element, ind) => {
        if (element === N + 1) {
            max > 0 ? counter.fill(max) : counter.fill(0);
        } else if (element >= 1 && element <= N) {
            counter[element - 1]++;
            if (max < counter[element - 1]) max = counter[element - 1];
        }
    });
    console.log(max);
    return counter;
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));