#include <string>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

long long A, B;
string strA;
int aSize;

int result[11];
bool check[11];

bool comp(char a, char b) {
    return a - '0' > b - '0';
}

void perm(int ind) {
    if (ind >= aSize) {
        string tempStr;
        for (int i = 0; i < aSize; ++i) {
            tempStr += result[i];
        }
        if (stoi(tempStr) < B && tempStr[0] != '0') {
            cout << tempStr;
            exit(0);
        }
        return;
    }

    for (int i = 0; i < aSize; ++i) {
        if (!check[i]) {
            check[i] = true;
            result[ind] = strA[i];
            perm(ind + 1);
            check[i] = false;
        }
    }
}

int main() {
    cin >> A >> B;
    strA = to_string(A);
    aSize = strA.size();
    sort(strA.begin(), strA.end(), comp);
    perm(0);
    cout << -1;
    return 0;
}

