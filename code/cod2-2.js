// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const cnt = [];
    const st = new Set();
    A.forEach(element => {
        if (cnt[element] === undefined) cnt[element] = 1;
        else cnt[element]++;

        if (cnt[element] % 2 === 1) st.add(element);
        else st.delete(element);
    });
    let ans;
    for(let a of st){
        ans = a;
    }
    return ans;
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));