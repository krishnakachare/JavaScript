//let aee = ["chinmay","deshpande",12,13]

//console.log(aee[1])


let aee = {
    firstName: "chinmay",
    lastName: "deshpande",
    age: 12,
    rollNumber: 12
}
// C R U D
// Dot notation 

// Retrive the value
//objName.property
console.log(aee.firstName)
console.log(aee.age)

// Bracket notation
console.log(aee['firstName'])
console.log(aee['age'])

// Update the value of property 
aee.age = 30
aee['age'] = 33
console.log(aee)

// Adding the value 

aee.language = "Marathi"
aee['address'] = "B-69"
console.log(aee)

// dele 

delete aee.address
console.log(aee)

// for in 
// dot notation does not in loop


for (let key in aee) {
    console.log(key, aee[key])
}
console.log(aee.hasOwnProperty('firstNam'))


// ------ 

let aaaa = "aaabbaaccee"

// let rr = {
//     a: 5,
//     b: 2,
//     c: 2,
//     e: 2
// }


// let hnn = { }
// for (let i = 0; i < aaaa.length; i++) {

//     if (hnn.hasOwnProperty(aaaa[i])) {
//         hnn[aaaa[i]] = hnn[aaaa[i]] + 1
//     }
//     else {
//         hnn[aaaa[i]] = 1
//     }

// }
// console.log(hnn)




//{
    // a:2,
    // m:1,
    // o:1,
    // l:1

//}
let a = "cmolc"

let b = {

    c:1,
    m:1,
    o:1,
    l:1

}

for(let i = 0 ; i < a.length ; i++){
    if(b.hasOwnProperty(a[i])){
        b[a[i]] = b[a[i]]+1
    }
    else {
        b[a[i]] = 1
    }

}










// b.name = "chinmay" // adding the property
// b.name = "poorva" // updating the property
// console.log(b.name)// retriving the property
// console.log(b.hasOwnProperty('age')) // verify the property exist
// console.log(b)


















