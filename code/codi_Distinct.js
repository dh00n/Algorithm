const st = new Set();

function solution(A) {
    for (let i = 0; i < A.length; i++) {
        st.add(A[i]);
    }
    return st.size;
}
