// using async await:

// Read data from file-1 and file-2 write both the content into file-3
const fs = require('fs');

let data1 = fs.readFileSync('./file1.txt', 'utf-8');
let data2 = fs.readFileSync('./file2.txt', 'utf-8');
fs.writeFileSync('./file3.txt', `${data1} ${data2}`);
console.log('data written successfully')