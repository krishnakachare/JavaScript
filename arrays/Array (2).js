
/*let names = ["sonu", "monu", "tonu"]
console.log(names.length)

//Push method

//Action:add the element at last
//Return:new length of string(number)

let rr = names.push("ram")
console.log(names)
console.log(rr)

//Pop method

//Action:remove the last element
//Return : retirn the removed element

let ff = names.pop()
console.log(names)
console.log(ff)

//UnShift method

//Action:Add the element at the begining of array
//Return:returns the new length of array

let gg = names.unshift("mayu")
console.log(names)
console.log(gg)

//Shift methods

//Action: Remove the element at the begining of 
//Return:Return the element which is removed

let kk = names.shift()
console.log(names)
console.log(kk)

//index of

//Action: To find the index of given element
//Returns: Return index if found else give -1

let fruits = ["Apple", "Mango", "Banana", "Grapes"]
//let zz=fruits.indexOf("Apple")
//let xx=fruits.indexOf("Grapes")
//console.log(zz)
//console.log(xx)

/*let market="Apple"
if(fruits.indexOf(market)!=0){
    console.log("fruit not aviable")}
    else{
        console.log("fruit avilable")
    }

let shop = "orange"
if (fruits.indexOf(shop) == 0) {
    console.log("santra aviable")
}
else {
    console.log("santra not avialable")
}

//Reverse Method
//Action: Reverse the given array
//Return: Return array only

let a1 = fruits.reverse()
console.log(a1)

//Sort Method
//Action : Sort the the element from array
//return : the array
let num = [11, 55, 97, 86, 04, 85, 859, 383, 575, 8995]
let a2 = num.sort()
console.log(a2)

//Flat 
//Action: Combine all elements into single array
//Return: Array
let arr = [[1, 2, 3], [4, 5, 7], [8, 9, 11]]
let a3 = arr.flat()
console.log(a3)

//include 
//Action: Search te element present in array
//retun: give boolean if found gve true else false
//let flower=["lily","rose","jasmin","lotus"]
//let a4=flower.includes( "lily")
//console.log(a4)

//join
//Action: Join the element with given parameter
//retun: string
let flower = ["lily", "rose", "jasmin", "lotus"]
let a6 = flower.join("--")
console.log(a6)

//Function

function add(x, y) {
    return (x + y)
}
//let g1 = add(12, 13)
//onsole.log(g1)*/

/*function add(x,y){
    console.log(x+y)
}
let g2=add(12,13)
console.log(g2)

function add1(fn){
    let r=fn(12,13)
    return r
}
let mm=add1(add)
console.log(mm)*/

//let birthyear = [1991, 1089, 2001]
//let ages = []

//for (let i = 0; i < birthyear.length; i++) {
//let age = 2021 - birthyear[i]
//ages.push(age)

//}
//console.log(ages)

/* let age=[11,13,24,87,56,90,33,36]
let above25=[]
for(let i=0;i<age.length;i++){
    if(age[i]>25){
        above25.push(age[i])
}
}
console.log(above25) */

/* let marks=[22,33,44,77,44,66]
let sum=0
for(let i=0;i<marks.length;i++){
    sum=sum+marks[i]
}
console.log(sum/marks.length) */

/* console.log("=====================================================")

//Map method

let birthyear = [1991, 1089, 2001] */
/* let age=birthyear.map(function(el,index,arr){
   return 2021-el
})
console.log(age) */

/* let age=birthyear.map(function(el,index,arr){
    return 2021-el
})
console.log(age) */

//filter method
/* let age=[11,13,24,87,56,90,33,36]
let above25=age.filter(function(el,index,arr){
    return el>25
})
console.log(above25) */

//reduce method
/* let marks=[22,33,44,77,44,66]

let sum=marks.reduce(function(acc,el,index,arr){
    return acc+el
},0)
console.log(sum/marks.length)

//for each()
let student=["chinmay","poorve","abhi","amol"]
let xxx=student.forEach(function(el,index,arr){
    console.log(`Welcome ${el} !`)
})
console.log(xxx) */
/* 
let student2 = [
    {
        fullname: "chinmay",
        age: 30
    },
    {
        fullname: "poorva",
        age: 27
    },
    {
        fullname: "poorva",
        age: 27,
        skills: ["python", "java", "c++"]
    },
    {
        fullname: "poorva",
        age: 27,
        skills: ["python", "java", "c++"],
        parents:{

            father:"amit",
            mother:"sushma"
         }
    }
]
console.log(student2[3].parents.father)
console.log(student2[3].parents.sister="jaya")
console.log(student2) */

/* let student=[
    {fullname:"mayuri", age:24},
    {fullname:"abi",age:33},
    {fullnme:"chinmay",age:40}
]
//Find method()
let xx=student.find(function(el){
    return el.fullname =="abi"
})
console.log(xx)

//FindIndex method()
let yy=student.findIndex(function(el){
    return el.fullname=="mayuri"

})
console.log(yy) */

//Some method
let number=[11,22,33,44,77,55,99,98]
let mm=number.some(function(el){
    return el<10
})
console.log(mm)

//Every Method
let kk=number.every(function(el){
return el>1
})
console.log(kk)
  
//concat Method
let aa=[1,2,3]
let bb=[4,5,6]
let cc=aa.concat(bb)
console.log(cc)

//Slice method
let sss=[2,3,4,6,8,9,10]
let ref=sss.slice(6,sss.length)
console.log(ref)

let sss=[2,3,4,6,8,9,10]
let reg=sss.splice(6,sss)
console.log(ref)

//slice method
let bk=[98,56,45,34,67,89,34,23]
console.log(bk.slice(2,8))

//splice
let bk1=bk.splice(2,3,05,02)
console.log(bk1)





