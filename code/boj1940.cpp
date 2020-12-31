#include <string>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;
int N, M;
int graph[15001];
vector<int> graphVec;
int ans = 0;

void bf() {
    for (int i = 0; i < N; ++i) {
        scanf("%d", &graph[i]);
    }
    for (int i = 0; i < N - 1; ++i) {
        for (int j = i + 1; j < N; ++j) {
            if (graph[i] + graph[j] == M) {
                ans++;
            }
        }
    }
}

void twoPointer() {
    for (int i = 0; i < N; ++i) {
        int temp;
        cin >> temp;
        graphVec.push_back(temp);
    }
    sort(graphVec.begin(), graphVec.end());
    int s = 0, e = N - 1;
    while (s < e) {
        if (graphVec[s] + graphVec[e] == M) {
            s++;
            e--;
            ans++;
        } else if (graphVec[s] + graphVec[e] < M) {
            s++;
        } else {
            e--;
        }
    }
}

int main() {
    scanf("%d", &N);
    scanf("%d", &M);
    twoPointer();
    printf("%d", ans);
    return 0;
}
