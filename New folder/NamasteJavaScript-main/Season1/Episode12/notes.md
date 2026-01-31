# Episode 12: Famous Interview Questions (Closures in JS)

### Q1: What is a Closure in JavaScript?

**Answer**:  
A **closure** is a function bundled together with its **lexical environment** (outer variables it can access).

```js
function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  } // inner forms closure with outer
  return inner;
}

outer()(); // 10
```

Here:

- First `()` calls `outer()` which returns `inner`.
- Second `()` calls `inner`, which still remembers `a` even though `outer` has finished.

---

### Q2: Does order of declaration matter?

```js
function outer() {
  function inner() {
    console.log(a);
  }
  var a = 10;
  return inner;
}
outer()(); // 10
```

**Answer**: Yes, closure still works.
`inner` has access to `a` in `outer`’s scope, regardless of whether it’s declared before or after.

---

### Q3: What if `var` is changed to `let`?

```js
function outer() {
  let a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}
outer()(); // 10
```

**Answer**: Same behavior. Closures work with both `let` and `var`.

---

### Q4: Do closures capture function arguments?

```js
function outer(str) {
  let a = 10;
  function inner() {
    console.log(a, str);
  }
  return inner;
}
outer("Hello")(); // 10 "Hello"
```

**Answer**: Yes. Closures capture **both variables and arguments** of outer functions.

---

### Q5: Can closures access multiple levels?

```js
function outest() {
  var c = 20;
  function outer(str) {
    let a = 10;
    function inner() {
      console.log(a, c, str);
    }
    return inner;
  }
  return outer;
}
outest()("Hello")(); // 10 20 "Hello"
```

**Answer**: Yes.
Closures can chain through **all outer scopes**, not just one level.

---

### Q6: What if there’s a conflicting variable?

```js
function outest() {
  var c = 20;
  function outer(str) {
    let a = 10;
    function inner() {
      console.log(a, c, str);
    }
    return inner;
  }
  return outer;
}
let a = 100;
outest()("Hello")(); // 10 20 "Hello"
```

**Answer**: Still prints `10 20 Hello`.
Closures always resolve variables using the **nearest lexical scope**. If not found, they move outward in the **scope chain**.

---

### Q7: What are advantages of Closures?

- ✅ Module design pattern
- ✅ Currying
- ✅ Memoization
- ✅ Data hiding & encapsulation
- ✅ Asynchronous operations (e.g. `setTimeout`)

---

### Q8: How do Closures help with Data Hiding?

#### ❌ Without closures

```js
var count = 0;
function increment() {
  count++;
}
console.log(count); // anyone can directly change count
```

#### ✅ With closures

```js
function counter() {
  var count = 0;
  return function increment() {
    count++;
    console.log(count);
  };
}

const c1 = counter();
c1(); // 1
c1(); // 2

const c2 = counter();
c2(); // 1 (separate copy)
```

Each `counter()` call creates a **new private copy** of `count`.

#### 🚀 Scalable version with Constructor

```js
function Counter() {
  var count = 0;

  this.increment = function () {
    count++;
    console.log(count);
  };

  this.decrement = function () {
    count--;
    console.log(count);
  };
}

const c = new Counter();
c.increment(); // 1
c.increment(); // 2
c.decrement(); // 1
```

---

### Q9: What are disadvantages of Closures?

- ❌ **Extra memory usage** (closed-over variables stay in memory).
- ❌ **Potential memory leaks** if closures hold onto large unused data.
- ❌ **Performance issues** in long-running apps with excessive closures.

> JS engines (like V8 in Chrome) use **smart garbage collection** to mitigate this.
> Unused variables inside closures are eventually freed if they’re not referenced anymore.

```js
function a() {
  var x = 0;
  return function b() {
    console.log(x);
  };
}

var y = a();
y(); // x is preserved by closure
```

Even though `a()` finished, `x` remains in memory because `b` still needs it.

---

## ✨ Key Takeaways

- Closures = function + its outer scope.
- They enable **powerful patterns** like modules, currying, memoization.
- But watch out for **memory overhead** in large apps.
