const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const tree = new Array(a.length * 4);

const init = (start, end, node) => {
    if (start === end) return tree[node] = a[start];
    const mid = Math.floor((start + end) / 2);
    return tree[node] = init(start, mid, node * 2) + init(mid + 1, end, node * 2 + 1);
}

const sum = (start, end, node, left, right) => {
    if (left > end || right < start) return 0;
    if (left <= start && end <= right) return tree[node];
    const mid = Math.floor((start + end) / 2);
    return sum(start, mid, node * 2, left, right) + sum(mid + 1, end, node * 2 + 1, left, right);
}

const update = (start, end, node, index, diff) => {
    if (index < start || index > end) return;
    tree[node] += diff;
    if (start === end) return;
    const mid = Math.floor((start + end) / 2);
    update(start, mid, node * 2, index, diff);
    update(mid + 1, end, node * 2 + 1, index, diff);
}

init(0, 9, 1);
console.log(sum(0, 9, 1, 0, 4));
console.log(sum(0, 9, 1, 3, 8));
update(0, 9, 1, 4, -7); // a배열의 인덱스 4의 원소 -7
console.log(sum(0, 9, 1, 0, 5));