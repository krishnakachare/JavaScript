//********************************** REGULAR EXPRESSION ********************************************

// i  =  ignore case sencetive
// g  =  globaly search    ( means search beyond the first OCCURANCE)



// let regexp1 = new RegExp('Hello')
// console.log(regexp1)               //   /Hello/

// let regexp2 = /world/
// console.log(regexp2)              //  /world/

// METHOD 1. search  =   **ACTION = search index value       **RETURN = number

// let regexp3 = /python/
// let stri = 'Hi, i am to PYTHON and learning python'

// let zz = stri.search(regexp3)
// console.log(zz)             // 32        //  its gives the index value from where this word is present in string   BUT when word(element) is absent then its gives   -1


// let regexp4 = /python/i                       // ignor case sensitive
// let stri = 'Hi, i am to PYTHON and learning python'

// let zz = stri.search(regexp4)
// console.log(zz)                // 12     //  its gives the index value from where this word is present in string  



// METHOD 2. match  = **ACTION = match the given word(element)    **RETURN = Array

// let regexp5 = /python/i
// let stri = 'Hi, i am to PYTHON and learning python'
// let zz = stri.match(regexp5)
// console.log(zz)                // 'PYTHON',
//                                // index: 12,
//                                // input: 'Hi, i am to PYTHON and learning python',    
//                                // groups: undefined


// let regexp6 = /python/gi                                  // apply both global and ignore case sensitive
// let stri = 'Hi, i am to PYTHON and learning python'
// let zz = stri.match(regexp6)
// console.log(zz)                           // [ 'PYTHON', 'python' ]               



// METHOD 3. replace  = **ACTION = replace the word from  given word(element)   **RETURN = Replaced string

// let regexp7 = /python/gi                                 // apply both global and ignore case sensitive
// let stri = 'Hi, i am to PYTHON and learning python'
// let zz = stri.replace(regexp7,'js')
// console.log(zz)                           // Hi, i am to js and learning js             


// let regexp7 = /python/                                
// let stri = 'Hi, i am to PYTHON and learning python'
// let zz = stri.replace(regexp7,'js')
// console.log(zz)                           // Hi, i am to PYTHON and learning js         

// let regexp7 = /python/i                               
// let stri = 'Hi, i am to PYTHON and learning python'
// let zz = stri.replace(regexp7,'js')
// console.log(zz)                           // Hi, i am to js and learning python

// let regexp7 = /python/ig                               
// let stri = 'Hi, i am to PYTHON and learning python'
// let zz = stri.replace(regexp7,'js')
// console.log(zz)                           // Hi, i am to js and learning js



// https://www.regexpal.com/
