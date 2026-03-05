const fs = require("fs");
fs.readFile("read.txt", "utf8", (err, data) => {
    console.log(data)
})

fs.writeFile("read.txt", "I am writing...", (err) => {
    if (err) throw err;
    console.log("File saved");
});

fs.readFile("read.txt", "utf8", (err, data) => {
    console.log(data)
})