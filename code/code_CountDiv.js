function solution(A, B, K) {
    if (B < K) {
        if (A === 0) return 1;
        return 0;
    }
    if (B == K) {
        if (A === 0) return 2;
        return 1;
    }
    let minK = -1;
    for (let i = A; i <= B; i++) {
        if (i % K === 0) {
            minK = i;
            break;
        }
    }
    if (minK === -1) {
        if (A === 0) return 1;
        return 0;
    }
    else return Math.floor((B - minK) / K) + 1;
}