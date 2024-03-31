// let amol = {
//     fullname: "chinmaydeshpande",
//     age: 24,
//     rollNumber: 12,
//     family: {
//         father: "shirish Deshpande",
//         mother: "kanchan deshpande"
//     },
//     skills: ["java", "paython", "c"]
// }

// //Retrive the value(dot notation and bracket notation)
// console.log(amol.family.mother)
// console.log(amol['family']['father'])

// //update the value
// amol.skills.push("c++")
// console.log(amol)
// console.log(amol.skills)

// //adding new property
// amol.language = "marathi"
// console.log(amol)

// //delete the property
// delete amol.language
// console.log(amol)

// //destructering used=>
// //1. to reduce code size,one line code possible
// let fn = amol.fullname
// let age = amol.age
// let rn = amol.rollNumber

// let mayuri = {
//     fullname: "mayurikatwe",
//     age: 23,
//     rollNumber: 30
// }

// // let {fullname,age,rollNumber }=mayuri
// // console.log(fullname,age,rollNumber)

// //custom name
// let { fullname: fn, age: ag, rollNumber: rn } = mayuri
// console.log(fn, ag, rn)


//Nested object
// let poorve = {
//     id: 1,
//     title: "My story",
//     fullname: "poorva vyas",
//     author: {
//         first: "j.k",
//         lastName: "rolling"

//     }

// }
// let{id,author:{first,lastName}}=poorve
// console.log(id,first,lastName)

//if want to use custom name then
// let { id: xyz, author: { first: fn, lastName: ln } } = poorve
// console.log(xyz, fn, ln)

//Array destructuring

// let skills = ["java", "python", "js", "c#"]
// let [a, b, c, d] = skills
// console.log(a, b, c, d)

// let abhisha = {
//     id: 1,
//     title: 'My story',
//     fullName: "abhisha ",
//     skills: ["python", "java", "javscript"]
// }

// let{id,skills:[a,b,c]}=abhisha
// console.log(id,a,b,c)

// //if want to used custom name
// let{id:a1,skills:[a,b,c]}=abhisha
// console.log(a1,a,b,c)

// let arr = [1,2,[2,3],4,5]
// let [aa,bb,[cc,dd],ee,ff]=arr
// console.log(aa,bb,cc,dd,ee,ff)

// console.log(arr[2][arr[2].length-1])

// let kk = [22,3,4]
// console.log(kk[kk.length-1])


// arr2 = [1,2,[2,3],4,5]
// let [ab,bc,cd,de,ef,fg]= [1,2,[2,3],4,5].flat()
// console.log(ab,bc,cd,de,ef,fg)

//============================================================================================

//next day
//inside array if there is object then destruction will be as like
// let names = ["chinmay", "sameer", "ramesh", { firstName: "chinmaya", lastName: "deshpande" }]
// let [a, b, c, { firstName, lastName }] = names
// console.log(a, b, c, firstName, lastName)

//=============================================================================================
// let humana = {
//     fullName: "chinmay deshpande",
//     skills: ["python", "javascript", "css"],
//     family: {
//         father: "shirish",
//         mother: "kanchan"
//     }
// }

// let { fullName, skills: [a, b, c], family: { father, mother } } = humana
// console.log(fullName, a, b, c, father, mother)

//===============================================================================================

let humana1 = {
    fullName: "chinmay deshpande",
    skills: [{ age: 23, roll: 34 }, "javascript", "css"],
    family: {
        father: "shirish",
        mother: "kanchan"
    }
}

// let{fullName,skills:[{age,roll},b,c],family:{father,mother}}=humana1
// console.log(fullName,age,roll,b,c,father,mother)

let { skills: [{ age, roll }] } = humana1
console.log(age, roll)

//========================================================================
//Spread operator

//if we want noramally number then we used following approch
let num = [2, 4, 5, 6, 7, 9, 0]
function sum(a, b, c) {
    return a + b + c
}
// let result=sum(num[0],num[1],num[2])  //to overcome this drowback we used spread operator
// console.log(result)

let res = sum(...num)
console.log(res)

//===============================================================================================

let transactions = [23, 44, -55, -66, -77, 55, 66, 77, 88, 99]
// function sumFiveTransaction(a, b, c, d, e) {
//     return Math.abs(a) + Math.abs(b) + Math.abs(c) + Math.abs(d) + Math.abs(e)
// }
// console.log(sumFiveTransaction(...transactions))

//print last 5 element
// let newTranscation = transactions.slice(-5)
// function sumFiveTransaction(a, b, c, d, e) {
//     return Math.abs(a) + Math.abs(b) + Math.abs(c) + Math.abs(d) + Math.abs(e)
// }
// console.log(sumFiveTransaction(...newTranscation))

//by using reduce method sum
// let total = newTranscation.reduce((acc, el) => acc + Math.abs(el))
// console.log(total)

//===========================================================================================

//Rest Operator
// function add(...value){
//     return value.reduce((acc,el)=>el+acc)
// }
// let pk=add(1,2,3,4,5,6,7,8,9,0,11)
// console.log(pk)


// function add(a,...arr){
//     console.log(a)
//     console.log(arr.slice(0,a))
//     console.log(arr.slice(-a))
//  }
// add(3,"amol","chinmay","sunil","shashank","shushant")

//Next day=================================================================>

//spread operator applies on every iterator ?

// let [aaa,...ccc]= [1,2,3,4,5]
// console.log(ccc[0])
//===================================================================================

let ya  = [12,3,4]
let yb = [33,44,55]

let r = [...ya,...yb] //conctination with the help of spread operator //[12,3,4,33,44,55]

let [ra,...bbb] = [...ya,...yb]
console.log(ra)
console.log(bbb)
//=======================================================================================
// object

let  rone = {
    namev:'rahul',
    age:34,
    rollNum:23
}

let{namev,age,rollNum}=rone

// spread operator with obj

// rest operator with object
let{namev,...cccc}= rone
console.log(namev)
console.log(cccc)


