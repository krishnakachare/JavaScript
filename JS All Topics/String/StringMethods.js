//Strings methods ===>

//1 toUppercase()
//2 tolowercase()
//3 StartsWith()
//4 endsWith()
//5 slice()
//6 substring()
//7 substr()
//8 trim()
//9 trimStart()
//10 trimEnd()
//11 indexOf()
//12 includes()
//13 replace()
//14 ReplaceAll()
//15 charat()
//16 charCodeAt()
//17 split()
//18 concat()
//19 padStart()
//20 padEnd()
// =======================================

//1. toUppercase()

// Action = all characters in string make in uppercase
// Return = New upper case string

// let str = "Rushi"
// console.log(str.toUpperCase())  // RUSHI
// console.log(str)   // Rushi

//-------------------
//2. tolowercase()

// Action = all characters in string make in lowercase
// Return = New lower case string

// let str = "RUSHI"
// console.log(str.toLowerCase())  // rushi
// console.log(str)   // RUSHI

//-------------------------------------
//3. startsWith(arug) // str / subStr
// arug - sub-string

// Action = Checking start with given Chara/Substring
// Return = True/False (Boolean)

// let city = "Solapur"
// console.log(city.startsWith("K"))  // false
// console.log(city.startsWith("s"))  // false
// console.log(city.startsWith("S"))  // true
// console.log(city.startsWith("Sol")) // true

//------------------------------------
//4. endsWith(arug) // str / subStr
// arug - sub-string

// Action = Checking End with given Chara/Substring
// Return = True/False (Boolean)

// let city = "Solapur"
// console.log(city.endsWith("r"))  // true
// console.log(city.endsWith("ur"))  // true

//----------------------------------------------
//5. slice(startPoint, EndPoint)  // index no.
// Works with both +ve & -ve indexing
// endPoint not including

// Action = Cut the string by requirement
// Return = Sliced sub-string

// var str = " Hi Ganesh "
// "  H i   G a n e s h  "
//  0 1 2 3 4 5 6 7 8 9 10     +ve indexing
// -11                  -1     -ve indexing

// console.log(str.slice(1,3))  // Hi
// console.log(str.slice(4,10))  // "Ganesh"
// console.log(str.slice(4))  // "Ganesh "

// // -ve indexing
// console.log(str.slice(-10, -8))  // Hi
// console.log(str.slice())  // " Hi Ganesh "
// console.log(str.slice(-7, -1))  // "Ganesh"
// console.log((str.slice(-7, -1)).length)  // 6
// console.log(str.slice(-7))  // "Ganesh "
// console.log((str.slice(-7)).length)  // 7

//----------------------------------------------------
//6. substring(startPoint, EndPoint)  // index no.
// Works with only +ve indexing ( below the zero consider only zero)
// we cant pass -ve index
// endPoint not including

// Action = Cut the string by requirement
// Return = Sliced sub-string

// var str = " Hi Ganesh "
// console.log(str.substring(-7))  //  " Hi Ganesh "
// console.log(str.substring(1, 3))  // Hi
// console.log(str.substring(4, 10))  // "Ganesh"
// console.log(str.substring(4))  // "Ganesh "

//-----------------------------
//7. substr(startPoint, length)

// Action = Cut the string by requirement
// Return = Sliced sub-string

// let str = " Hi Ganesh "
// console.log(str.substr(4, 6)) // Ganesh

// let string = "Hi Ganesh"
// console.log(string.substr(0, 2))  // Hi

// console.log("Name".substr(0, 2)) // 'Na'
// console.log("Name".substr(0, 4)) // 'Name'
// console.log("Name".substr(-4, 4)) // 'Name'  --> works -ve indexing
// console.log("Name".substr(-2, 4)) // 'me'
// console.log("Name".substr(-2)) // 'me'
// console.log("Name".substr(0)) // 'Name'  --> Conside upto last index no.

//----------
//8. trim()

