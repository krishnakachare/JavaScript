
# 📘 Browser Object Model (BOM) - Complete Guide

This guide covers all the essential and advanced topics of the **Browser Object Model (BOM)** in JavaScript, complete with descriptions and code examples.

---

## ✅ Complete BOM Topics Checklist

### 🔹 1. `window` Object
- Global scope
- Browser dimensions (`innerWidth`, `innerHeight`)
- `window.name`
- `window.console`

```javascript
console.log(window.innerWidth);
console.log(window.innerHeight);
let a = 10;
console.log(window.a); // 10
```

---

### 🔹 2. Dialog Boxes
- `window.alert()`
- `window.confirm()`
- `window.prompt()`

```javascript
alert("Hello!");
let confirmResult = confirm("Are you sure?");
let name = prompt("Enter your name:");
```

---

### 🔹 3. Timers
- `setTimeout()`, `clearTimeout()`
- `setInterval()`, `clearInterval()`

```javascript
let timeoutId = setTimeout(() => {
  console.log("Runs after 2 seconds");
}, 2000);
clearTimeout(timeoutId);

let count = 0;
let intervalId = setInterval(() => {
  console.log("Interval:", ++count);
  if (count === 5) clearInterval(intervalId);
}, 1000);
```

---

### 🔹 4. Popups
- `window.open()`, `window.close()`
- `window.focus()`, `window.blur()`

```javascript
let win = window.open("https://example.com", "_blank", "width=400,height=400");
setTimeout(() => win.close(), 5000);
```

---

### 🔹 5. Window Size and Position
- `window.innerWidth`, `window.outerWidth`
- `window.screenX`, `window.screenY`
- `window.moveTo()`, `window.resizeTo()` *(limited in modern browsers)*

---

### 🔹 6. `window.location`
- `href`, `protocol`, `host`, `hostname`, `pathname`, `search`, `hash`
- `assign()`, `replace()`, `reload()`

```javascript
console.log(location.href);
location.reload();
// location.assign("https://google.com");
```

---

### 🔹 7. `window.history`
- `back()`, `forward()`, `go()`
- `length`

```javascript
// history.back();
// history.forward();
// history.go(-1);
```

---

### 🔹 8. `navigator` Object
- `userAgent`, `language`, `onLine`, `platform`
- `geolocation`
- `mediaDevices`, `permissions` (advanced)

```javascript
console.log(navigator.userAgent);
console.log(navigator.language);
```

---

### 🔹 9. `screen` Object
- `width`, `height`, `availWidth`, `availHeight`
- `colorDepth`, `pixelDepth`

```javascript
console.log(screen.width, screen.height);
console.log(screen.colorDepth);
```

---

### 🔹 10. Scrolling
- `scrollTo()`, `scrollBy()`, `scrollX`, `scrollY`
- `pageYOffset`, `pageXOffset`

```javascript
window.scrollTo(0, 0);
window.scrollBy(0, 100);
```

---

### 🔹 11. Events on `window`
- `resize`, `scroll`, `beforeunload`, `unload`, `load`
- `focus`, `blur`, `online`, `offline`

```javascript
window.addEventListener("resize", () => {
  console.log("Resized to:", window.innerWidth);
});
```

---

### 🔹 12. BOM + DOM Integration
Use BOM methods to:
- Navigate pages
- Open/close popups
- Reload or redirect
- Detect user environment
- Trigger actions on scroll/resize/load

---

## 🔸 Optional / Legacy BOM APIs
- `window.status` *(not supported in modern browsers)*
- `window.defaultStatus`
- `navigator.javaEnabled()`
- `window.frames`

---

# 🎯 Summary
This guide includes all essential BOM APIs with examples. Practice them in real browser projects to fully understand browser-level control via JavaScript.
