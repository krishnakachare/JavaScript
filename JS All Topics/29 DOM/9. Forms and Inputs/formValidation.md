Here are **simple and basic examples** for **Forms & Input Handling** 👇

---

# ✅ 1. Access Form Elements

👉 You can access form and its inputs using `getElementById` or `elements`

```html id="form1"
<form id="myForm">
  <input type="text" name="username" placeholder="Enter name" />
  <button type="submit">Submit</button>
</form>

<script>
  let form = document.getElementById("myForm");

  // Access input using elements
  let usernameInput = form.elements["username"];

  console.log(usernameInput); // input field
</script>
```

---

# ✅ 2. Reading Input Values

👉 Get user input using `.value`

```html id="form2"
<form id="myForm">
  <input type="text" id="name" placeholder="Enter name" />
  <button type="submit">Submit</button>
</form>

<script>
  let form = document.getElementById("myForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let nameValue = document.getElementById("name").value;

    console.log(nameValue);
  });
</script>
```

---

# ✅ 3. Input Validation (Basic)

👉 Check if input is empty

```html id="form3"
<form id="myForm">
  <input type="text" id="name" placeholder="Enter name" />
  <button type="submit">Submit</button>
</form>

<script>
  let form = document.getElementById("myForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;

    if (name === "") {
      alert("Name is required");
    } else {
      alert("Form submitted");
    }
  });
</script>
```

---

# ✅ 4. Validation with Multiple Inputs

```html id="form4"
<form id="myForm">
  <input type="text" id="name" placeholder="Name" />
  <input type="email" id="email" placeholder="Email" />
  <button type="submit">Submit</button>
</form>

<script>
  let form = document.getElementById("myForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
      alert("All fields are required");
    } else {
      console.log("Name:", name);
      console.log("Email:", email);
    }
  });
</script>
```

---

# 🔥 Bonus: Real-time Input Handling (`input` event)

```html id="form5"
<input type="text" id="name" placeholder="Type here" />

<script>
  let input = document.getElementById("name");

  input.addEventListener("input", function () {
    console.log(input.value);
  });
</script>
```

👉 Runs on every typing

---

# 🔥 Quick Summary

| Topic           | Key Concept                       |
| --------------- | --------------------------------- |
| Access form     | `form.elements`, `getElementById` |
| Read value      | `.value`                          |
| Validation      | `if (value === "")`               |
| Prevent reload  | `event.preventDefault()`          |
| Real-time input | `input` event                     |