// Action = Remove space from starting & ending
// Return = New string (free from empty spaces)

// let a = "         Krishna         "

// console.log(a.trim())  // "Krishna"
// console.log(a) 
// console.log((a.trim()).length)  // 7
// console.log(a.length)  // 9

//-------------------
//9. trimStart()

// Action = Remove space from starting
// Return = New string

// console.log(a.trimStart())
// console.log((a.trimStart()).length)  // 8
// console.log(a.length)  // 9

//--------------------
//10. trimEnd()

// Action = Remove space from Ending
// Return = New string

// console.log(a.trimEnd())
// console.log((a.trimEnd()).length)  // 8
// console.log(a.length)  // 9

//----------------------------------------
//11. indexOf(arug1, arug2)  // str / subStr
// arug1 = chara, substring
// arug2 = Start point

// Action = Finds the index number (first occurance)
// Return = index number (number)

// First occurance--->
// let z = "javaScript"
// console.log(z.indexOf("v"))  // 2
// console.log(z.indexOf("V"))  // -1

// // Second occurance--->
// console.log(z.indexOf("a")) // 1
// console.log(z.indexOf("a", 1))  // 1
// console.log(z.indexOf("a", 2))  // 3

// z = "jvScraiapt"
// console.log(z.indexOf("a", 2))  //-1

// // First occurance return
// let startPoint = z.indexOf("a") + 1
// console.log(startPoint)   // 1, //2 //6
// // Start Point occurance
// console.log(z.indexOf("a", startPoint))  // 7

//-----------------------------------------------------------------
//12. includes(arug) 
// arug - Chara or subStr

// Action = char or substring finding/checking inside the string
// Return = true/false (Boolean)

// let b = "Sagar"
// console.log(b.includes("S"))  // true
// console.log(b.includes("Sa")) // true
// console.log(b.includes("Sg"))  // false

//------------------------------------------
//13. replace(baseStr, replacingStr)
// arug1 - baseStr(Chara or substring)
// arug2 - replacingStr

//Action  = replace Existing char with new char (first occurance)
//return = New string

// let lang = "javaScript"
// console.log(lang.replace("a","z"))  // jzvaScript
// console.log(lang)  // "javaScript"

//--------------------------------------------
//14. ReplaceAll(baseStr, replacingStr)
// arug1 - baseStr(Chara or substring)
// arug2 - replacingStr

//Action  = replace All Existing char with new char (All occurance)
//return = New string

// let lang = "javaScraiptaaaaa"
// console.log(lang.replaceAll("a","z"))  // jzvzScrziptzzzzz
// console.log(lang)  // javaScraiptaaaaa

// let eg = "Hi Sagar"
// console.log(eg.replace("Sagar", "Ganesh"))  // Hi Ganesh

//-------------------------------
//15. charAt(arug1)
// arug1 - index no

// Action = Gives the char at given index
// Return =  index no. value (String)

// let b = "String"
// // console.log(b.charAt(0))  // S
// // console.log(b.charAt(3)) // i

// // console.log(b.charAt(6))  // empty string
// // console.log(typeof(b.charAt(6))) // string

// //-ve indexing
// console.log(b.charAt(-3)) //  empty string
// console.log(typeof(b.charAt(-3))) // string

//---------------------------------------------------
//16. charCodeAt(arug1)
// arug1 - index no

// Action = gives the char at index
// Return = Asccii Value  (Number)

// let b = "@String"
// console.log(b.charCodeAt(1)) // t ---> 116    
// console.log(b.charCodeAt(0))  // @ ---> 64

//-------------------------------------------------------
// 17. split(arug1)
// Arug1 - String  (optional)

//Action = string split in passed parameter
//return = Array

// .split()
// .split("")
// .split(" ")
// .split("a")
// .split("ar")

// let b = "@Strin|g"
// console.log(b.split()) // Array  --> [ '@Strin|g' ]
// console.log(b.split(""))  // ['@', 'S', 't','r', 'i', 'n','|', 'g']
// console.log(b.split(" "))  // [ '@Strin|g' ]

