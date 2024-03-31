

// // // Array

// // // Number array
// // let numbers = [33,44,55,66,77,88]
// // // String 
// // let name = ["chinmay","john","ram"]
// // // Boolean 
// // let isPassed = [true , false , true , false]
// // // Mixed 
// // let person = ["chinmay","deshpande",29,"Hindi","Marathi"]

// // // Arrays stores the value by index
// // console.log(person[0])
// // console.log(person[1])
// // // ---------------------------------------

// // // Intialization     //Condition           // Increment
// // for(let i = 0 ; i < person.length ;i++){
// //     //console.log(i)
// //     console.log(person[i])  // print
// // }
// // // Reverse the array

// // // person.length - 1  will always be lastIndex 
// // for(let i = person.length-1; i >=0 ;i --){
// //         //console.log(i)
// //         console.log(person[i])
// // }
// // // Slicing in array 
// // // 2 Dimensional array
// // let person = ["chinmay","deshpande",29,["python","javascript","css"],["Hindi","Marathi"]]

// // console.log(person[4][1])
// // let lan = person[4]
// // console.log(lan[1])
// // console.log(person[3].length)

// // // Slicing 

// // let languages = ["Marathi","Hindi","Urdu","Telgu","English"]
// // // slice --- return array  ----- start,end (not included)
// // console.log(languages.slice(0,3))
// // console.log(languages.slice(1,3))
// // console.log(languages.slice(3,5))
// // console.log(languages.slice(1,))

// // //Push ---  add element at the  end of array and returns the new length 
// // //undefined
// // let v = languages.push("Spanish")
// // console.log(languages)
// // console.log(v)

// // // Pop

// // let u = languages.pop()
// // console.log(languages)
// // console.log(u)

// // // unshift

// // let added = languages.unshift('French')
// // console.log(languages)
// // console.log(added)

// // //  shift

// // let rm = languages.shift()
// // console.log(languages)
// // console.log(rm)

// // slice method -->  return array

// //Array.slice(startpoint,endpoint)


// //              0         1       2      3         4
// let names = ["chinmay","aakash","ram","laxman","sameer"]
// let newArr = names.slice(1,4)
// console.log(newArr)

// let yearOfBirth = [2002,1996,1998,2004,2006,2008]
// // // Age ? 2021 - 2002
// // //[19,25,23,.........]

// // //push
// // let age = []
// // for(let i = 0 ; i < yearOfBirth.length ; i++){
// //     //console.log(2021- yearOfBirth[i]) 
// //     age.push(2021-yearOfBirth[i])
// // }
// // console.log(age)



// // map ----  return new array 

// yearOfBirth = [2002,1996,1998,2004,2006,2008]
// //[ 19, 25, 23, 17, 15, 13 ]

// el - current ---- 2002
// index - 0 
//[2002,1996,1998,2004,2006,2008]

// el - 1996
// 1

// let age = yearOfBirth.map(function(el,index,arr){
//     return 2021-el
// })
// console.log('-------')
// console.log(age)


// Filter 

//let ages = [22,35,66,77,87,44,55,66,]
//[66,77,87,55,66]
// let ageGrFifty = []
// for(let i = 0 ; i < ages.length ; i++){
//     if(ages[i] > 50){
//         ageGrFifty.push(ages[i])
//     }
// }
// console.log(ageGrFifty)

// Filter--

// elements - action
// return - array 

// let r = ages.filter(function(el,index,arr){
//     return el > 50
// })
// console.log(r)

// let r = ages.filter((el,index,arr) =>el > 50)
// console.log(r)


// sum 


// let marks = [100,200,300,400,500,600,700]
// let sum = 0
// for(let i = 0 ; i < marks.length ; i++){
//     sum = sum + marks[i]   // 100
// }
// console.log(sum)

// //reduce
// let t = marks.reduce(function(acc,el,index,arr){
//     return acc +  el

// },0)
// console.log(t)


// // forEach - returns nothing 

// let namesofStudents = ["chinmay","sarika","poorva","amol","aviraj"]

// let tt = namesofStudents.forEach(function(el,index,arr){
//     console.log(`Welcome ${el}`)

// })
// console.log(tt)


// map , reduce , filter , forEach
// return - array , single, array , undefined



// Array


let names = ["chinmay","amol","poorva","ramesh","amit"]
let fourCharLetter = []


// for(let i = 0 ; i < names.length ; i++){
//     if(names[i].length == 4){
//         fourCharLetter.push(names[i])
//     }
// }
// console.log(fourCharLetter)



