Great question 👍 Let’s go step by step — **concept first, then logic, then JavaScript code**.

---

## 1️⃣ What is an Armstrong Number?

An **Armstrong number** (also called a **Narcissistic number**) is a number where:

> **The sum of each digit raised to the power of the number of digits equals the original number.**

### 🔹 Mathematical definition

If a number has **n digits**:

[
\text{Number} = d_1^n + d_2^n + d_3^n + \dots
]

---

### 🔹 Examples

#### ✅ 3-digit Armstrong numbers

* **153** → (1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153)
* **370** → (3^3 + 7^3 + 0^3 = 343 + 0 = 370)
* **371**, **407**

#### ✅ 4-digit Armstrong number

* **1634** → (1^4 + 6^4 + 3^4 + 4^4 = 1634)

#### ❌ Not Armstrong

* **123** → (1^3 + 2^3 + 3^3 = 36)

---

## 2️⃣ Steps to Check an Armstrong Number

1. Convert number to string
2. Count number of digits
3. Extract each digit
4. Raise each digit to the power of digit count
5. Add all results
6. Compare with original number

---

## 3️⃣ JavaScript Program to Check Armstrong Number

### ✅ Simple & clear solution

```js
function isArmstrong(num) {
  const digits = num.toString();
  const power = digits.length;
  let sum = 0;

  for (let digit of digits) {
    sum += Math.pow(Number(digit), power);
  }

  return sum === num;
}

console.log(isArmstrong(153));   // true
console.log(isArmstrong(370));   // true
console.log(isArmstrong(123));   // false
```

---

## 4️⃣ Using `reduce()` (modern JS)

```js
function isArmstrong(num) {
  const digits = num.toString();
  const power = digits.length;

  const sum = digits
    .split('')
    .reduce((acc, d) => acc + Math.pow(+d, power), 0);

  return sum === num;
}
```

---

## 5️⃣ Without converting to string (math approach)

```js
function isArmstrong(num) {
  let temp = num;
  const power = Math.floor(Math.log10(num)) + 1;
  let sum = 0;

  while (temp > 0) {
    const digit = temp % 10;
    sum += digit ** power;
    temp = Math.floor(temp / 10);
  }

  return sum === num;
}
```

---

## 6️⃣ Edge cases to handle

* Negative numbers ❌ (not Armstrong)
* Single-digit numbers ✅ (0–9 are Armstrong numbers)

```js
isArmstrong(7); // true
```

---

## 📝 Interview-ready explanation

> An Armstrong number is a number where the sum of its digits raised to the power of the total number of digits equals the original number. In JavaScript, we can extract digits, compute the powered sum, and compare it with the input number.

---

If you want, I can also:

* Write this **without loops**
* Optimize for **large numbers**
* Provide **MCQ / interview trick questions**

Just say 👍