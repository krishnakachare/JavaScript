/* Call back functions are used in nested form, here each one is dependent on previous one
 */


// Read data from file-1 and file-2 write both the content into file-3

const fs = require('fs');

fs.readFile('./file1.txt', 'utf-8', (err1, data1) => {
    if (err1) {
        throw err1;
    }

    fs.readFile('./file2.txt', 'utf-8', (err2, data2) => {
        if (err2) {
            throw err2;
        }
        fs.writeFile('./file3.txt', `${data1} ${data2}`, (err3, data3) => {
            if (err1) {
                throw err1;
            }
            console.log('data written succesfully')
        })

    })

})