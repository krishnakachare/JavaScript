# 10 Practical AJAX Examples in Real Web Applications

## 1. Live Search (Google Search Suggestion)

When the user types in a search box, suggestions appear **without refreshing the page**.

Example flow

- User types: `jav`
- AJAX request sent to server
- Server returns suggestions

Example

```javascript
document.getElementById("search").addEventListener("input", async function () {
  let query = this.value;

  let response = await fetch(`/search?q=${query}`);
  let data = await response.json();

  console.log(data);
});
```

Use case

- Google
- Amazon search
- E-commerce websites

---

# 2. Login Form Submission (Without Page Reload)

Example

```javascript
async function loginUser() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let response = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  let data = await response.json();
  console.log(data);
}
```

Use case

- Login pages
- Authentication systems

---

# 3. Loading Comments Dynamically

Example

```javascript
async function loadComments() {
  let response = await fetch("/comments");
  let comments = await response.json();

  comments.forEach((comment) => {
    console.log(comment.text);
  });
}
```

Use case

- Blog comments
- Social media posts

---

# 4. Infinite Scrolling

Content loads **when user scrolls down**.

Example

```javascript
window.addEventListener("scroll", async () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    let res = await fetch("/next-posts");
    let posts = await res.json();

    console.log(posts);
  }
});
```

Use case

- Instagram
- Facebook
- Twitter feed

---

# 5. Auto Form Validation

Check if **username already exists**.

Example

```javascript
async function checkUsername(username) {
  let res = await fetch(`/check-username?name=${username}`);
  let result = await res.json();

  console.log(result.available);
}
```

Use case

- Signup forms

---

# 6. Updating Cart Items

Example

```javascript
async function updateCart(productId) {
  let res = await fetch("/cart/update", {
    method: "POST",
    body: JSON.stringify({ productId }),
  });

  let data = await res.json();

  console.log(data.totalPrice);
}
```

Use case

- E-commerce websites

---

# 7. Fetching Dashboard Data

Example

```javascript
async function loadDashboard() {
  let res = await fetch("/api/dashboard");
  let data = await res.json();

  console.log(data);
}
```

Use case

- Admin dashboards
- Analytics systems

---

# 8. Like Button (Social Media)

Example

```javascript
async function likePost(postId) {
  await fetch(`/post/${postId}/like`, {
    method: "POST",
  });

  console.log("Liked");
}
```

Use case

- Facebook
- Instagram
- LinkedIn

---

# 9. Auto Refresh Notifications

Example

```javascript
setInterval(async () => {
  let res = await fetch("/notifications");
  let data = await res.json();

  console.log(data);
}, 5000);
```

Use case

- Chat apps
- Notification systems

---

# 10. File Upload Using AJAX

Example

```javascript
let formData = new FormData();
formData.append("file", fileInput.files[0]);

fetch("/upload", {
  method: "POST",
  body: formData,
});
```

Use case

- Profile photo upload
- Document upload

---

# Common AJAX Interview Questions (Very Frequently Asked)

## 1 What is AJAX?

AJAX stands for **Asynchronous JavaScript and XML**.

It allows web pages to **send and receive data from a server without reloading the page**.

---

# 2 What are the advantages of AJAX?

- No page refresh
- Faster user experience
- Reduced server load
- Partial page updates

---

# 3 What technologies are used in AJAX?

AJAX is a combination of:

- HTML
- CSS
- JavaScript
- DOM
- JSON / XML
- HTTP

---

# 4 What is XMLHttpRequest?

`XMLHttpRequest` is a JavaScript object used to **send HTTP requests to the server asynchronously**.

Example

```javascript
let xhr = new XMLHttpRequest();
```

---

# 5 What is the difference between AJAX and Fetch API?

| AJAX (XMLHttpRequest) | Fetch API       |
| --------------------- | --------------- |
| older approach        | modern approach |
| callback based        | promise based   |
| complex syntax        | simpler syntax  |

---

# 6 What is readyState in AJAX?

`readyState` indicates the **state of the request**.

| Value | Meaning                 |
| ----- | ----------------------- |
| 0     | request not initialized |
| 1     | connection established  |
| 2     | request received        |
| 3     | processing              |
| 4     | request finished        |

---

# 7 What is CORS?

CORS = **Cross-Origin Resource Sharing**

It allows a website to request resources from **another domain**.

Example

```text
frontend.com → api.backend.com
```

---

# 8 What is the difference between synchronous and asynchronous requests?

| Synchronous      | Asynchronous  |
| ---------------- | ------------- |
| blocks execution | non-blocking  |
| slower UX        | faster UX     |
| rarely used      | commonly used |

---

# 9 What are HTTP methods used in AJAX?

- GET → retrieve data
- POST → send data
- PUT → update data
- DELETE → remove data

---

# 10 How do you handle AJAX errors?

Example

```javascript
try {
  let res = await fetch("/api");
} catch (err) {
  console.log(err);
}
```

---

# 11 What is JSON in AJAX?

JSON is the **most common data format for API responses**.

Example

```json
{
  "name": "Krishna",
  "age": 25
}
```

---

# 12 What is the difference between AJAX and API?

| AJAX                | API              |
| ------------------- | ---------------- |
| technique           | service          |
| client-side request | backend endpoint |

Example

```text
AJAX → sends request
API → returns data
```

---

# Important Interview Tip (Very Useful)

A **very common interview question** is:

**"Explain the AJAX request lifecycle."**

Answer:

1. User triggers an event
2. JavaScript sends AJAX request
3. Server processes request
4. Server sends response
5. JavaScript updates DOM
