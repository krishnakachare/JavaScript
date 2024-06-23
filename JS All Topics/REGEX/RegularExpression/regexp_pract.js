// // let regex=new RegExp("word")
// // let regex=/word/

let str = 'I am new to js and ty to learn js'
// //a1=/js/ 
// // console.log(str.search(a1))

console.log("====without globle flag=====")
a1 = /js/
let a2 = str.match(a1)
console.log(a2)

// console.log("====with globle flag=====")
// a2 = /js/g
// let a3 = str.match(a2)
// console.log(a3)

// // let a3=str.replace("js","Java")
// // console.log(a3)

// let dist = ["mayur-pune", "dinga-mumbai", "ranga-channai", "manga-pune"]
// // let exp1 = /pune/
// // let punebranch = dist.filter(function (el) {
// //     return exp1.test(el)
// // })
// // console.log(punebranch)

// let exp2 = /^m/
// let punebranch = dist.filter(function (el) {
//     return exp2.test(el)
// })
// console.log(punebranch)

// let names=["amit","arpit","abhisha","amrapali","arav"]
// let exp3=/^....$/
// let a5=names.filter(function(el){
//     return exp3.test(el)
// })
// console.log(a5)

// let exp4=/^[a][mr]/
// let a6=names.filter(function(el){
//     return exp4.test(el)
// })
// console.log(a6)

// let contactno=[7745045298,7721055298,727145298,9960638673,12345678900]
// let exp6=/^[7][7].{8}$/
// let a7=contactno.filter(function(el){
//     return exp6.test(el)
// })
// console.log(a7)

// let contactno = [7745045298, 7721055298, 727145298, 9960638673, 12345678900]
// let exp6 = /^[0-9][0-9].{8}$/
// let a7 = contactno.filter(function (el) {
//     return exp6.test(el)
// })
// console.log(a7)

// let contactno = [7745045298, 7721055298, 727145298, 9960638673, 12345678900]
// let exp6 = /^[\d][\d].{8}$/
// let a7 = contactno.filter(function (el) {
//     return exp6.test(el)
// })
// console.log(a7)

// let contactno = [7745045298, 7721055298, 727145298, 9960638673, 12345678900]
// let exp6 = /^[\D][\D].{8}$/
// let a7 = contactno.filter(function (el) {
//     return exp6.test(el)
// })
// console.log(a7)

// let names=["amit","arpit","abhisha","amrapali","arav","mukteat"]
// let exp7=/^[\w][\w].[tv]$/
// let y1=names.filter(function(el){
//     return exp7.test(el)
// })
// console.log(y1)

// let names=["amit","arpit","abhisha","amrapali","arav","mukteat"]
// let exp7=/^[\W][bu]/
// let y1=names.filter(function(el){
//     return exp7.test(el)
// })
// console.log(y1)

