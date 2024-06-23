








// let arr = [2,3,4,5,6]
// let human = {
//     name:'chinmay',
//     age:23
// }
// human['language']="hindi"
// console.log(human)         //  { name: 'chinmay', age: 23, language: 'hindi' }


// // map and set
// // map are very similar obj

// human = {
//     name:'chinmay',
//     [1,2,3]:23
// }
// console.log(human)  // SyntaxError: Unexpected token ','

// // map allows keys of any data type 

// // creating the object of map

// let a = new Map()
// // setting the object of map with different data structure as keys

// a.set('namey','chinmay')
// a.set(1,'day')
// a.set(true,'boolean')

// //getting the values from the map

// console.log(a.get('namey'))
// console.log(a.get(1))
// console.log(a.get(true))
// console.log(a.size)

// a['6']='ram'
// console.log(a.get('6'))

// a.clear()
// console.log(a.size)

// let ram = {name:"ram dani"}
// let sham = {name:"sham dani"}

// let countA = {}

// let bb = "language"
//  countA[bb] = "marathi"

// countA[ram] = 1234
// countA[sham]= 3456

// countA = {
//     {name:"ram dani"}:1234
// }

// let person = {
//     age:34
// }

// person.age = 345
// a = 'language'
// person[a] = "marathi"
// delete person.age
// console.log(person.age)

// console.log(countA)
// console.log(countA['[object Object]'])

// // --------------->

// let ha = {
//         'h':12
// }
// ha['h'] = 344
// console.log(ha['h'])
// ha['h'] = 6666
// console.log(ha['h'])

// let g = {'bny':'banking'}
// let h = {'creditsuzzie':'insurance'}

// ha[h] = 123 
// ha[g] = 34566

//[object Object]
// Map

// let b = new Map([
//     ['cucumber',60],
//     ['apple',1000],
//     ['banana',45],
// ]);

//console.log(b.size)

// iterating over a key 

// for(let c of b.keys()){
//     console.log(c)
// }
// for(let c of b.values()){
//     console.log(c)
// }
// for(let [key,values] of b.entries()){
//     console.log(key,values)
// }