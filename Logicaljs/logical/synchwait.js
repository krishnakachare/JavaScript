// // call back hell
// // sync
// // async
// // async ===> async 
// // step 1 ===> step 2
// // call back ====> promises



// // call back hell ----> XMLHttpRequest


//document.querySelector('body')
// function renderHtml(data){

//     let html = `<div>
//         <p>${data.id}</p>   
//         <p>${data.first_name}</p>   
//         <p>${data.last_name}</p>   
//         <p>${data.email}</p>
//         <img src = "${data.avatar}"/>
//     </div>`

//     document.querySelector('body').insertAdjacentHTML('beforeend',html)

// }







let request = new XMLHttpRequest()
request.open('GET', 'https://reqres.in/api/users?page=2')
request.send()
request.addEventListener('load', function () {
    console.log(this.responseText) // json
    console.log(JSON.parse(this.responseText))
})

// function getUser(page) {
//     let request = new XMLHttpRequest()
//     request.open('GET', `https://reqres.in/api/users?page=${page}`)
//     request.send()
//     request.addEventListener('load', function () {
//         //console.log(this.responseText) // json
//         //console.log(JSON.parse(this.responseText))
//         let users = JSON.parse(this.responseText)
//         let id = users.data[0].id
//         console.log(id)

//         let request = new XMLHttpRequest()
//         request.open('GET', `https://reqres.in/api/users/${id}`)
//         request.send()

//         request.addEventListener('load',function(){
//             let user = JSON.parse(this.responseText)
//             console.log(user.data)
//             let id = user.data.id
//             let firstName = user.data.first_name
//             console.log(id)
//             console.log(firstName)

//             // getData().then(function(str){
//             //     console.log(str)
//             // })
//             // .catch(function(str){
//             //     console.log(str)
//             // })
//             // .finally(function(){
//             //     console.log('i will run anyway')
//             // })


//         })

//     })
// }
// getUser(2) 



// promises 
// function getData(){
//     return new Promise(function(resolve, reject){
//         let a = 1 
//         let b = 1
    
//         if(a == b){
//             resolve('hello')
//         }
//         else {
//             reject("bye")
//         }
    
//     })
// }



// let pro = new Promise(function(resolve, reject){
//     let a = 1 
//     let b = 1

//     if(a == b){
//         resolve('hello')
//     }
//     else {
//         reject("bye")
//     }

// })

// pro.then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log('i will run anyway')
// })





// POM ===> functio (API)===> id 

// function getUser(page){
//     fetch(`https://reqres.in/api/users?page=${page}`)
//     .then(function(response){
//         return response.json()
//     }).then(function(obj){
//         return obj.data[0].id
//     }).then(function(id){
//         return fetch(`https://reqres.in/api/users/${id}`)
//     }).then(function(response){
//         return response.json()
//     }).then(function(object){
//         // console.log(object.data.id)
//         // console.log(object.data.first_name)
//         renderHtml(object.data)
//     })
// }

// getUser(2)
// getUser(1)