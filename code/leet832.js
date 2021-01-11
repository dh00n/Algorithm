/**
 * @param {number[][]} A
 * @return {number[][]}
 */

var flipAndInvertImage = function(A) {
    for(let i = 0; i < A.length; i++){
        for(let j = 0, k = A[i].length - 1; j < A[i].length / 2; j++, k--){
            const a = A[i][j];
            const b = A[i][k];
            A[i][j] = b === 0 ? 1 : 0;
            A[i][k] = a === 0 ? 1 : 0;
        }
    }
    return A;
};