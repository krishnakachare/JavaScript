// let names = ["chinmay","poorva","chirag"]
// console.log(names.length)


// //Action  :- add the element at last
// // Return :- new length of string (number)

// // push 
// let rr = names.push('ram')
// console.log(names)
// console.log(rr)

// //Action  :- removes the last element
// // Return :- returns the removed element

// let ff = names.pop()
// console.log(names)
// console.log(ff)

// //Action  :- at the element at beginning of arrat
// //Return :-  returns the new length of array

// let cc = names.unshift("rahul")
// console.log(names)
// console.log(cc)


// //Action  :- at the element at beginning of array
// //Return :-  returns the new length of array

// let dd = names.shift()
// console.log(names)
// console.log(dd)


// // pop push shift unshift
// // --------------------------Array--------------
// //Action  :- to find the index of given element
// //Return :-  returns the index if found else return -1




// let fruits = ["apple","mango","banana","grapes"]
// // let ee = fruits.indexOf("apple")
// // let xx = fruits.indexOf("chiku")
// // console.log(xx)
// // console.log(ee)

// let userInput = "chiku"
// if(fruits.indexOf(userInput) >= 0){
//     console.log('Fruit available')
// }
// else{
//     console.log('Not available')
// }


// fruits = ["apple","mango","banana","grapes"]

// // Action -- reverse the array
// // Returns -- returns the same array

// // reversed
// let ss = fruits.reverse()
// console.log(fruits)
// console.log(ss)


// // sort 


// let num = [1,2,3,44,2,3,44,5,77,88,99,-23]
// num.sort()
// console.log(num)


// let nm = ["abhisha","chinmay","avinash","aara","zoya","chetan"]
// nm.sort()
// console.log(nm)

// // Not work in case of mixed array

// // push pop shift unshift indexOf reverse sort flat


// // flat 

// let bn = [[22,33,44],[55,66,77],[88,99,100]]
// // [22,33,44,55,66,77,88,99,100]

// console.log(bn[0][2])
// console.log(bn[2][2])
// let na = bn.flat()
// console.log(na)

// // includes - true

// //Action - search the element inside array 
// // Boolean -- if found then true else false

// let flowers = ["lily",'jasime',"mogra"]
// let eh = flowers.includes('Lily')
// console.log(eh)

// // join

// let sss = flowers.join('--')
// console.log(sss)
// console.log(typeof sss)
























// // // Methods 
// // //Action -- addition of two numbrs
// // // Return --number

// // function add(x,y){
// //     return x+y
// // }
// // let b = add(12,13)
// // console.log(b)



let names = ["chinmay", "rahul", "mayuri"]
console.log(names[0])


// push 

// Action : - add the element at last 
// Return :- length of array

let aa = names.push("ram")
console.log(aa)
console.log(names)

//["chinmay","rahul","mayuri","ram"]


// pop

// Action:- removes the element from  last 
// Return :- removed element only
let bb = names.pop()
console.log(bb)
console.log(names)

// unshift 
// Action : - Add the element at the beginning
// Return : - New length of array


let cc = names.unshift("maria")
console.log(names)
console.log(cc)

// shift
// Action : - Removes the element from the beginning
// Return : - removed element only

let dd = names.shift()
console.log(names)
console.log(dd)

let fruits = ["Flowers", "Lotus", "Sunflower", "Lily"]
// Indexof
// Action : - Find the index of element
// Return : - If element found then index else -1

let ee = fruits.indexOf("Lotus")
console.log(ee)

let ff = fruits.indexOf("MaryGold")
console.log(ff)


// Join

// Action :- joins element of array on parameter 
// return : -  string

let gg = fruits.join("_")
console.log(gg)
console.log(typeof gg)


// Includes --

// Action :- search for the element 
// return :- if found then true else false (Boolean)

fruits = ["Flowers", "Lotus", "Sunflower", "Lily"]
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 33, 44, 11, 44, 6667, -1]
let hh = fruits.includes("Lotus")
console.log(hh)

// sort

let ii = fruits.sort()
console.log(ii)

numbers.sort()
console.log(numbers)

// reverse

// Action :- reverse all the elements of the array
// return :- returns the array

let animals = ["cat", "dog", "monkey"]
let jj = animals.reverse()
console.log(animals)
console.log(jj)

//flat

let twoD = [[1, 2, 3], [44, 55, 66], [99, 67, 88]]
console.log(twoD[1][1])



//Actions  : combines all element into single array
//Returns : array only
let kk = twoD.flat()
console.log(kk)


///------   Functions --------------------------


// function add(x,y){
//     console.log(x+y)  //??
//     return x + y 
// }

