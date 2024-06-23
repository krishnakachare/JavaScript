function* gen() {
    yield 1;
    yield 2;
    return 3;
}

let gene = gen();
console.log(gene.next())
console.log(gene.next())
console.log(gene.next())
console.log(gene.next())