#include <string>
#include <vector>
#include <iostream>

using namespace std;

string day[] = {"FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"};
int month[] = {31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

string solution(int a, int b) {
    int total = 0;
    string answer = "";
    for (int i = 0; i < a - 1; i++) {
        total += month[i];
    }
    total += b - 1;
    answer = day[total % 7];
    return answer;
}

int main() {
    cout << solution(1, 6);
    return 0;
}
