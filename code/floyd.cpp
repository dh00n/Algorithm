#include <string>
#include <vector>
#include <iostream>

using namespace std;

const int INF = 987987987;
int dp[5][5];
int arr[5][5] = {{0,   5,   INF, 8,   10},
                 {7,   0,   9,   INF, 4},
                 {2,   INF, 0,   4,   9},
                 {INF, INF, 3,   0,   12},
                 {16,  2,   3,   8,   INF}};


void floyd() {
    for (int i = 0; i < 5; ++i) {
        for (int j = 0; j < 5; ++j) {
            dp[i][j] = arr[i][j];
        }
    }

    for (int i = 0; i < 5; ++i) {
        for (int j = 0; j < 5; ++j) {
            for (int k = 0; k < 5; ++k) {
                if (dp[i][k] + dp[k][j] < dp[i][j]) {
                    dp[i][j] = dp[i][k] + dp[k][j];
                }
            }
        }
    }

    for (int i = 0; i < 5; ++i) {
        for (int j = 0; j < 5; ++j) {
            cout << dp[i][j] << " ";
        }
        cout << "\n";
    }
}

int main() {
    floyd();
    return 0;
}