// let g = add(12,13)
// console.log(g)  //?


// let add = 


// fn = add 

// fn = function(x,y){
//     return x+y
// }


// function as a parameter to another function

// function addB(fn){
//     let r =  fn(12,13)
//     return r
// }

// let mm = addB(add)
// console.log(mm)


// console.log(add) // printing function
// add(12,133) // calling function
//pop  push shift unshift reverse indexOf flat join sort includes 

// -----------program one



let birthYear = [1990, 1989, 2001]
let ages = []

//console.log(2021-1990)
// [31,32,20]

for (let i = 0; i < birthYear.length; i++) {
    // console.log(i)
    //console.log(2021 -birthYear[i])
    let age = 2021 - birthYear[i]
    ages.push(age)

}

console.log('---Ages--------')
console.log(ages)


//-------------------------------------
// program -2 filter


let ages2 = [11, 13, 15, 16, 44, 34, 55, 56, 23, 44, 66]
//[] // obove 
let above25 = []
for (let i = 0; i < ages2.length; i++) {
    if (ages2[i] > 25) {
        above25.push(ages2[i])
    }
}

console.log(above25)
//console.log(7>8)

// program - 3


let marks = [22, 33, 44]

let sum = 0

for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i]  // sum --> 22--> 55
}
console.log(sum / marks.length)








// Map
birthYear = [1990, 1989, 2001]
//[31,32,20]
let xx = birthYear.map(function (el, index, arr) {
    //console.log(el,index,arr)
    return 2021 - el
})
console.log('------Map--------')
console.log(xx)


// Filter
ages2 = [11, 13, 15, 16, 44, 34, 55, 56, 23, 44, 66]
let rrrr = ages2.filter(function (el, index, arr) {
    return el > 25
})
console.log(rrrr)


marks = [22, 33, 44]
// Reduce
let jkl = marks.reduce(function (sum, el, index, arr) {
    return sum + el
}, 0)
console.log(jkl / marks.length)

//------------------------
let transactions = [13, 14, 55, -56, 66, -88, 99, 150, 556, -131]

// deposit 
// withdrawl

// filter and reduce


transactions = [13, 14, 55, -56, 66, -88, 99, 150, 556, -131]

//[13,14,55,66,99,150,556]
//[-56,-88,-131]
// filter reduce


//filter - Array 
// reduce - single

let depoist = transactions.filter(function (el, index, arr) {
    return el > 0
}).reduce(function (acc, el) {
    return el + acc
}, 0)

let withdrawl = transactions.filter(function (el, index, arr) {
    return el < 0
}).reduce(function (acc, el) {
    return el + acc
}, 0)
console.log(depoist, withdrawl)


//"chinmay".toUpperCase().toLowerCase().length.toUpperCase()

// let depoist = transactions.filter((el) => el > 0)
//     .reduce((acc, el) => el + acc, 0)

// let withdrawl = transactions.filter((el) => el < 0)
//     .reduce((acc, el) => el + acc, 0)

// console.log(depoist, withdrawl)

// push pop unshift  shift join filer map reduce reverse sort join indexOf includes

// flat


//forEach

let students = ["chinmay", "poorva", "abhisha", "amol"]
//'Welcome chinmay!'
let jkllk = students.forEach(function (el, index, arr) {
    console.log(`welcome ${el}!`)
})
console.log(jkllk)


// ---->


let students2 = [

    {
        fullName: 'chinmay',
        age: 30

    },

    {
        fullName: 'poorva',
        age: 27

    },

    {
        fullName: 'poorva',
        age: 27,
        skills: ["python", "javascript", "c++"]


    },

    {
        fullName: 'poorva',
        age: 27,
        skills: ["python", "javascript", "c++"],
        parents: {
            father: "shirish",
            mother: "kanchan"
        }

    }

]
console.log(students2[3].parents.mother)
students2[3].parents.sister = "gauri"
console.log(students2[3])




let students3 = [
    { fullName: 'chinmay', age: 30},
    { fullName: 'poorva', age: 23 },
    { fullName: 'abhisha', age:33 }

]

console.log('******************')
// find
let gfgf = students3.find(function(el){
    return el.fullName == "abhs"
})
console.log(gfgf)

// find

let gfga = students3.findIndex(function(el){
    return el.fullName == "abhisha"
})
console.log(gfga)
// forEach find findindex


// every some ----> boolean true or false


let numbes = [33,43,55,66,77,23,22]

let rrrrr = numbes.some(function(el,index,arr){
    return el > 70
})
console.log(rrrrr)

