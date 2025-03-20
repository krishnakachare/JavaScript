// sync code 
// asyn code

// program1
// function additionA(){
//     console.log("A is printed")
// }

// function additionB(){
//     console.log("B is printed")
// }
// additionB()
// additionA()


// program 2
// function additionC(){
//     setTimeout(function(){
//         console.log("printed C")
//     },2000)
// }
// function additionD(){
//     console.log("printed D")
// }
// additionC()
// additionD()


// program3 
// function additionE(){
//     setTimeout(function(){
//         console.log('user created')
//     },3000)

//     setTimeout(function(){
//         console.log('get id')
//     },2000)

//     setTimeout(function(){
//         console.log('get info by id')
//     },1000)
// }
// additionE()

// Execute asyn code , synchronously
// program 4

// function additionE() {
//     setTimeout(function () {
//         console.log('user created')
//         setTimeout(function () {
//             console.log('get id')
//             setTimeout(function () {
//                 console.log('get info by id')
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }
// additionE()

// promise --- asyn -- sync ---- better way  --- promises
// promies ---- pending 
// resolve 
// reject

// let pro = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 100
//     if(a == b){
//         resolve('hello i completed promise')
//     }
//     else {
//         reject('promise is not completed')
//     }
// })
// // consuming the promise
// pro.then(function(a){
//     console.log(a)
// },function(b){
//     console.log(b)
// })

// let pro3 = new Promise (function(resolve,reject){
//     let city = 'pune'
//     if(city.includes('z')){
//         resolve([11,22,33])
//     }
//     else {
//         reject([-11,-12,13])
//     }
// })
// pro3.then(function(a){
//     console.log(a[0])
// },function(b){
//     console.log(b[1])
// })

// let pro4 = new Promise(function (resolve, reject) {
//     let city = 'pune'
//     if (city.includes('p')) {
//         resolve([11, 22, 33])
//     }
//     else {
//         reject([-11, -12, 13])
//     }
// })
// pro4
// .then(function(a){
//     console.log(a[0])
// })
// .catch(function(b){
//     console.log(b[2])
// })
// .finally(function(){
//     console.log("i will always execute")
// })


// program 5 


// let pro5 = new Promise(function (resolve, reject) {
//     let a = 10
//     let b = 50
//     if(a > b){
//         resolve('a is called')
//     }
//     else {
//         reject('b is called')
//     }
// })
// consuming promise

// pro5
// .then(function(a){
//     console.log(a)
//     return "hello"
// })
// .then(function(b){
//     console.log(b)
// })
// .catch(function(c){
//     console.log(c)
// })
// .finally(function(){
//     console.log('i will execute')
// })




// Promise.all()
// Promise.any()
// Prmoise.race()
// Promise.allSettled()



function createUser(){
          return  new Promise(function(resolve,reject){
              setTimeout(function(){
                  resolve('user created')
              },3000)
          })
      }
      
      function getId(){
          return  new Promise(function(resolve,reject){
              setTimeout(function(){
                  resolve('get id')
              },2000)
          })
      }
      
      function getInfoById(){
          return  new Promise(function(resolve,reject){
              setTimeout(function(){
                  resolve('get info by id')
              },1000)
          })
      }
      
      
      createUser()
      .then(function(a){
          console.log(a)
          return  getId()
      })
      .then(function(b){
          console.log(b)
          return getInfoById()
      })
      .then(function(c){
          console.log(c)
      })
      .catch(function(){
          console.log('rejected')
      })
      .finally(function(){
          console.log('finally')
      })
      