// b = "Hi @Strin|g"
// console.log(b.split(" ")) // [ 'Hi', '@Strin|g' ]
// console.log(b.split("i"))  //  [ 'H', ' @Str', 'n|g' ]
// console.log(b.split("|"))  //  [ 'Hi @Strin', 'g' ]
// console.log(b.split("n|")) //  [ 'Hi @Stri', 'g' ]

//--------------------------------------------------------------------------------
// 18. concat(arug1, arug2)
// arug1 - joiner
// arug2 - join

//Action = joins two or more strings:
//return = String

// let a = "hi"
// let b = "Good"
// let c = "Good"
// console.log(a.concat(" ", b))  // hi Good
// console.log(a + " " + b) // hi Good

// console.log(a.concat("", b)) //  hiGood
// console.log(a.concat(20, b)) // hi20Good

// console.log(a.concat(20, b, c)) // hi20GoodGood

//-----------------------------------------------------
//19. padStart(arug1, arug2)
// arug1 = length
// arug2 = value (for padding)

//Action = Before the base string Repeating the value upto (length-1)
//return = String

// let a = "Hi"
// console.log(a.padStart(5, "z"))  // "zzzHi"
// console.log(a.padStart(10, "zx")) // zxzxzxzxHi

// console.log(a.padStart(9, "zx"))  // zxzxzxzHi

// console.log(a.padStart(4, 2)) // "22Hi"

// // Applying on number
// let b = 10
// let z = b.toString()
// console.log(z, typeof(z))  // 10, String
// console.log(z.padStart(4, 2)) // "2210"

//---------------------------------------------------------
//20. padEnd(arug1, arug2)
// arug1 = length
// arug2 = value (for padding)

//Action = After the base string Repeating the value upto (length-1)
//return = String

let a = "Hi"
console.log(a.padEnd(5, "z"))  // "Hizzz"
console.log(a.padEnd(10, "zx")) // Hizxzxzxzx

console.log(a.padEnd(9, "zx"))  // Hizxzxzxz

console.log(a.padEnd(4, 2)) // "Hi22"

// Applying on number
let b = 10
let z = b.toString()
console.log(z, typeof(z))  // 10, String
console.log(z.padEnd(4, 2)) // "1022"







// // let lastName = "chinmayhhsdfdsfsdfs"
// // //  0  1  2  3  4  5  6 7 8
// // //  c  h  i  n  m  a  y h h

// // let kl = lastName.indexOf('h') 
// // console.log(kl)

// //--------------------------------

// // let onew = "ammoml"

// // // second occurence

// // let r = onew.indexOf('m',onew.indexOf('m')+1)          // SECOND OCCURANCE

// // //------------------------------------

// // let r = onew.indexOf('m',onew.indexOf('m',onew.indexOf('m')+1+1))     // THIRED OCCURANCE


// //"abc".indexOf('char',postion)
// //"cbnn".lastindexOf('a')
//------------------------



//input=aaabbc output=3a2bc
let pp = "aaaaabbbccdddddz"
let oo = ""
let count = 0

for (let i = 0; i < pp.length; i++) {
    count = count + 1
    if (pp[i] != pp[i + 1]) {
        oo = oo + count + pp[i]
        count = 0
    }
}
console.log(oo)


// ---------------------->
let bna = "chinmay"
console.log(bna.repeat(5))
let hhh =  "5a4b3c2e1f"
//"aaaaabbbbcccef"
let ns = hhh.split("")
let hhhh = ""
console.log(ns)
//'a'.repeat(5)
// Number 
//'b'.repeat(2) // 'bb'
console.log(Number('5'))
console.log(Number('C'))
console.log(ns)
for(let i = 0 ; i < ns.length ; i++){
    if(Number(ns[i])){
        hhhh = hhhh + ns[i+1].repeat(Number(ns[i]))
    }
}
console.log(hhhh)


