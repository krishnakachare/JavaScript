# 🌐 JavaScript Web APIs – Complete Syllabus (Detailed)

## 1. 🔹 What are Web APIs?

- Browser-provided APIs (not part of JavaScript itself)
- Available through the **window object**
- Help JS interact with browser & system

### Key Concepts:

- JS Engine vs Browser APIs
- Role of Web APIs in async behavior
- Example:

  ```js
  setTimeout(() => console.log("Hi"), 1000);
  ```

  (`setTimeout` is a Web API, not core JS)

---

## 2. 🔹 DOM API (Document Object Model)

### Topics:

- DOM Tree structure
- Selecting elements:

  ```js
  document.getElementById();
  document.querySelector();
  ```

- Manipulating elements:
  - innerHTML, textContent
  - setAttribute, classList

- Creating & deleting elements:

  ```js
  document.createElement();
  appendChild();
  remove();
  ```

### Advanced:

- DOM traversal (parent, child, sibling)
- Reflow & Repaint
- Virtual DOM concept (basic idea)

---

## 3. 🔹 Events API

### Topics:

- Event handling:

  ```js
  element.addEventListener("click", handler);
  ```

- Event object
- Event types:
  - click, input, submit, keydown, load

### Advanced:

- Event bubbling & capturing
- Event delegation
- stopPropagation()
- preventDefault()

---

## 4. 🔹 Timers API

### Topics:

- setTimeout()
- setInterval()
- clearTimeout(), clearInterval()

### Concepts:

- Async execution
- Delay vs actual execution timing
- Use cases (polling, retries)

---

## 5. 🔹 Fetch API (HTTP Requests)

### Topics:

- Making API calls:

  ```js
  fetch(url);
  ```

- Promises & async/await
- Handling JSON:

  ```js
  response.json();
  ```

### Advanced:

- Error handling
- Headers & methods (GET, POST, PUT, DELETE)
- Sending data:

  ```js
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  });
  ```

- CORS concept

---

## 6. 🔹 Storage APIs

### Types:

#### localStorage

- Persistent storage

```js
localStorage.setItem("key", "value");
```

#### sessionStorage

- Session-based storage

### Advanced:

- JSON storage
- Storage limits
- Use cases (auth tokens, preferences)

---

## 7. 🔹 Cookies API

### Topics:

- document.cookie
- Setting cookies
- Expiry & path

### Advanced:

- Secure & HttpOnly cookies
- Cookies vs localStorage

---

## 8. 🔹 Geolocation API

### Topics:

```js
navigator.geolocation.getCurrentPosition();
```

### Concepts:

- Latitude/Longitude
- Permissions
- Error handling

---

## 9. 🔹 Console API

### Topics:

- console.log()
- console.error()
- console.warn()
- console.table()

### Advanced:

- Debugging strategies

---

## 10. 🔹 History API

### Topics:

- navigation control:

```js
history.back();
history.forward();
history.pushState();
```

### Use Case:

- SPA routing (React, Angular)

---

## 11. 🔹 Location API

### Topics:

```js
window.location.href;
window.location.reload();
```

### Concepts:

- URL components
- Redirects

---

## 12. 🔹 Navigator API

### Topics:

- Browser info:

```js
navigator.userAgent;
navigator.onLine;
```

### Use Case:

- Device/browser detection

---

## 13. 🔹 Clipboard API

### Topics:

```js
navigator.clipboard.writeText();
```

### Use Case:

- Copy-paste functionality

---

## 14. 🔹 Drag and Drop API

### Topics:

- draggable attribute
- dragstart, dragover, drop events

---

## 15. 🔹 Web Storage vs IndexedDB

### IndexedDB:

- Large structured storage
- Asynchronous database

### Use Case:

- Offline apps

---

## 16. 🔹 Web Workers API

### Topics:

- Running JS in background thread

```js
const worker = new Worker("worker.js");
```

### Concepts:

- Multithreading in browser
- Message passing

---

## 17. 🔹 WebSocket API

### Topics:

```js
const socket = new WebSocket(url);
```

### Use Case:

- Real-time apps (chat, trading apps)

---

## 18. 🔹 Intersection Observer API

### Topics:

- Detect element visibility

### Use Case:

- Lazy loading images
- Infinite scrolling

---

## 19. 🔹 Mutation Observer API

### Topics:

- Watching DOM changes

---

## 20. 🔹 Resize Observer API

### Topics:

- Detect element size changes

---

## 21. 🔹 Media APIs

### Topics:

- Audio & Video control
- getUserMedia()

### Use Case:

- Camera & microphone access

---

## 22. 🔹 Fullscreen API

### Topics:

```js
element.requestFullscreen();
```

---

## 23. 🔹 Notification API

### Topics:

- Browser notifications

---

## 24. 🔹 Performance API

### Topics:

- Measuring performance

```js
performance.now();
```

---

## 25. 🔹 Service Workers & PWA APIs

### Topics:

- Offline support
- Caching
- Background sync

---

# 🧠 Important Interview Concepts (VERY IMPORTANT)

You should deeply understand:

- Event Loop (Call Stack + Callback Queue)
- Microtask vs Macrotask
- How Web APIs enable async JS
- Execution flow diagram

---

# 🚀 Suggested Learning Order

1. DOM API
2. Events
3. Timers
4. Fetch API
5. Storage (local/session)
6. Event Loop (very important)
7. Advanced APIs (WebSocket, Workers, etc.)
