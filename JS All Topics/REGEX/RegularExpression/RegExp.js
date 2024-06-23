// //There are two method two write regular expression

// // let regex=new RegExp("word")
// // let regex=/word/

// //Search method
// //Action: seatch the first index of given string 
// //return : index 
// let nn = "I am new to python try to learn python"
// let hk = /python/g
// console.log(nn.search(hk))

// //Match method
// //Action: 
// //return
// console.log(nn.match(hk))

// //replace method
// //Action: relace the word with given word
// //return : new string
// console.log(nn.replace(hk, "js"))



// // console.log("================================")
// // let exp="I am paytm and i have transfer money with paytm"
// // let reg=/Paytm/ig
// // console.log(exp.search(reg))

// // console.log(exp.match(reg))

// // console.log(exp.replace(reg,"phonepay"))


// //^javascript.d$/gim
// //^ used for starts with and we need to enable multiline flag  (in RegxPal website)
// //$ used fot ends with and we need to enable multiline flag 
// //[abc][a-z][A-Z][0-9]

// // expresssion 
// // const reg=new RegExp("abc")
// // const reg=/abc/

// //Program 1
// let names = ["chinmay-pune", "poorva=ujjan", "abhisha-chandrapur", "mayuri-nagpur", "amol-pune"]
// let aa = /pune/

// //test Method
// //Action: Check whethere the given elemet present 
// //return : Boolean(true ot false)

// console.log(aa.test(names[0]))
// frompune = names.filter(function (el) {
//     return aa.test(el)
// })
// console.log(frompune)

// //Program 2
// let names1 = ["chinmay-pune", "poorva=ujjan", "abhisha-chandrapur", "mayuri-nagpur", "amol-pune"]
// let bb = /^a/
// let cc = names1.filter(function (el) {
//     return bb.test(el)

// })
// console.log(cc)

// //Pregram 3
// let namesstudents=["amol","archit","amit","amay","abhisha","arman"]
// let ee=/^....$/
// let dd=namesstudents.filter(function(el){
//     return ee.test(el)
// })
// console.log(dd)

// //Program 4
// let namesstudents1=["amol","archit","amit","amay","abhisha","arman"]
// let a1=/^[a][mr]/
// let b1=namesstudents1.filter(function(el){
//     return a1.test(el)
// })
// console.log(b1)

// //Program 5
// let num=[7745045298,772104529,7276145298,992289946800,98810708700000999]
// let a3=/^[7][72].{8}$/
// let b3=num.filter(function(el){
//     return a3.test(el)
// })
// console.log(b3)

//Program 6
//**Note: \d=[0-9]

// let num=[7745045298,772104529,7276145298,9922899468,98810708700000999]
// let a3=/^[\d][\d].{8}$/
// let b3=num.filter(function(el){
//     return a3.test(el)
// })
// console.log(b3)

//Progarm 7
//**Note: \D=[^0-9]

let num=[7745045298,772104529,7276145298,9922899468,98810708700000999]
let a3=/^[\D][\D].{8}$/
let b3=num.filter(function(el){
    return a3.test(el)
})
console.log(b3)

//Program 8
//**Note: \w=[a-zA-Z0-9_]
let namesstudents=["amol","archit","amit","amay","abhisha","arman"]
h1=/^[\w][mr]/
let b4=namesstudents.filter(function(el){
    return h1.test(el)
})
console.log(b4)

//Program 9
//**Note: \W=[^a-zA-Z0-9_]

let namesstudents1=["amol","archit","amit","amay","abhisha","arman"]
h2=/^[\W][mr]/
let b5=namesstudents1.filter(function(el){
    return h2.test(el)
})
console.log(b5)

let arr="asdfAsdf$@%^01234"
let oo=/\W/
let qq=arr.split("")
console.log(qq)
let po=qq.filter(function(el){
return oo.test(el)
})
console.log(po)
console.log(po.join("").length)










