let input = [];
let N;
let graph = [];
let erase;
let set1 = new Set();
let Answer = 0;
let parent = [];

const getParent = (a) => {
    if (a === parent[a] || parent[a] === -1) return a;
    if (parent[a] === erase) return erase;
    return parent[a] = getParent(parent[a]);
}

require("readline")
    .createInterface(process.stdin, process.stdout)
    .on("line", function (line) {
        input.push(line.trim());
    })
    .on("close", function () {
        N = Number(input[0]);
        graph = input[1].split(' ').map(v => Number(v));
        erase = Number(input[2]);
        let eraseCnt = 0;
        parent = [...graph];
        for (let i = 0; i < N; i++) {
            if (i === erase || graph[i] === erase) {
                eraseCnt++;
                continue;
            }
            if (getParent(i) === erase) {
                eraseCnt++;
                continue;
            }
            if (graph[i] !== -1) {
                set1.add(graph[i]);
            }
        }
        Answer = N - eraseCnt - set1.size;
        console.log(Answer);
    });
