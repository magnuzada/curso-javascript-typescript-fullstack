function* geradorID() {
    let i = 0;
    while (true) {
        yield ++i;
    }
}
const g1 = geradorID();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);