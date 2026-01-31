# Episode 1: Execution Context

Everything in JavaScript runs inside something called the **Execution Context**.  
Think of it like a box where your code lives and runs.  

![Execution Context](./assets/execution-context.jpg "Execution Context")

---

## Inside the Execution Context
The box has two main parts:

1. **Memory Component (Variable Environment)**  
   - Stores variables and functions as key–value pairs.  
   - Example: `x = 10`, `sayHi = function() {...}`  

2. **Code Component (Thread of Execution)**  
   - Where the code actually runs, one line at a time.  

---

## Key Properties of JavaScript
- **Synchronous** → Runs tasks in order, one after another.  
- **Single-threaded** → Can only do one thing at a time.  

---
✨ In short: JavaScript runs in a single box (execution context) that has memory for storing things and a space for running code step by step.
