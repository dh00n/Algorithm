#include <iostream>
#include <vector>

using namespace std;
int N;
vector<int> Vec;
bool check[9];
int value[9];
int Ans = 0;

int getSum(int vec[]) {
    int sum = 0;
    for (int i = 0; i < N - 1; ++i) {
        sum += abs(vec[i] - vec[i + 1]);
    }
    return sum;
}

void permutation(int ind) {
    if (ind >= N){
        int temp = getSum(value);
        if (Ans < temp) {
            Ans = temp;
        }
        return;
    }

    for (int i = 0; i < N; ++i) {
        if (!check[i]){
            value[ind] = Vec[i];
            check[i] = true;
            permutation(ind + 1);
            check[i] = false;
        }
    }
}

int main() {
    cin >> N;
    for (int i = 0; i < N; ++i) {
        int x;
        cin >> x;
        Vec.push_back(x);
    }

    permutation(0);
    cout << Ans;
    return 0;
}