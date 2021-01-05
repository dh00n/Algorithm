// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const arr = [];
    for (let i = 1; i <= X; i++) {
        arr.push(i);
    }
    const st = new Set(arr);
    for (let i = 0; i < A.length; i++) {
        if (st.has(A[i])) {
            st.delete(A[i]);
            if (st.size === 0) {
                return i;
            }
        }
    }
    return -1;

}

console.log(solution(1, [1]));
