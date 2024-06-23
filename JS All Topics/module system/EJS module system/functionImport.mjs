// Import and export both file must have extension .mjs
//Import a default export from the file functionExport.mjs: - multiplication
//Import named exports from the file functionExport.mjs: - { add, sub, name, div }
import multiplication, { add, sub, name, div } from './functionExport.mjs';

console.log(name) //  'I Am Js Module'
add(10, 20); // addition of 10 & 20 is 30
sub(20, 10); // subtraction of 20 & 10 is 10
multiplication(10, 20); // multiplication of 10 & 20 is 200
div(20, 4); // division of 20 & 4 is 5