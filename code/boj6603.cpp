#include <string>
#include <vector>
#include <iostream>

using namespace std;

int arr[14];
int K;
int result[14];
bool visit[14];

void comb(int ind, int cnt) {
    if (ind >= 6) {
        for (int i = 0; i < K; ++i) {
            if (visit[i]) {
                cout << result[i] << " ";
            }
        }
        cout << "\n";
        return;
    }

    for (int i = cnt; i < K; ++i) {
        if (!visit[i]) {
            visit[i] = true;
            result[i] = arr[i];
            comb(ind + 1, i);
            visit[i] = false;
        }
    }
}

int main() {
    while (true) {
        scanf("%d", &K);
        if (K == 0) break;
        for (int i = 0; i < K; ++i) {
            scanf("%d", &arr[i]);
        }
        comb(0, 0);
        cout << "\n";
    }
    return 0;
}
