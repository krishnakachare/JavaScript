
let a = 0, b = 1;

console.log(a); // 0
console.log(b); // 1

for (let i = 0; i < 7; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}

/*
### How it Works:
1. Start with two numbers: `0` and `1`.
2. Add them → next number.
3. Shift numbers forward:
   * `a = b`
   * `b = c`
So the rule of the Fibonacci sequence is:

F_n = F_{n-1} + F_{n-2}
Meaning each number is the **sum of the previous two numbers**.
*/


// ✅ **Even shorter version (interview-friendly):**

// let a = 0, b = 1;

// for (let i = 0; i < 9; i++) {
//     console.log(a);
//     [a, b] = [b, a + b];
// }



// [...Array(9)].reduce(([a, b]) => (console.log(a), [b, a + b]), [0, 1]);


// My trick:
function fib(num) {
    if (num <= 1) return num;
    return fib(num - 1) + fib(num - 2);
};
// console.log(fib(8)) // finding nth step

// fiding 0 to 8 steps
for (let i = 0; i <= 8; i++) {
    console.log(fib(i))
};