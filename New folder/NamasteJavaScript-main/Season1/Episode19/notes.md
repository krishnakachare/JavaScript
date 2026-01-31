# Episode 19 : 🧮 map, filter & reduce

> `map`, `filter`, and `reduce` are all **Higher-Order Functions** in JavaScript.

---

## 🗺️ 1. Map Function

### 💡 What is `map()`?
The `map()` method is used to **transform** an array.  
It creates a **new array** by calling a provided function once for each element.

**Syntax:**
```js
const output = arr.map(callbackFunction);
````

👉 The `callbackFunction` tells `map` **how to transform each element**.

---

### 🧩 Example 1 — Double each element

```js
const arr = [5, 1, 3, 2, 6];

function double(x) {
  return x * 2;
}

const doubleArr = arr.map(double);
console.log(doubleArr); // [10, 2, 6, 4, 12]
```

---

### 🧩 Example 2 — Triple each element

```js
const arr = [5, 1, 3, 2, 6];

function triple(x) {
  return x * 3;
}

const tripleArr = arr.map(triple);
console.log(tripleArr); // [15, 3, 9, 6, 18]
```

---

### 🧩 Example 3 — Convert numbers to binary

```js
const arr = [5, 1, 3, 2, 6];

function binary(x) {
  return x.toString(2);
}

const binaryArr = arr.map(binary);
console.log(binaryArr); // ['101', '1', '11', '10', '110']
```

🪄 Equivalent short forms:

```js
const binaryArr = arr.map(function (x) {
  return x.toString(2);
});

// OR with arrow function:
const binaryArr = arr.map((x) => x.toString(2));
```

📌 **Summary:**
`map()` → transforms each element in the array and returns a **new array**.

---

## 🔍 2. Filter Function

### 💡 What is `filter()`?

`filter()` creates a new array containing only the elements that **satisfy a condition**.

**Syntax:**

```js
const result = arr.filter(callbackFunction);
```

---

### 🧩 Example — Filter odd numbers

```js
const arr = [5, 1, 3, 2, 6];

function isOdd(x) {
  return x % 2;
}

const oddArr = arr.filter(isOdd);
console.log(oddArr); // [5, 1, 3]

// OR arrow function:
const oddArr2 = arr.filter((x) => x % 2);
```

📌 `filter()` returns elements where the callback returns `true`.

---

## 🧮 3. Reduce Function

### 💡 What is `reduce()`?

The `reduce()` method **reduces an array** to a single value by applying a function to each element.

**Syntax:**

```js
const result = arr.reduce(callbackFunction, initialValue);
```

* `accumulator` → stores the result after each iteration
* `currentValue` → current array element
* `initialValue` → optional starting point for the accumulator

---

### 🧩 Example 1 — Sum of all elements

#### 🧱 Normal way

```js
const arr = [5, 1, 3, 2, 6];

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(findSum(arr)); // 17
```

#### ⚙️ Using `reduce()`

```js
const sumOfElem = arr.reduce(function (acc, curr) {
  return acc + curr;
}, 0);

console.log(sumOfElem); // 17
```

📘 `acc` acts like `sum`, and `curr` acts like `arr[i]`.

---

### 🧩 Example 2 — Find maximum value

#### 🧱 Normal way

```js
const arr = [5, 1, 3, 2, 6];

function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

console.log(findMax(arr)); // 6
```

#### ⚙️ Using `reduce()`

```js
const maxValue = arr.reduce((max, curr) => {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);

console.log(maxValue); // 6
```

📌 The variable name (`max`, `acc`, etc.) is arbitrary — it just holds the accumulated value.

---

## 🎯 4. “Tricky Map” Examples

### 🧩 Example 1 — Get full names of users

```js
const users = [
  { firstName: "Alok", lastName: "Raj", age: 23 },
  { firstName: "Ashish", lastName: "Kumar", age: 29 },
  { firstName: "Ankit", lastName: "Roy", age: 29 },
  { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
];

const fullNames = users.map((user) => user.firstName + " " + user.lastName);
console.log(fullNames);
// ["Alok Raj", "Ashish Kumar", "Ankit Roy", "Pranav Mukherjee"]
```

---

### 🧩 Example 2 — Count users by age using `reduce()`

```js
const users = [
  { firstName: "Alok", lastName: "Raj", age: 23 },
  { firstName: "Ashish", lastName: "Kumar", age: 29 },
  { firstName: "Ankit", lastName: "Roy", age: 29 },
  { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
];

const ageReport = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(ageReport);
// { 23: 1, 29: 2, 50: 1 }
```

🧠 We used `reduce()` because we wanted to **derive** (reduce) the array into a **single object**.

---

## 🔗 5. Function Chaining

### 🧩 Example — Names of users under 30

```js
const users = [
  { firstName: "Alok", lastName: "Raj", age: 23 },
  { firstName: "Ashish", lastName: "Kumar", age: 29 },
  { firstName: "Ankit", lastName: "Roy", age: 29 },
  { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
];

const output = users
  .filter((user) => user.age < 30)
  .map((user) => user.firstName);

console.log(output); // ["Alok", "Ashish", "Ankit"]
```

🧩 **Challenge:** Try the same logic using `reduce()` 👇

```js
const output = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(output); // ["Alok", "Ashish", "Ankit"]
```

---

## 📘 Summary Table

| Function     | Purpose                       | Returns                            | Example Use               |
| ------------ | ----------------------------- | ---------------------------------- | ------------------------- |
| **map()**    | Transforms each element       | New array                          | Convert numbers to binary |
| **filter()** | Filters based on condition    | New filtered array                 | Get odd numbers           |
| **reduce()** | Reduces array to single value | Single value (number/object/array) | Sum, max, or grouping     |
