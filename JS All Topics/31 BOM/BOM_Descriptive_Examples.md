
# 📘 Browser Object Model (BOM) – Topics with Descriptive Code Examples

This file contains all major and commonly used BOM (Browser Object Model) topics in JavaScript, with descriptive explanations and practical code examples.

---

## 🔹 1. `window` Object
The global object for BOM. All global variables and functions are actually properties of `window`.

```javascript
console.log(window.innerWidth);   // Width of the browser window
console.log(window.innerHeight);  // Height of the browser window

let a = 10;
console.log(window.a); // 10
```

---

## 🔹 2. `window.alert()`, `window.confirm()`, `window.prompt()`

```javascript
window.alert("Hello!");

let isConfirmed = window.confirm("Are you sure?");
console.log(isConfirmed); // true or false

let name = window.prompt("Enter your name:");
console.log("User name:", name);
```

---

## 🔹 3. `window.open()` and `window.close()`

```javascript
let myWindow = window.open("https://example.com", "_blank", "width=400,height=400");

setTimeout(() => {
  myWindow.close();
}, 5000);
```

---

## 🔹 4. `window.setTimeout()` and `window.setInterval()`

```javascript
setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

let count = 0;
let timer = setInterval(() => {
  console.log("Interval count:", ++count);
  if (count === 5) clearInterval(timer);
}, 1000);
```

---

## 🔹 5. `window.clearTimeout()` and `window.clearInterval()`

```javascript
let timeoutId = setTimeout(() => {
  console.log("This won't run");
}, 3000);

clearTimeout(timeoutId);
```

---

## 🔹 6. `window.location` (URL control)

```javascript
console.log(window.location.href);
console.log(window.location.hostname);
console.log(window.location.pathname);
console.log(window.location.protocol);

// Redirect to another page
// window.location.href = "https://google.com";

// Reload the page
// window.location.reload();
```

---

## 🔹 7. `window.history` (Browser history)

```javascript
// window.history.back();
// window.history.forward();
// window.history.go(-1);
```

---

## 🔹 8. `window.navigator` (Browser and device info)

```javascript
console.log(navigator.userAgent);
console.log(navigator.language);
console.log(navigator.onLine);
console.log(navigator.platform);

if (navigator.userAgent.includes("Chrome")) {
  console.log("User is on Chrome");
}
```

---

## 🔹 9. `window.screen` (Screen info)

```javascript
console.log(screen.width);
console.log(screen.height);
console.log(screen.availWidth);
console.log(screen.colorDepth);
```

---

## 🔹 10. Dialog Boxes Recap
- `alert()`
- `prompt()`
- `confirm()`

---

## 🔹 11. `window.scrollTo()` and `window.scrollBy()`

```javascript
window.scrollTo(0, 0);
window.scrollBy(0, 100);
```

---

## 🔹 12. Event Listeners on `window`

```javascript
window.addEventListener("resize", () => {
  console.log("Window resized:", window.innerWidth, window.innerHeight);
});

window.addEventListener("scroll", () => {
  console.log("Scroll position:", window.scrollY);
});
```

---

Would you like this compiled into a study guide PDF or turned into an interactive HTML practice page?