// filter - element filter action , return - array
// marks 


let fourChar = names.filter(function(cv,index,arr){
    return cv.length == 4
})
console.log(fourChar)

let marks = [[77,78,80],[72,63,55],[66,77,88]]
let y = marks.map(function(cv,index,arr){
    return cv.reduce(function(acc,cv,index,arr){
        return acc + cv
    },0)

}).filter(function(el){
    return el > 200
})
console.log(y)

// 10 -- 10
// -10 -- 10

Math.abs(-10)
// Bank transations 
let transactions = [200,-100,900,-550,770,778]


let withdraw = transactions.filter(function(el){
    return el < 0
}).reduce(function(acc,el){
    return acc + el
}) 


// console.log(withdraw,depoist)

let depoist = transactions.filter(function(el){
    return el > 0
}).reduce(function(acc,el){
    return acc + el
},0)

let totalTransactions = null ; 
totalTransactions = transactions.reduce(function(acc,el){
    return acc + Math.abs(el)
})
console.log(totalTransactions)



// skills 

let students= [ ['chinmay',["python","html"]] ,['amol',["sql","html","css"]]]

//[[chinmay,python,html] ,[amol,sql,html css]]
// let skillsGrt2 = students.map(function(el){
//    // ['chinmay',["python","html"]]

// })
// console.log(skillsGrt2)


let cal = [[1,33,44],[44,55,66]]
let cal2 = cal.flat()
console.log(cal2)


// console.log(withdraw,depoist)
// console.log(Math.abs(-10))
// maps

//-------------------------------------------


// flat


// let dArray = [[1,2,3],[4,5,6]]
// console.log(dArray)
// let single = dArray.flat()
// console.log(single)


//pop push shit unshift forEach map filter reduce flat slice

//indexof
//             0        1       2
// let lang = ["Marathi","Hindi","Germany"]
// let r = lang.indexOf("English")
// console.log(r)

// If present returns index 
// If not present returns -1

// let fruits = ["apple","banana","grapes","chiku","papaya","dragonfruit"]
// let userInput = prompt('Which fruit you wish to buy?') // string - apple // mango
// if(fruits.indexOf(userInput)>=0){
//     console.log('Fruit available')
// }
// else{
//     console.log('Fruit not available')
// }


// -------------------------------------



// Condition statements 


// if(condition){
//     console.log('hello')
// }
// else{
//     console.log('hello2')
// }


// if(condition){
//     console.log('hello')
// }
// else if(codition){
//     console.log('Hello 2')
// }
// else{

// }

// conditional statements??

//single input ------ multiple output

//Syntax

// if(condition){
//     // statements
// }
// else{
//     // statements 
// }

// truthy or false

//0  -- false

// -1 ,2 - true

// null , undefined - false

// special symbol as string and considered - true 




// if(0){
//     console.log('hello')
// }
// else{
//     console.log('hello2')
// }

// if(-1){
//     console.log('hello')
// }
// else{
//     console.log('hello2')
// }


// if(null){
//     console.log('true')
// }
// else{
//     console.log('false')
// }


// if('!'){
//     console.log('true')
// }
// else{
//     console.log('false')
// }


// // 
// // if(1 ==1 ){
// //     console.log("true")
// // }
// // else{
// //     console.log('false')
// // }

// // age 

// // age > 10 - drive
// // age > 5 <= 10 - swimming
// // age < 5 -- stay at home

// //AND

// // 0 0 - 0
// // 0 1 - 0
// // 1 0 - 0
// // 1 1 - 1

// //OR


// // 0 0 - 0
// // 0 1 - 1
// // 1 0 - 1
// // 1 1 - 1


// //Not

// //0 -1
// //1-0



// //And 

// // True and True --- True
// // True and False --- False
// // False and True --- False
// // False and False --- True

// //Or 
// // True or True --- True
// // True or False --- False
// // False or True --- False
// // False or False --- True


// //let age = Number(prompt('please enter age?')) // 6
// // if(age > 10){
// //     console.log('You can learn driving .....')
// // }
// //     //         True
// //         //True  //And   // True
// // else if(age > 5 && age <= 10){
// //     console.log('Swimming')
// // }
// // else{
// //     console.log('Stay at home')
// // }

// //------------
// // let age = Number(prompt('please enter age?')) // 6
// // if(age > 10){
// //     console.log('You can learn driving .....')
// // }
// //     //         True
// //       //True  //And   // True
// // if(age > 5 && age <= 10){
// //     console.log('Swimming')
// // }
// // else{
// //     console.log('Stay at home')
// // }


