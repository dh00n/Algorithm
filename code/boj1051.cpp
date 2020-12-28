#include <iostream>

using namespace std;
int N, M;
char graph[51][51];
int maxSize;

bool solve(int y, int x, int cnt) {
    if (graph[y][x] == graph[y + cnt - 1][x] && graph[y + cnt - 1][x] == graph[y][x + cnt - 1]
        && graph[y][x + cnt - 1] == graph[y + cnt - 1][x + cnt - 1]) {
        return true;
    }
    return false;
}

int main() {
    cin >> N >> M;
    maxSize = N < M ? N : M;
    for (int i = 0; i < N; ++i) {
        for (int j = 0; j < M; ++j) {
            cin >> graph[i][j];
        }
    }
    for (int k = maxSize; k >= 1; --k) {
        for (int i = 0; i < N; ++i) {
            for (int j = 0; j < M; ++j) {
                if (i + k - 1 > N || j + k - 1 > M) continue;
                if (solve(i, j, k)) {
                    cout << k * k;
                    exit(0);
                }
            }
        }
    }
    return 0;
}