let rrrrra = numbes.every(function(el,index,arr){
    return el > 70
})
console.log(rrrrra)

let rrrrrab = numbes.every(function(el,index,arr){
    return el > 10
})
console.log(rrrrrab)


// concat 

let qaq  =  [1,2,3]
let aqa = [4,5,6]
let wew = aqa.concat(qaq)
console.log(wew)

// -------------------------->


let sss = [2,3,5,6,6,7,8]
//sss.slice(startposition,endposition) (not included)
// let rer = sss.slice(1,sss.length)
// console.log(rer)


// splice(startpositon,numofElementsDele,add1, add2)
let hha = sss.splice(1,2,23,24,34,35,35,35,3555)
console.log(hha)
console.log(sss)

// let s = 10
// console.log('s')
// console.log(s)
// console.log(students2[1]['fullName'])
// console.log(students2[1].fullName)
// console.log(students[2].skills.length)
// ------------------------>
let y = [22,33,44,55,66,77,88]
console.log(y.forEach(function(el,index){
    if(index>1){
        console.log(el)
    }
}))



// let h = [12,133,33,3,44,55,-23]
// let max = h[0]
// let min = h[0] 

// for(let i = 0 ; i < h.length ; i++){

//     if(h[i] > max){
//         max = h[i]
//     }
//     else if(h[i] < min){
//         min = h[i]
//     }

// }
// console.log(max,min)
let g = "aagbhaAbhbhrrttByujhhBHHHHhj"
let cal = {}
g = g.toLowerCase()
for(let i = 0 ; i < g.length ; i++){
    if(cal.hasOwnProperty(g[i])){
        cal[g[i]] = cal[g[i]] + 1
    }
    else{
        cal[g[i]] = 1
    }
}
console.log(cal)
let gaa = "123AAAAbaca34@353543534535354sca"
let al = 0
let num = 0
let sc = 0

for(let i = 0 ; i < gaa.length ; i++){
    if(Number(gaa[i])){
        num = num + 1
    } 
    else if(typeof gaa[i] === "string"){
        al = al + 1
    }
    else{
        sc = sc + 1
    }
}
console.log(al)
console.log(num)

let caa = "123AAAAbaca3435354@@2222!!!&&&&3534535354sca"

let aaa =0
let nn = 0 
let ss = 0


for(let i = 0 ; i < caa.length ; i++){
    if(caa[i].charCodeAt() >= 48  && caa[i].charCodeAt() <= 57){
        nn = nn +1 
    }
    else if(caa[i].charCodeAt() >= 97 &&  caa[i].charCodeAt() <= 122){
        aaa = aaa +1
    }
    else if(caa[i].charCodeAt() >= 65 &&  caa[i].charCodeAt() <= 90){
        aaa = aaa +1
    }
    else {
        ss = ss + 1 
    }
}
console.log(nn,aaa,ss)




















// s = 'AAAAAC23456CCCDDZ'
// arr = s.split('')

// let number = 0;
// let char = 0;
// arr.forEach(arr => {
//   if (Number(arr)){
//     number = number+ 1
//   } 
//   else {
//     char = char +  1
//   }
// })

// console.log(number, char)


// s = 'a1b2c3d4e5f6g7hh'
// abc = s.split('')
// num = 0
// alphabet = 0

// abc.map((ele,i,arr) => {
//     if(Number(ele)){
//         num = num + 1
//     }else{
//         alphabet = alphabet + 1
//     }
// })

// console.log(num, alphabet)




// Number("A")

// if(undefined){
//     console.log("hello")
// }
// else {
//     console.log('bye')
// }


// if(0){
//     console.log("hello")
// }
// else {
//     console.log('bye')
// }









// {
//     a:1

// }














// 


// let person = {

//     age:23,
//     namee:'chinmay'


// }

// console.log(person.hasOwnProperty('as'))

















// {
//     a:2,
//     r:2,
//     t:2

// }


















// let numbers = [47, 87,2, 5, 43, 50, 21, 89, 33]

// var highest = 0
// var lowest = 0
// for (var i = 1; i < numbers.length; i++) {

//   if (numbers[i] > highest) {
//     highest = numbers[i];
//   } else if (numbers[i] < lowest) {
//     lowest = numbers[i];
//   }
// }
// console.log(`Highest Number from Array: ${highest}`);
// console.log(`Lowest Number from Array: ${lowest}`);








































// let j = [33,44,55,66,77,88,99]

// console.log(j[0])
// console.log(j[3])


// for(let i = 0 ; i < j.length ; i++ ){
//     //console.log(i)
//     console.log(j[i])
// }







//let a = {a:23,b:34} 










































