// // 4 - 4










// // String Number('10') -- 10


// //'10' string 
// // 10 - number


// let fruit = ["apple","grapes","mango"]

// // array -- []
// // Methods ---

// //action perform

// // return 

// let n = [1,2,3]

// let r = [[1,23,4][5,6,7]]

// let y = r.flat()
// // start point , endpoint (not included)
// let r = n.slice(1,3)
// let r = n.indexOf(2)
// let b = n.reduce(function(acc,el,index,arr){
//         return acc + el
// },0)

// let firstIndex =  fruit.map(function(el,index,arr){
//     return el[0]
// })

// let h = fruit.filter(function(el,index,arr){
//     return el.length > 5
// })
// fruit.forEach(function(el,index,arr){
//     console.log(`Fruit: ${el}`)
// })

// let removeLastElement= fruit.pop()
// let addToLastElement= fruit.push("papaya")
// let removeFirstElement = fruit.shift()
// let addAtFirst = fruit.unshift("chiku")

// console.log("chinmay"[0])


// let arrOne = [1,2,4,5]
// let arrTwo = [3,4,5,6]


// let ys = arrOne.concat(arrTwo)
// console.log(ys)
// console.log(arrOne)
// console.log(arrTwo)
// console.log(arrTwo.concat(arrOne))


// sort  string 

// let namesStudent = ["kirann","karan","vaishali","aviraj","akshay"]
// namesStudent.sort()
// console.log(namesStudent)

// reverse 

// let namesStudent = ["kirann","karan","vaishali","aviraj","akshay"]
// namesStudent.reverse()
// console.log(namesStudent)


// fill 

// let arr = [1,2,3,4,5,6,77,77,77,77,77,77]
// // fill(value to be filled , start , end(not included))
// arr.fill("chinmay",1,6)
// console.log(arr)



// End value included in splice
// let d = ['chinmay',"abhisha","komal","mayuri","poorva"]
// d.splice(1,4,"ram","laxman","rasika")
// console.log(d)
// //['chinmay',"ram","laxman","mayuri","poorva"]


//obj


let person = ["chinmay","deshpande",30,24]

console.log(person[2])
// object
// descriptive

// obj does store the value by index

let personA = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:30,
    id:24
}

// Dot notation 
console.log(personA.firstName)
// bracket notation
console.log(personA['lastName'])

let studentA = [
    {
        firstName:"chinmay",
        lastName:"deshpande",
        age:30,
        id:24
    },

    {
        firstName:"kirann",
        lastName:"kale",
        age:60,
        id:44
    },

    {
        firstName:"akshay",
        lastName:"dikare",
        age:23,
        id:45
    }
]


// Findindex


// let g = studentA.findIndex(function(el,index,arr){
//     return el.firstName == "kirann"
// })
// console.log(g)


// let g = studentA.findIndex(function(el,index,arr){
//     return el.id == 45
// })
// console.log(g)


// let g = studentA.find(function(el,index,arr){
//     return el.id == 24
// })
// console.log(g)


// includes 
console.log("chinmay".includes('e'))
console.log("chinmay".includes('ch'))

// some , every -- true or false

console.log('----')
let agesA = [11,5,16,14,15]
let rt = agesA.every(function(el,index,arr){
    return el > 10
})
console.log(rt)
//--------------------------
console.log('----')
let agesB = [4,5,4,3,3]
let rta = agesB.some(function(el,index,arr){
    return el > 10
})
console.log(rta)

//----------------------------

// Join 

// let fullName = ["chinmay","deshpande"]
// let named = fullName.join("-")
// console.log(typeof named)
// console.log(named)

//---------------------



let e = [[1,3,4],[22,33,44],[66,77,88]]

//[1,3,4,22,33,44,66,77,88]

// let gg = e.flat().map(function(el){
//     return el + 10
// })
// console.log(gg)

// let rr = e.flatMap(function(el){
//     return el + 10
// })

// console.log(rr)

let namesD = [["chinmay","deshpande"],["poorva","vyas"],["amol","rao"]]
//[["chinmay deshpande"],["poorva vyas"],["amol rao"]]
// ["chinmay deshpande","poorva vyas" ,"amol rao"]

let gaw = namesD.flatMap(function(el){
    return el.join(" ")
})

//[]

console.log(gaw)









// console.log(studentA[2].age)
// console.log(studentA[2]['age'])
// console.log(studentA[1].firstName)

