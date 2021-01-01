#include <string>
#include <vector>
#include <iostream>

using namespace std;

int N;
vector<int> graph[100001];
bool check[100001] = {false,};
int parent[100001];

void dfs(int v) {
    check[v] = true;
    for (int i = 0; i < graph[v].size(); ++i) {
        if (check[graph[v][i]]) continue;
        check[graph[v][i]] = true;
        parent[graph[v][i]] = v;
        dfs(graph[v][i]);
    }

}

int main() {
    scanf("%d", &N);
    for (int i = 0; i < N - 1; ++i) {
        int t1, t2;
        scanf("%d %d", &t1, &t2);
        graph[t1].push_back(t2);
        graph[t2].push_back(t1);
    }
    dfs(1);
    for (int i = 2; i <= N; ++i) {
        printf("%d\n", parent[i]);
    }
    return 0;
}
