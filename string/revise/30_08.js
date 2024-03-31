// let namee = "chinmay"
//   //  0  1  2  3  4  5  6
// //    c  h  i  n  m  a  y
// console.log(namee[0])
// console.log(namee[1])
// console.log(namee.length)  // 7   --- 6
// let namee2 = "amol" 
// //   0  1  2  3
// //   a  m  o  l 
// console.log(namee2[0])
// console.log(namee2[3])
// // Object ---  property , methods

// let c = "amol"
// console.log(c.length)
// console.log(c.toUpperCase())

// //Method --- action 
// // Return --- String 

// let aa = "Chinmay"
// let bb = aa.toUpperCase()
// console.log(bb)
// let ee = aa.toLowerCase()
// console.log(ee)
// let nn = "rahul"
// let kk =  nn.toUpperCase()
// console.log(nn)
// //  0   1   2   3   4   5
// //  p   o   o   r   v   a
// // -6  -5  -4  -3  -2  -1        

// let rr = "poorva"
// //string.slice(startpoint, endpoint)// End point not included
// // end point should be ahead start point 

// let jj = rr.slice(0,4)
// console.log(jj)

// let nna = rr.slice(3,5)
// console.log(nna)

// let pp = rr.slice(-4,-2)
// console.log(pp)

// let uu = rr.slice(-5,3)
// console.log(uu)

// let uua = rr.slice(-2,3)
// console.log(uua)

// let kkk =rr.slice(4,5)
// console.log(kkk)

// // ------------------
// let mmmm = "hemant"
// // 0  1  2  3  4  5
// // h  e  m  a  n  t
// console.log(mmmm[0])

// // for(intilaization ; condition ; increment){
// //     // statments
// // }

// for(let i = 0 ; i < 5 ; i++){  //i ---1  i ---2 -- 3 ---
//    // console.log(i) // 0  1 2  3   4
//    console.log(mmmm[i])
//  }

// console.log('--------------------')
// let jlk = 'chinmay deshpande'
// let count  = 0

// for(let i = 0 ; i < jlk.length ; i++){
//     if(jlk[i] == 'a'){
//         count  = count + 1
//     }
// }
// console.log(count)
// let jlke = 'chinmay deshpande'
// let count2  = 0
// for(let i = 0 ; i < jlk.length ; i++){
//    if(jlke[i] == 'a' || jlke[i] == 'e' ||jlke[i] == 'i' || jlke[i] == 'o' ||jlke[i] == 'u'){
//        count2  = count2 + 1
//    }
// }
// console.log(count2)
// console.log('-------------------------')
// let nnaa = "amol"  // loma
// let rev = ""
// for(let i = 3 ; i >=0 ; i-- ){ // 2  1
//     //console.log(nnaa[i])
//     rev = rev+nnaa[i]   //loma
// }
// console.log(rev)

// let kkqaqa= ["I learning am javascript"]
// // "I gninrael ma tpircsavaaj"

// let jaaaa = "amol"
// console.log(jaaaa[0].toUpperCase()+jaaaa.slice(1,jaaaa.length))


// person ---
//  weight height age 
//  walk()  talk()
// properties -
//wheel , reg , color
// action start() stop()



// string 

// let namey = "chinmay deshpande"

// let firstName = "amol"
// console.log(firstName.length)

// object -- properties and methods
//   0  1  2  3
//   a  m  o  l 

//console.log(firstName[0])
//console.log(firstName[firstName.length-1])

// for(let i = 0 ; i < 4 ; i++){
//      //console.log(i)
//      console.log(firstName[i])
// }
// console.log('--------------------')

// for(let i = firstName.length-1 ; i >= 0 ; i--){
//     //console.log(i)
//     console.log(firstName[i])
// }


// Method---

//Method ------Action 
// Return --

// console.log('Hello I am new to javascript')
// console.log("Hello I am new to javascript")
// console.log('Hello I am "new" to javascript')
// console.log("Hello I am new's to javascript")


// old way 
// let firstName2  = "chinmay"
// let lastName2 = "deshpande"
// console.log("My firstname is "+firstName2+" My lastName is "+lastName2)

// // String interpolation - back ticks
// console.log(`My firstName is ${firstName2} and My lastName is ${lastName2}`)
// // It also solves the expression
// console.log(`Addition of 2 and 2 is ${2+2}`)

// String

// string + string --> string 
// string + number --> string 
// number + string --> string 
// number + number --> number

// let a = 10
// let b = 20
// let c ='chinmay'
// console.log(a+b+c)
// console.log(b+c+a)
// console.log(a+b)

// // Methods 


// function add(x,y){
//     return x + y
// }

// let r = add(12,13)
// console.log(r)
// console.log(typeof r)

// // // user defined function  and  inbuilt functions


// let q = console.log('hello')               //  hello       
// console.log(q)                        //  Undefined              (NOT RETURN ANYTHING)

// //Action -- printing to console whatever we pass
// //Return type 

// // Methods

// let fruits = "Grapes"
// console.log(typeof fruits)


// let upper = fruits.toUpperCase()

// // Action - convert to uppercase
// // Return type  - string

// console.log(upper)
// console.log(typeof upper)

// let lower = fruits.toLowerCase()
// // Action - convert to lower
// // Return type  - string
// console.log(lower)
// console.log(typeof lower)

