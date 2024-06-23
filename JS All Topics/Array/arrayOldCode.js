
// let human = [
//     {
//         firstName: "mayuri",
//         lastName: "katwe",
//         skills: ['java', 'sql', 'js'],
//         family: {
//             mother: 'jyoti',
//             father: 'mahendra'
//         },
//         city:'pune',
//         age:30
//     }
//     ,

//     {
//         firstName:"ganesha",
//         lastName:"rao",
//         skills:['c++','c#','python'],
//         family:{
//             mother:'parvati',
//             father:'shankar'
//         },
//         city:"nashik",
//         age:40
//         }
// ]

// //1. push() =>add element at last and terurn the total length
// // let a1=human[0].skills.push('mangoDB')
// // console.log(a1)
// // console.log(human[0])

// // let a2=human.map((el)=>el.skills.push('all'))
// // console.log(a2)

// // let a3=human.map((el)=>el.skills)
// // console.log(a3)
// // let a4=a3.flat()
// // console.log(a4)

// // let aa=new Set(a4)
// // console.log(aa)

// //2. pop() =>remove element from last and retirn the remove element
// // human.forEach((el)=>el.skills.pop())
// // console.log(human)

// //3. unshift() =>add the element at first and return new length
// // human.map((el)=>el.skills.unshift('abc'))
// // console.log(human)

// //4.shift() =>remove element from first and return same element
// // let aa1=human.map((el)=>el.skills.shift())
// // console.log(aa1)

// //5. filter() =>return the array for component it match

// // let aa2=human.filter((el)=>el.firstName=="mayuri" && el.city=="pune")
// // console.log(aa2)

// //6. find() =>retrun the first element 
// // let aa3=human.find((el)=>el.firstName.startsWith('g'))
// // console.log(aa3)

// //console.log(human.find((el)=>el.family.mother=="parvati"))

// //7. map() =>compare each and every value
// // let aa4=human.map((el)=>el.city)
// // console.log(aa4)

// //8.reduced =>reduced the values
// // let y1=human.reduce((acc,el)=>{
// //     return acc+el.age
// // },0)/human.length-1
// // console.log(y1)

// //9. slice() =>remove the element =>return the remove element in array
// // let aa5=human[0].skills.slice(0,2)
// // console.log(aa5)
// // console.log(human[0])

// //10.spice() =>reove the element and replace with another one and return remove element in array
// // console.log(human[0].skills.splice(0,1,"mayu"))
// // console.log(human[0])

// //11.findIndex() =>return index
// // let ab1=human.findIndex((el)=>el.firstName=="mayuri")
// // console.log(ab1)

// //12.include() =>return boolean value
// // ~let aa=human.filter((el)=>el.skills.includes("java"))
// // console.log(aa)

// // let y1=human[0].skills.includes('java')
// // console.log(y1)

// //13. indexOf =>return index if found and return -1 if not found
// // let y1=human[0].skills.indexOf('python')
// // console.log(y1)

// // let y1=human[0].skills.indexOf('java')
// // console.log(y1)

// //14. some() =>return true or false value if some value willl match
// // let array=[12,10,34,56,76,87,87,98]
// // let aa3=array.some((el)=>el>20)
// // console.log(aa3)

// //15. every() =>return true orfalse if every value match
// // let aa3=array.every((el)=>el>20)
// // console.log(aa3)

// //16. join('') =>join the element in array and return string
// // let mm=array.join("--")
// // console.log(mm)

// //17. flat() => this method convert multifimentional array into single
// // let a1=[[1,2,3],[4,5,6],[7,8,9]]
// // let mk=a1.flat()
// // console.log(mk)

// //18. concat()
// // let a1=[1,2,3]
// // let b1=[9,8,7]
// // let aa=a1.concat(b1)
// // console.log(aa)

// //19.forEach() =>dont want anything to return
// // let arr1=['mayuri','manjiri','magha']
// // arr1.forEach((el)=>console.log(`Welcome ${el} !`))

// //20. reverse() =>reverse the array
// let array=[12,10,34,56,76,87,87,98]
// console.log(array.reverse())

// //21.sort() =>sorting get happen
// let b1=array.sort()
// console.log(b1)

// //22. fill()
// let mmo=array.fill(100,0,2)
// console.log(mmo)

// let mmk=array.splice(0,2,100)
// console.log(mmk)
// console.log(array)

//========================******************===============================

//1. revrese string

// let name1="mayuri"
// let str=""
// let i=0
// while(i<name1.length){
//     str=name1[i]+str  //iruyam
//     str=str+name1[i]  //mayuri
//     i++
// }
// console.log(str)

//2. count the number of vowels
// let name1 = "mayuri rao"
// let count = 0
// for (let i = 0; i < name1.length; i++) {
//     if (name1[i] == "a" || name1[i] == "e" || name1[i] == "i" || name1[i] == "o" || name1[i] == "u") {
//         count++
//     }
// }
// console.log(count)

// //3. capital only first letter of string
// let str = "mayuri"
// // let mk=str.split(" ").map((el)=>el[0].toUpperCase()+el.slice(1)).join(" ")
// // console.log(mk)

