/* 
# Escape pattern/sequance: Denoted by \
  * Use :
       - Including special characters in strings.
       - Formatting output for readability or structured layout.

  * Patterns: \', \", \\, \n, \t, \uXXXX 
*/

// 1. Single quote (\') :
console.log("It's me.") // It's me.
console.log('It\'s me.') // It's me.
console.log('It"s me.') // It"s me.

// 2. Double quote (\") :
console.log('"Hello!", Ram') // "Hello!", Ram
console.log("\"Hello!\", Ram") // "Hello!", Ram

/* 
3. Newline (\n)  : Inserts a new line.
    <h1> Hi :
            Ram 
    <h1/>

    "Hi : Ram" ==> Not able to assert text directly in cypress need to break it.
*/
console.log('Hi :\n Ram')
/* 
Hi :
 Ram
*/

/* 
  4. path pattern (\\) : Inserts a backslash character.
*/
console.log('/Minskole/JS Batches/JS March 2024/day_77 July_13') // /Minskole/JS Batches/JS March 2024/day_77 July_13 
console.log('D:\\Minskole\\JS Batches\\JS March 2024\\day_77 July_13') // D:\Minskole\JS Batches\JS March 2024\day_77 July_13

/* 
5. tab (\t) : Inserts a horizontal tab.
*/
console.log('Hi\tRam') // Hi      Ram

/* 
6. unicode (\u____) : Inserts a Unicode character specified by the hexadecimal number `XXXX`
*/
console.log('Copy \u00A9') // Copy ©