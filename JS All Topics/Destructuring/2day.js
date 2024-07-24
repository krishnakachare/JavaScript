// let arr=['a','b','c'] 
// arr[arr.length] = 'd'  // [ 'a', 'b', 'c', 'd' ]     that index not have element then element added
// console.log(arr)
// arr[1] = 'x'
// console.log(arr)      // [ 'a', 'x', 'c', 'd' ]    that index already have element then that element updated by new element

// let n = 'sanchita'
// n[8]='a'
// console.log(n[0])
// console.log(n)
// console.log(typeof(n))
// // Here(string) we cant update, add elements

// Object destructuring

// let kk = {
//     fullName: 'Krishna',
//     lastName: 'kachare',
//     age: 26,
//     dost: [
//         {
//             name1: 'ravi',
//             skills: ["reading", 'writing']
//         },
//         {
//             name2: 'swapnil',
//             f:{
//                 f1:'vishvajit'
//             }
//         }
//     ],
//     skill: ['js', 'paython', 'css', 'html']
// }
// kk.skill[kk.skill.length] = 'java'
// //console.log(kk.skill)               //  [ 'js', 'paython', 'css', 'html', 'java' ]
// kk.skill[2] = 'java'
// //console.log(kk.skill)               //  [ 'js', 'paython', 'java', 'html', 'java' ]
// // Array is also object when element is present in that index value then its update or element is absent in that index value then its added

// var {age,dost,skill} = kk
// // console.log(age,dost,skill)
//  var {age,dost:[a,b],skill} = kk
// // console.log(age,a,b,skill)
// var {age,dost:[a,b],skill:[x,y]} = kk
// console.log(a,b,x,y)
// var {dost:[{skills:[a,b]},z]} = kk
// console.log(a,b)                          // reading writing
// var {dost:[a,{f:{f1}}]} = kk
// console.log(f1)                 // vishvajit


// CHECK WITH LESS COMPLEX STRUCTURE

// let person = {
//     fullName: 'krishna',
//     skill:['a','b','c'],
//     friends:{
//         fName:'ravi',
//         skill:['play','watch']
//     }  
// }
// var {fullName:f,skill:s,friends:fr} = person
// console.log(fullName,skill,friends)

// console.log(f,s,fr)                                     // krishna [ 'a', 'b', 'c' ] { fName: 'ravi', skill: [ 'play', 'watch' ] }
// // f,s,fr we called as custom names

// // actual use or meaning of custom name

// var {skill:[n,p,q],friends} = person
// // console.log(n,p,q,friends)
// var {skill:[n,p,q],friends:{fName}} = person
// // console.log(n,p,q,fName)
// var {skill:[n,p,q],friends:{fName,skill:[t,t1]}} = person      // we not be used same variables
// console.log(t,t1)  // play watch

// Array destructuring

// let arr = [1,2,3,4,5,[6,7]]
// let [a,b,c,d,e,[x,y]] = arr // here not need to use custom name(we got error) // here new memory made
// console.log(a,b,x,y)         // 1,2,6,7


// String Destructuring

let str = 'krishna'
let [a,b] = str
console.log(a,b)     // k r
console.log(typeof(a,b))  // string
//------------------------------------------

// chinmay = {
//     fullName:"chinmaydeshpande",
//     age:34,
//     rollNo:12
// }

// let {fullName , age , rollNo } = chinmay
// console.log(fullName,age,rollNo)
// console.log(chinmay)

// custome name :
// let {fullName:fn , age:ag , rollNo:rn } = chinmay
// console.log(fn,ag,rn)

