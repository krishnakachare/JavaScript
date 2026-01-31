### 🧠 TL;DR — `this` Keyword in JavaScript

| Context                               | Value of `this`                                                                                        |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **Global scope (browser)**            | `window` object                                                                                        |
| **Inside a function**                 | - `undefined` in **strict mode**<br>- `window` in **non-strict mode** (because of *this substitution*) |
| **Inside a method (object function)** | The **object** that owns the method                                                                    |
| **Using `call`, `apply`, `bind`**     | `this` is **explicitly set** to the first argument passed                                              |
| **Arrow function**                    | Takes `this` from its **enclosing lexical scope** (no own `this`)                                      |
| **In DOM event handler**              | Refers to the **HTML element** that received the event                                                 |

---

### ⚙️ Key Concepts

1. **Global Context**

   ```js
   console.log(this); // window
   ```

2. **Function Context**

   ```js
   function x() {
     console.log(this);
   }
   x(); // undefined (in strict mode), window (non-strict)
   ```

3. **Method Context**

   ```js
   const obj = {
     a: 10,
     show: function () {
       console.log(this.a);
     },
   };
   obj.show(); // 10
   ```

4. **Using `call`, `apply`, `bind`**

   ```js
   const person = { name: "Alok" };
   function greet() {
     console.log(this.name);
   }
   greet.call(person); // Alok
   ```

5. **Arrow Function Context**

   ```js
   const obj = {
     a: 10,
     arrow: () => console.log(this), // window
   };
   obj.arrow();
   ```

   ```js
   const obj2 = {
     a: 10,
     func() {
       const inner = () => console.log(this.a);
       inner();
     },
   };
   obj2.func(); // 10
   ```

6. **DOM Context**

   ```html
   <button onclick="console.log(this)">Click Me</button>
   <!-- this = HTMLButtonElement -->
   ```