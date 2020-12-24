#include <iostream>
#include <cstring>
#include <queue>

using namespace std;

int N, M, K;
int graph[101][101];
bool check[101][101];
int dy[] = {0, 0, -1, 1};
int dx[] = {-1, 1, 0, 0};
int Ans = 0;

void solve(pair<int, int> v) {
    queue<pair<int, int>> q;
    q.push(v);
    check[v.first][v.second] = true;
    while (!q.empty()) {
        int y = q.front().first;
        int x = q.front().second;
        q.pop();
        Ans++;
        for (int i = 0; i < 4; ++i) {
            int ny = y + dy[i];
            int nx = x + dx[i];
            if (ny >= 0 && ny < N && nx >= 0 && nx < M && graph[ny][nx] && !check[ny][nx]) {
                q.push({ny, nx});
                check[ny][nx] = true;
            }
        }
    }
}

int main() {
    int ans = 1;
    memset(graph, 0, sizeof(graph));
    cin >> N >> M >> K;
    for (int i = 0; i < K; ++i) {
        int y, x;
        cin >> y >> x;
        graph[y - 1][x - 1] = 1;
    }
    for (int i = 0; i < N; ++i) {
        for (int j = 0; j < M; ++j) {
            if (graph[i][j] == 1 && !check[i][j]) {
                Ans = 0;
                solve({i, j});
                if (Ans > ans) {
                    ans = Ans;
                }
            }
        }
    }
    cout << ans;
    return 0;
}