// let obj = {
//     "page": 2,
//     "per_page": 6,
//     "total": 12,
//     "total_pages": 2,
//     "data": [
//         {
//             "id": 7,
//             "email": "michael.lawson@reqres.in",
//             "first_name": "Michael",
//             "last_name": "Lawson",
//             "avatar": "https://reqres.in/img/faces/7-image.jpg"
//         },
//         {
//             "id": 8,
//             "email": "lindsay.ferguson@reqres.in",
//             "first_name": "Lindsay",
//             "last_name": "Ferguson",
//             "avatar": "https://reqres.in/img/faces/8-image.jpg"
//         },
//         {
//             "id": 9,
//             "email": "tobias.funke@reqres.in",
//             "first_name": "Tobias",
//             "last_name": "Funke",
//             "avatar": "https://reqres.in/img/faces/9-image.jpg"
//         },
//         {
//             "id": 10,
//             "email": "byron.fields@reqres.in",
//             "first_name": "Byron",
//             "last_name": "Fields",
//             "avatar": "https://reqres.in/img/faces/10-image.jpg"
//         },
//         {
//             "id": 11,
//             "email": "george.edwards@reqres.in",
//             "first_name": "George",
//             "last_name": "Edwards",
//             "avatar": "https://reqres.in/img/faces/11-image.jpg"
//         },
//         {
//             "id": 12,
//             "email": "rachel.howell@reqres.in",
//             "first_name": "Rachel",
//             "last_name": "Howell",
//             "avatar": "https://reqres.in/img/faces/12-image.jpg"
//         }
//     ],
//     "support": {
//         "url": "https://reqres.in/#support-heading",
//         "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
//     }
// }


// let {page:pg,per_page:per_page,support:sp,total:tl,data:dta} = obj

// //{repsonse,request}


// Nested 
// let poorva = {
//     id:1,
//     title:'My story',
//     fullName:"poorva vyas",
//     author:{
//         first:"j k",
//         lastname:"rolling"
//     }
// }

// actual use:
// let {id,author:{first,lastname}} = poorva
// console.log(id,first,lastname)

// custom name:
// let {id:idTwo,author:{first:fn2,lastname:ln2}} = poorva
// console.log(idTwo,fn2,ln2)

// abhisha = {
//     id:1,
//     title:'My story',
//     fullName:"abhisha ",
//     skills:["python","java","javscript"]
// }

// // Array destructuring:

// let skills = ["python","java","javscript"]

// let [a,b,c] = skills
// console.log(a,b,c)

// abhisha = {
//     id:1,
//     title:'My story',
//     fullName:"abhisha ",
//     skills:["python","java","javscript"]
// }

// let {id:k,title:t,skills:[aa,bb]}= abhisha
// console.log(k,t,aa,bb)
// -----------------------------------------------------

// let arr = [1,2,[2,3],4,5]
// let [aaa,bbb,[ccc,ddd],eee,fff] = arr
// console.log(aaa,bbb,ccc,ddd,eee,fff)
//-----------------------------------------------------

// console.log(arr[2][arr[2].length-1])

// let kk = [22,3,4]
// console.log(kk[kk.length-1])
//-----------------------------------------------------

// arr2 = [1,2,[2,3],4,5]
// console.log(arr2[2][arr2[2].length-1])
// let [ab,bc,cd,de,ef,fg]= [1,2,[2,3],4,5].flat()

// let names = ["chinmay","sameer","ramesh",{firstName:"chinmaya",lastName:"deshpande"}]
// let [a,b,c,{firstName,lastName}] = names
// console.log(firstName)
// console.log(lastName)

// let  humana = {
//     fullName:"chinmay deshpande",
//     skills:["python","javascript","css"],
//     family:{
//             father:"shirish",
//             mother:"kanchan"
//     }
// }

// let {fullName,skills:[skillOne,skillTwo,skillThree],family:{father,mother}} = humana
// console.log(fullName,skillOne,skillTwo,skillThree,father,mother)

// let  humana = {
//     fullName:"chinmay deshpande",
//     skills:[{age:23,roll:34},"javascript","css"],
//     family:{
//             father:"shirish",
//             mother:"kanchan"
//     }
// }
// let {skills:{age,roll}} = humana
//-------------------------------------------------------
