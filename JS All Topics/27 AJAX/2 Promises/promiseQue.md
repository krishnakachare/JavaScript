⚡ 5 Tricky JavaScript Output Questions(Event Loop & Promises)

These show up a LOT in frontend interviews 👇

1️⃣
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");

2️⃣
Promise.resolve()
.then(() => {
console.log(1);
return Promise.resolve(2);
})
.then(console.log);

3️⃣
async function test() {
return 10;
}
console.log(test());

4️⃣
setTimeout(() => console.log("timeout"), 0);
queueMicrotask(() => console.log("microtask"));

5️⃣
async function foo() {
console.log(1);
await Promise.resolve();
console.log(2);
}
console.log(3);
foo();
console.log(4);

Answers 👇

1️⃣ A D C B
(sync → microtask → macrotask)

2️⃣ 1 2
(returned promise resolves before next then)

3️⃣ Promise {
<fulfilled>: 10}
(async always returns a promise)

        4️⃣ microtask timeout
        (microtasks run before macrotasks)

        5️⃣ 3 1 4 2
        (await pauses execution)

        Understanding this = strong JS fundamentals 🔥
