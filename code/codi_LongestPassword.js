function getCntOfAlpha(a) {
    const reg = /^[a-zA-Z]$/;
    let ans = 0;
    for (let i = 0; i < a.length; i++) {
        if (reg.test(a[i])) {
            ans++;
        }
    }
    return ans;
}

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    const arr = S.split(' ');
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length % 2 === 0) continue;
        var regType1 = /^[a-zA-Z0-9]*$/;
        if (regType1.test(arr[i]) && getCntOfAlpha(arr[i]) % 2 === 0 ) {
            if (max < arr[i].length) max = arr[i].length;
        }
    }
    return max === 0 ? -1 : max;
}

