

// Number , Boolean , String , Array , Objects 

let fullName = "chinmay"
console.log(typeof fullName)

// String stores the value by index
console.log(fullName[0])
console.log(fullName.length)
console.log(fullName[fullName.length-1])
// Property ---Objects 
for(let i = 0 ; i < fullName.length ; i++){
    //console.log(i)
    console.log(fullName[i])
}

console.log('*********************')
for(let i = fullName.length-1 ; i >= 0 ; i--){
    console.log(fullName[i])
}


// -----------------------------------------

//String 

//let firstName = "chinmay"
// console.log(firstName)

// console.log("chinmay")
// console.log('chinmay')

// console.log('chinmay loves "javascript" ')
// console.log("chinmay's book")

// concatination


// console.log('My first name is'+" "+firstName)
// // String interpolation 
// console.log(`My firstname  is ${firstName}`) // string
// console.log(`My firstname  is ${8+9}`)


// Conversion

let firstName =  "chinmay"
let age = 20
let rollNumber = 40
console.log(rollNumber + firstName + age) // 40chinmay20
console.log(rollNumber+age+firstName)
console.log(firstName + rollNumber + age)


//Number + String ---- String 
// Number + Number ---- Number 
// String + Number  ---- String 
// String + String ----- String



// Method --- action return 

let language = "Marathi"
let upper = language.toLocaleUpperCase()
console.log(upper)

// toLowerCase
let h = language.toLowerCase().toUpperCase().length // 7
console.log(h)


console.log('Starts with and ends with')
// starts with // endswith ---- // Javascript  (also works with substring)

let lastName = "Deshpande"
let checkstart = lastName.startsWith('d')
console.log(checkstart)

let checkend = lastName.endsWith('de')
console.log(checkend)

// ---------------------------------------------------------

// include

let sister = "gauri"
console.log(sister.includes('gu'))



// --- search fruit  (Webapplication) -- 90 % string automation

let fruits = "apple banana mango grapes chiku"
let userInput = "mango"
if(fruits.includes(userInput)){
    console.log('Fruit available')
}
else{
    console.log('Fruit not available')
}

// recast/logn.in  -- before login
// recast/dashboard -- after login
// cy.url --recast/dashboard 

// slice 
// 0   1   2   3   4   5   6
// c   h   i   n   m   a   y
//-7  -6  -5  -4  -3  -2  -1            
let month = "chinmay"
// console.log(month[-1])
let n = month.slice(4,7) // end value is not included
console.log(typeof n)
console.log(n.toLowerCase())

//
console.log(month.slice(-5,-1)) // inma
console.log(month.slice(-1,-6))
console.log(month.slice(3,-2)) // nm
// note starting position should be before ending position
console.log(month.slice(-3))

// substring  ---
let  homeAddress = "Gardenia society"
let substring = homeAddress.substring(-4,5) // index
console.log(substring)


//  toUpperCase(),toLowerCase(),includes -- true , startswith , endswith ,slice
// substring typeof


// 

let firstNameNew = "chinmay deshpande"
let hh = firstNameNew.substr(4,4)
console.log(hh.length)


// 

let b = ["chinmay:7709192441","sonali:6609192441","poorva:7876598912"]
let ba = ["chinmay","sonali","poorva","amit"]


let gga = ba.filter(function(el){
    return el.length < 6
})
console.log(gga)






// Using for loop
// let mob = []

// for(let i = 0 ; i < b.length;i++){
//     mob.push(b[i].substr(-11))
// }
// console.log(mob)


//using map

let yy = b.map((el)=>{
    return el.substr(-10)
})
console.log(yy)

//---------------------
 
// trim


let newFirstName = " chinmay deshpande "  // camelcase
let trimmed = newFirstName.trim()
console.log(trimmed.length)
console.log(newFirstName.length)
console.log(trimmed)

// -------------------
//replace


let city = [
    "I live in Pune city I live in Bombay",
    "I live in Pune city I live in Nagpur"
]

let updatedCity = []

// let cityName = city.replace("Pune","nagpur")
// console.log(cityName)

for(let i = 0 ; i < city.length ; i++){
    if(city[i].includes('Bombay')){
        updatedCity.push(city[i].replace('Bombay','Mumbai')) 
    }
    else if(city[i].includes('Nagpur')){
        updatedCity.push(city[i].replace('Nagpur','Wardha')) 
    }
}
console.log(updatedCity)

// Map 

// CharAt
let ha = "chinmay"
let j = ha.charAt(2)
console.log(j)


// CharCodeAt
let had = "chinmaY"
let aaa = had.charCodeAt(6)
console.log(aaa)


// Split --
console.log('6' == 6) // true
console.log('6' === 6) // false

let yaa = "mango banana chiku papaya"

let uu = yaa.split(" ")
console.log(uu)

let bart = "chinmay:7709192441"
console.log(bart.split(":"))


let fullNameSplit = "Chinmay Deshpande"
//Welcome Chinmay !
//["chinmay" ,"deshpande"]
console.log(`Welcome ${fullNameSplit.split(" ")[0]} !`)

// -----------
console.log("7709192441".padStart(14,"+91 "))
console.log("7709192441".padEnd(14,"+91 "))

// 000001234
// 000012345
// 000123456



























































// Logical


// action?? --- uppercase
// string ---- 

//Function declaration,function expression,arrow 


// string  + string --- >> string
// Logical 

// reversed 

// let newName  = "chinmay"
// let reversedString  = ""
// for(let i = 6; i >= 0 ; i--){
//     reversedString = newName[i] +  reversedString  // chinmay 
// }

// count of vowels in string


// let count = 0
// for(let i = 0 ; i < newName.length ; i++){
//     if(newName[i] == "a" ||  newName[i] == "e" || newName[i] == "i" || newName[i] == "o"||newName[i] == "u"){
//             count = count + 1
//     }

// }
























let vowels = "aeiou"




// ----->












// Logical 30 ------>
let c  = "a4b2"
//aaaabb
let y = "aaaabbbcc"
//a4b3c2





























