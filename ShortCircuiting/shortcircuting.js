// html =D edtruturing.html


// Short circuting in js 


// let a = parseInt(prompt('Please enter the year of experience in testing')) // 0

// if(a >=0 ){
//     console.log('Tranining')
// }
// else{
//     console.log('Not eligible')
// }

//Truthy values -3 ,  'A'

// Falsy values - null ,undefined, 0

// Shorting circuiting 


console.log(3 || 'Jonas')
console.log('' || 'Chinmay')
console.log(true || 0);
console.log(null || undefined)
console.log(undefined || 0 || '' || "Hello" || 23 || null)

console.log('-----------')
console.log(3 && 'Jonas')
console.log('' && 'Chinmay')
console.log(true && 0);
console.log(null && undefined)
console.log(undefined && 0 && '' && "Hello" && 23 && null)

// literal object


// or  first True - first value
// or  first Flase - second - True (second)
// or first False or second False - second value


// AND ---

//first - true -- second true -- second value 
// first value - firstvalue
// first true or second false  --  seconf

var wedding = {

    numberOfGuest: 50,
    plates: 200,
    menu: [
        { pizza: 'mushroom' },
        { pizza: 'panner' }
    ],

    order: function(obj) {
        let { pizza } = obj;
        console.log(`The order menu is ${pizza}`)
        return pizza


    }




}

let obj = wedding.menu[1] || { pizza: 'spinach' }
wedding.order(obj)


//let guest = wedding.numberOfGuest || 10



//Nullish coalescing operator (??)

// null or undefined

// const foo = null ?? 'default string';
// console.log(foo);
// // expected output: "default string"

// const baz = 0 ?? 42;
// console.log(baz);
// // expected output: 0

// ---------------------------------------

//for

// let arr  = ["A","B","C","D","E"]  // [0,"A"]
// let arr2 = ["F","G","H","I","J"] // [1,"B"]

// let a = [...arr,...arr2]

// //console.log(...a.entries())


// for(let [index,value] of a.entries()){
//     console.log(index,value)
// }





// for(let i = 0 ; i < a.length; i++){
//     console.log(a[i])
// }