// let aa = ""
// for (let i = 0; i < str.length; i++) {
//     if (i == 0) {
//         aa = aa + str[i].toUpperCase()
//     }
//     else {
//         aa = aa + str[i]
//     }
// }

// console.log(aa) //Mayuri

//each word made capital bu using dunction

// let str = "mayuri mahendra katwe"
// let mm = str.split(" ")

// let array=[]
// function cap(para) {
//     let sent = ""
//     for (let i = 0; i < para.length; i++) {
//         if (i == 0) {
//             sent = sent + para[i].toUpperCase()
//         }
//         else{
//             sent=sent+para[i]
//         }
//     }
//     return sent

// }

// for(let i=0;i<mm.length;i++){
// array.push(cap(mm[i]))
// }

// console.log(array.join(" "))
// console.log(array)
// console.log(sent)
// console.log(mm)





// let sentence = 'my good name is krishna.'
// let arr = sentence.split(' ')
// //console.log(arr)                     
// let x = [ ]
// function cal(zz){
//     let sentence2 = ' '
//     for (let i = 0; i < zz.length; i++){

//         if(i == 0){
//            sentence2 = sentence2 + zz[i].toUpperCase()
//         }
//         else{
//             sentence2 = sentence2 + zz[i]
//         }
//     }
//         return sentence2
// }

// for (let i = 0; i < arr.length; i++){
//     x.push(cal(arr[i]))
// }

// let y = x.join(' ')
// console.log(y) 

//============================*********************************==================================


//Capital all first word in string
//1 way by using function
// let name1 = "my fullname is mayuri katwe"
// let arr = name1.split(" ")
// console.log(arr)
// let x = []

// for (let i = 0; i < arr.length; i++) {
//     x.push(add(arr[i]))
// }

// function add(a) {
//     let blank = ""
//     for (let i = 0; i < a.length; i++) {
//         if (i == 0) {
//             blank = blank + a[i].toUpperCase()
//         }
//         else {
//             blank = blank + a[i]
//         }
//     }
//     return blank
// }
// console.log(x)
// console.log(x.join(" "))

// //==========================================================

// //2 Way by using method
// let firstCap = name1.split(" ").map((el) => el[0].toUpperCase() + el.slice(1)).join(" ")
// console.log(firstCap) //My Fullname Is Mayuri Katwe


////////////////++++++++++++++++++++++++++++++++++++++++++++++++++++++++//////////////////////////////


// var v1 = 10
// let v2;
// function pr(){
//     console.log(v1);   //10
//     console.log(v2); //undefineed  
// }
// pr()
// console.log(window.write)   //undefined 
// console.log(window.v1)    //10
// console.log(window.v2)     //undefined 

// console.log(v1)      //10
// console.log(v2)       //undefined



// let mm = "mayurimkatwe@gmail.com"

// let a = /[\w]/
// let kk = ""
// let ab = true
// for (let i = 0; i < mm.length; i++) {
//     if (ab) {
//         if (i == 0) {
//             kk = kk + mm[i].toUpperCase()
//         }
//         else if (a.test(mm[i])) {
//             kk = kk + mm[i]
//         }
//         else {
//             ab=false
//         }
//     }
// }
// console.log(kk)


// let email = "mayurimkatwe@gmail.com"
// //email=email.split("")
// let exp = /[\w]/
// let str = ""
// let flag = true
// for (let i = 0; i < email.length; i++) {
//     if (flag) {
//         if (i == 0) {
//             str = str + email[i].toUpperCase()
//         } else if (exp.test(email[i])) {
//             str = str + email[i]
//         } else {
//             flag = false
//         }
//     }
// }
// console.log(str)

//=========================================================
//change the date format given as 20/11/2021 to 2021-11-20

// let date="20/11/2021"
// let mm=date.split('/').reverse().join("-")
// console.log(mm)

//========================================================

//collect the number at even place
// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 0, 44, 55, 66, 77, 889, 8]
// let arr2 = []
// arr.filter((el, index) => {
//     if (index % 2 == 0) {
//         arr2.push(el)
//     }
// })
// console.log(arr2)

// let a = []
// let b = []
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 0) {
//         a.push(arr[i])
//     }
//     else {
//         b.push(arr[i])
//     }
// }
// console.log(a)
// console.log(b)

//========================================================================

//collect the even nuber from array
// let arr = [11, 22, 33, 44, 55, 66, 7, 65, 87, 98, 86, 65, 54, 43, 12]
// let arr1 = []
// arr.filter((el) => {
//     if (el % 2 == 0) {
//         arr1.push(el)
//     }
// })
// console.log(arr1)

//===========================================================================

let arr=['a',2,'b',3,'c','d',"i",3,5,6,7,8,'o','p','q','s']
console.log(arr)
let a1 = []
let b1 = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === Number(arr[i])) {
        a1.push(arr[i])
    }
    else {
        b1.push(arr[i])
    }
}
console.log(a1)
console.log(b1)

//find the length of the number

let num=1234567890123457
let str=new String(num)
console.log(str.length)
console.log(String(num).length)

