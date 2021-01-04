#include <iostream>

using namespace std;

int N, M;
int map[100001];
int pSum[100001];

int main() {
    scanf("%d %d", &N, &M);
    for (int i = 0; i < N; ++i) {
        scanf("%d", &map[i]);
    }
    pSum[0] = map[0];
    for (int i = 1; i < N; ++i) {
        pSum[i] = map[i] + pSum[i - 1];
    }
    for (int i = 0; i < M; ++i) {
        int a, b;
        scanf("%d %d", &a, &b);
        if (a == 1) printf("%d\n", pSum[b - 1]);
        else printf("%d\n", pSum[b - 1] - pSum[a - 2]);
    }

    return 0;
}