#include <string>
#include <iostream>

using namespace std;

int parent[1000];

int getParent(int x) {
    if (parent[x] == x) return x;
    return parent[x] = getParent(parent[x]);
}

void unionParent(int a, int b) {
    a = getParent(a);
    b = getParent(b);
    if (a < b) parent[b] = a;
    else parent[a] = b;
}

bool findParent(int a, int b) {
    a = getParent(a);
    b = getParent(b);
    if (a == b) return true;
    return false;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int N;
    cin >> N;
    for (int i = 1; i <= N; ++i) {
        parent[i] = i;
    }
    unionParent(1, 2);
    unionParent(2, 3);
    unionParent(3, 4);
    unionParent(4, 5);
    cout << findParent(1, 6) << "\n";
    unionParent(4, 6);
    cout << findParent(1, 6) << "\n";
    return 0;
}