// // Method chaining 
// let no = fruits.toLowerCase().toUpperCase().length
// console.log(no)
// console.log(typeof no)
// //--------------------------------


// let qwerty = "chinmay"

//  0   1   2  3  4  5  6
//  c   h   i  n  m  a  y
//  -7  -6 -5 -4 -3 -2 -1
// //qwerty.slice(startingPosition ,endposition)

// let abc = qwerty.slice(1,6)
// console.log(abc)
// console.log(qwerty.slice(2))
// console.log(qwerty.slice(-3))
// console.log(qwerty.slice(-5,6))
// console.log(qwerty.slice(-3,-4))
// console.log(typeof(qwerty.slice(-3,-4)))
// //------------------------------------
// let y = "amol"
// console.log(y[0].toUpperCase()+ y.slice(1))


// let capitalize = ""
// for(let i = 0 ; i < y.length ;i++){
//     if(i == 0){
//         capitalize = capitalize +y[i].toUpperCase()
//     } 
//     else {
//         capitalize = capitalize +y[i]
//     }
// }
// console.log(capitalize)


// //------------------------------------->

//==============================================================================================================



// // let lastName = "chinmayhhsdfdsfsdfs"
// // //  0  1  2  3  4  5  6 7 8
// // //  c  h  i  n  m  a  y h h

// // let kl = lastName.indexOf('h') 
// // console.log(kl)

// //--------------------------------

// // let onew = "ammoml"

// // // second occurence

// // let r = onew.indexOf('m',onew.indexOf('m')+1)          // SECOND OCCURANCE

// // //------------------------------------

// // let r = onew.indexOf('m',onew.indexOf('m',onew.indexOf('m')+1+1))     // THIRED OCCURANCE


// //"abc".indexOf('char',postion)
// //"cbnn".lastindexOf('a')




//============================================================

// let k = 'amomolmhh'
// let j = []

// for(let i = 0 ; i < k.length ; i++){
//     if(k[i] == 'm'){
//         j.push(i)
//     }

// }
// console.log(j[2])

// // count the 'm' in the strinf 


// let kaa = 'amomolmhhm'
// let count = 0
// for(let i = 0 ; i < kaa.length ; i++){
//     if(kaa[i] == 'm'){
//         count = count + 1 
//     }

// }
// console.log(count)

// // includes 

// let yaa = "poorvavyas"
// let rr = yaa.includes('poorva')
// console.log(rr)


// indcludes

// let userFruit = "Apple".toLowerCase()
// let fruitss = "apple mango banana grapes chiku"

// if(fruitss.includes(userFruit)){
//     console.log('Fruit available')
// }
// else{
//     console.log('fruit not available')
// }

// // 

// let  flower2 = " rose lily "
// console.log(flower2.length)
// console.log(flower2.trim().length)


// let  flower4 = " rose lily "
// console.log(flower4.length)
// console.log(flower4.trimRight().length)


// let  flower3 = " rose lily "
// console.log(flower3.length)
// console.log(flower3.trimLeft().length)

// let n = " chinmaya deshpande "
// console.log(n.trim())   //"chinmay deshpande"
// console.log(n.trim().split(' ')) // ["chinmay","deshpande"]
// console.log(n.trim().split(' ').join("")) //['chinmaydeshpande']


// //------------------------------------------->
// //indexOf  , includes , trim  , replace

// let lan = "I am learning javascript"
// let rf = lan.replace('javascript','python')
// console.log(rf)


// let lan2 = "I am learning javascript and i will search job in javascript"
// // let reee = lan2.replace('javascript','python')
// // console.log(reee)
// lan2 = lan2.split(' ') 
// console.log(lan2)

// for(let i = 0 ; i < lan2.length ; i++){
//     if(lan2[i] === "javascript"){
//         lan2[i] = "python"
//     }
// }
// console.log(lan2.join(' '))


// ---------------------->
// let bna = "chinmay"
// console.log(bna.repeat(5))
// let hhh =  "5a4b3c2e1f"
// //"aaaaabbbbcccef"
// let ns = hhh.split("")
// let hhhh = ""
//'a'.repeat(5)

// Number 
//'b'.repeat(2) // 'bb'

// console.log(Number('5'))
// console.log(Number('C'))
// console.log(ns)

// for(let i = 0 ; i < ns.length ; i++){
//     if(Number(ns[i])){
//         hhhh = hhhh + ns[i+1].repeat(Number(ns[i]))
//     }
// }
// console.log(hhhh)

let k = "aabb"
//"5a4b3c2e1f"
let hhhh = ''
for (let i = 0; i < k.length; i++) {
    let count = 0
    let al = ''
    if (k[i] == k[i + 1]) {

        count++
        
        

        // if (Number(k[i])) {
        //     hhhh = hhhh + al.repeat(Number(k[i]))
        // }
    } else {
        al=al+(k[i])
        
        count = 0
        
    }

    hhhh = hhhh + al.repeat(Number(count))
  
}
console.log(hhhh)







// charAt

// let lastName = "deshpande"
// console.log(lastName.charAt(2))
// console.log(lastName.charCodeAt(5))


















// Which are considered as true or false
// if(undefined){
//     console.log("hello")
// }

// truthly or falsy
// null undefined 0 false NaN

























// Action 
// Return 


