/* let aa=["chinmay","lastname",12,13]
console.log(aa[1])

let aa1={
    firstname:"chinmay",
    lastname:"deshpande",
    age:12,
    rollnuber:34
}
//Retrive the value
//Object Property(Dot notation)
console.log(aa1.firstname)

//Bracket notation
console.log(aa1['lastname'])

//Update the value
console.log(aa1.age=25)
console.log(aa1)

//Adding the value
aa1.language="English"
console.log(aa1)

//delet the value
delete aa1.age
console.log(aa1)

//dot notation not support to perform loop

//hasownProperty mrthod()
//Action: verify the key vlue of object present in object or not
//return: boolean
console.log(aa1.hasOwnProperty("firstname"))

for(let key in aa1){
    console.log(key,aa1[key])
}
/* 
let aa2="aaabbbaaccddee"
let yy2={}
for(let i=0;i<aa2.length;i++){
    if(yy2.hasOwnProperty(aa2[i])){
        yy2[aa2[i]]=yy2[aa2[i]]+1
    }
    else{
        yy2[aa2[i]]=1
    }
}
console.log(yy2) 

let bb2="aaaabbbcccddde"
 //output={
    a:4,
    b:5,
    c:6,
} 


let cc2={}
for(let i=0;i<bb2.length;i++){
    if(cc2.hasOwnProperty(bb2[i])){
cc2[bb2[i]]=cc2[bb2[i]]+1
    }
    else{
        cc2[bb2[i]]=1
    }
}
console.log(cc2)

let str1="mayurimahendramayuri"
let blankobj={}
for(let i=0;i<str1.length;i++){
    if(blankobj.hasOwnProperty(str1[i])){
    blankobj[str1[i]]=blankobj[str1[i]]+1
    }
    else{
        blankobj[str1[i]]=1
    }
}
console.log(blankobj) */

/* console.log("=================4/9========================")
let amol = {
    age: 34,
    firstname: "amolrao",
    displayName: function () {
        console.log(`My name is ${this.firstname}`)
    }
}
console.log(amol.age)
console.log(amol.firstname)
amol.displayName()

let chinmay = {
    age: 34,
    firstname: "chinmay",
    displayName: function () {
        console.log(`My name is ${this.firstname}`)
    }
}
chinmay.displayName()

let lastname=new String("chinmay")
let lastname1="DeshpaNde"
console.log(lastname.toUpperCase())
console.log(lastname1.toLowerCase())


let names=["chinmay","poorva","abhisha","ram"]
let names1= new Array(4)
names1[0]="deshpande"
names1[1]="vyas"
names1[2]="baeande"
names1[3]="hhjk"
console.log(names1) */

//String , Array,regular Experession(RegeX)

class Person{

    constructor(age,firstname){
        this.firstname=firstname
        this.age=age
    }
    display(){
        console.log(`My firstname is ${this.firstname}`)
    }
}
let amol1=new Person(32,"amol")
let chinmay1=new Person(76,"chinmay")

console.log(amol1)
console.log(chinmay1)

// let student=new Array(2)
// student[0]=amol1
// student[1]=chinmay1

// for(let i=0;i<student.length;i++){
//     let obj=student[i]
//     for(let key in obj){
//         console.log(key,obj[key])
//     }
// }

//Regular Expression
//There are two method to write regular exp
// let regex=new RegExp("hello");
// let regex1=/world/;

// let regex2=/Python/i
// let rr=" Hi i am new to Python and learning python"
// let h=rr.search(regex2)
// console.log(h)

// let regex3=/Python/ig
// let rr1=" Hi i am new to Python and learning python"
// let h1=rr1.match(regex3)
// console.log(h1)

// let asdf= rr1.replace(regex3,"js")
// console.log(asdf)








