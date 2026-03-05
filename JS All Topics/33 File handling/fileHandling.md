File handling in JavaScript mainly depends on **where JavaScript runs**:

1️⃣ **Browser (Frontend)** – reading files uploaded by users
2️⃣ **Server (Node.js)** – reading/writing files on the system

Below is a detailed explanation of both.

---

# 1️⃣ File Handling in Browser JavaScript

In the browser, JavaScript **cannot directly access system files** for security reasons.
Users must **select files through an input element**.

JavaScript uses the **File API**.

### HTML Input Example

```html
<input type="file" id="fileInput" />
```

### JavaScript Code

```javascript
const fileInput = document.getElementById("fileInput");

fileInput.addEventListener("change", function () {
  const file = this.files[0];
  console.log("File name:", file.name);
  console.log("File size:", file.size);
});
```

This gives metadata like:

- file name
- size
- type

---

# Reading File Content

JavaScript uses **FileReader**.

### Example: Read Text File

```javascript
const reader = new FileReader();

reader.onload = function (event) {
  console.log(event.target.result);
};

reader.readAsText(file);
```

Flow:

1. User selects file
2. FileReader reads file
3. Content available in `result`

---

# Example: Read Image and Display

```javascript
const reader = new FileReader();

reader.onload = function (event) {
  const img = document.createElement("img");
  img.src = event.target.result;
  document.body.appendChild(img);
};

reader.readAsDataURL(file);
```

This converts image → Base64 → display in browser.

---

# 2️⃣ File Handling in Node.js (Server Side)

In server-side JavaScript we can **read/write system files** using the **Node.js** built-in module **fs**.

---

# Reading Files

### Example: Read File

```javascript
const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
```

This is **asynchronous file reading**.

---

# Writing Files

### Example: Write File

```javascript
const fs = require("fs");

fs.writeFile("data.txt", "Hello World", (err) => {
  if (err) throw err;
  console.log("File saved");
});
```

---

# Append to File

```javascript
const fs = require("fs");

fs.appendFile("data.txt", "\nNew Line", (err) => {
  if (err) throw err;
});
```

---

# Delete File

```javascript
const fs = require("fs");

fs.unlink("data.txt", (err) => {
  if (err) throw err;
  console.log("File deleted");
});
```

---

# Using Promises (Modern Node.js)

```javascript
const fs = require("fs/promises");

async function readFile() {
  const data = await fs.readFile("data.txt", "utf8");
  console.log(data);
}

readFile();
```

---

# Sync vs Async File Handling

| Type         | Description      |
| ------------ | ---------------- |
| Synchronous  | Blocks execution |
| Asynchronous | Non-blocking     |

Example:

```javascript
fs.readFileSync("data.txt", "utf8");
```

Async is preferred because JavaScript uses the **Event Loop**.

---

# Common File Handling Methods

| Method       | Purpose     |
| ------------ | ----------- |
| readFile()   | Read file   |
| writeFile()  | Write file  |
| appendFile() | Add content |
| unlink()     | Delete file |
| rename()     | Rename file |

---

# Real-World Example (Backend API)

Example: Upload file and save it

```javascript
app.post("/upload", (req, res) => {
  const file = req.files.myFile;

  file.mv("./uploads/" + file.name, (err) => {
    if (err) return res.status(500).send(err);
    res.send("File uploaded");
  });
});
```

---

# Simple Interview Answer

**File handling in JavaScript can be done in two environments: browser and Node.js. In browsers we use File API and FileReader to read user-selected files. In Node.js we use the fs module to read, write, append, and delete files. Most operations are asynchronous and handled using callbacks, promises, or async/await.**
