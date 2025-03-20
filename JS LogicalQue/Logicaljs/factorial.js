// function factorial(n) {
//     if (n == 0) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// let res = factorial(5);
// console.log(res)

// Function to calculate factorial
function factorial(n) {
    if (n < 0) {
        return "Factorial not defined for negative numbers.";
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
};
// Example usage
const number = 0;
console.log(`The factorial of ${number} is ${factorial(number)}.`);