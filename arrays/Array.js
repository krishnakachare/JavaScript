
// Push

let students = ["ram","raj","ramesh"]
updatedStudets = students.push("rahul")
console.log(updatedStudets)

// Pop
updatedStudents = students.pop()
console.log(updatedStudets)

//Shift
updatedStudents = students.shift()
console.log(updatedStudets)

// Unshift
updatedStudents = students.shift()
console.log(updatedStudets)

// Indexof
let firstName = students.indexOf("ram")
console.log(firstName)
let noInList =students.indexOf("rakesh")
console.log(noInList)

// forEach
students = ["ram","raj","ramesh"]
let ne = students.forEach(function(el,index,arr){
    console.log(`Welcome ${el}!`)
})
console.log(ne) // undefined

// Map 

// ['Welcome ram ','Welcome raj','Welome ramesh']

let ne2 = students.map(function(el,arr,index){
    return `Welcome ${el}`
})
console.log(ne2)

// ['raj','ram']

// Filter
let ne3 = students.filter(function(el,arr,index){
    return el.length === 3
})
console.log(ne3)

// Reduce

let marks = [100,200,300]
let ne4 = marks.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(ne4)


// some every  --- true or false

//some --true 

// every - true


students = ["ram","raj","ramesh"]
let ne5 = students.every(function(el,index,arr){
    return el.length > 5
})

console.log(ne5)
let ne6 = students.some(function(el,index,arr){
    return el.length > 5
})
console.log(ne6)



// find ---  array element ?--- condition 


let students2 = [

    {
        firstName:"chinmay",
        age:34
    },

    {
        firstName:"chinmay2",
        age:33,   
    }

]

let ne7 = students2.find(function(el){
    return el.age == 33
})
console.log(ne7)

// findIndex

let ne8 = students2.findIndex(function(el){
    return el.age == 33
})
console.log(ne8)


console.log(5 + 6 - 7)


// Associavity of operation

let twoD = [[1,2,3],[4,5,6]] // [1,2,3,4,5,6]
console.log(twoD[0][0])
console.log(twoD[1][twoD[1].length-1])

let h = twoD.flat()
console.log(h)

// sort (sort with string works differently -----)
let markss = [-1,1,2,3]
markss.sort()
console.log(markss)

// splice
let names = ["One","Two","Three"]
let ne9 = names.splice(1,2,"four","five")
console.log(names)

//fill

let r =[1,2,3,3,4,5,6]
console.log(r.length)
r.fill("d",2,7) // 6th --- lastindex
console.log(r)



//7// [1,2,5,5,5]
// let j = r.fill('a',2,5) // end value  not included
// console.log(r)


let u = [1,2,4]
let y = [3,4,5]

u.concat(y) //[1,2,4,3,4,5]
let ne10 = y.concat(u)//[3,4,5,1,24]
console.log(ne10)


// includes -- boolean

let fruits = ["apple","mango","chiku"]
console.log(fruits.includes('banana'))


let j = ["chinmay","deshpande"]

let yc = j.join(" ")
console.log(typeof yc)

