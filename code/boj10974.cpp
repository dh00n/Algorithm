#include <iostream>
#include <vector>

using namespace std;

int N;
vector<int> vec;
int result[10];
bool visit[10];

void perm(int ind) {
    if (ind >= N) {
        for (int i = 0; i < N; ++i) {
            cout << result[i] << " ";
        }
        cout << "\n";
        return;
    }

    for (int i = 0; i < N; ++i) {
        if (!visit[i]) {
            visit[i] = true;
            result[ind] = vec[i];
            perm(ind + 1);
            visit[i] = false;
        }
    }
}

int main() {
    cin >> N;
    for (int i = 1; i <= N; ++i) {
        vec.push_back(i);
    }
    perm(0);
    return 0;
}