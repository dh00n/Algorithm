#include <string>
#include <vector>
#include <iostream>
#include <cstring>

using namespace std;

vector<int> graph[1001];
bool check[1001];
int Ans;

void init() {
    for (int i = 0; i <= 1001; ++i) {
        graph[i].clear();
    }
}

void solve(int v) {
    check[v] = true;
    for (int i = 0; i < graph[v].size(); ++i) {
        if (check[graph[v][i]]) continue;
        check[graph[v][i]] = true;
        solve(graph[v][i]);
    }
}

int main() {
    int T;
    scanf("%d", &T);
    for (int tt = 0; tt < T; ++tt) {
        memset(check, 0, sizeof(check));
        Ans = 0;
        int N;
        scanf("%d", &N);
        init();
        for (int i = 0; i < N; ++i) {
            int temp;
            scanf("%d", &temp);
            graph[i + 1].push_back(temp);
        }

        for (int i = 1; i <= N; ++i) {
            if (!check[i]) {
                Ans++;
                solve(i);:
            }
        }

        printf("%d\n", Ans);
    }
    return 0;
}
