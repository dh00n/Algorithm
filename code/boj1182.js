let input = [];
let N, S;
let a = 0;
let ANS = 0;

const dfs = (index, sum) => {
    sum += input[index];
    if (index >= N) return;
    if (sum === S) ANS++;
    dfs(index + 1, sum - input[index]);
    dfs(index + 1, sum);
}

const rl = require("readline").createInterface(process.stdin, process.stdout);

const Inp = [];
rl.on("line", (line) => {
    Inp.push(line);
}).on("close", function () {
    [N, S] = Inp[0].split(' ').map(v => Number(v));
    input = Inp[1].split(' ').map(v => Number(v));
    dfs(0, 0);
    console.log(ANS);
});
