// synchronus code
// let test1 = function () {
//     console.log('Code starts here')
//     alert('Hello')
//     console.log('Code ends here')
// }
// let test2 = function () {
//     console.log('please look at me')
// }
// test1()
// test2()


// Asynchronus code

// let test1 = function () {

//     setTimeout(function () {
//         console.log('Code starts here')
//         alert('Hello')
//         console.log('Code ends here')

//     }, 5000);

// }
// let test2 = function(){
//     console.log('please look at me')
// }
// test1()
// test2()



//---- cy in nature is asynchrous 
// while executing  it becomes synchronus



//------------------------->


// describe('verify the synch nature of cypress', () => {
//     it('verify the synch', () => {
//         cy.visit('http://www.google.com')
//         console.log('hello')
//         cy.get('input[name="q"]').type('hello').then(()=>{
//             console.log('hello')
//         })

//     })
//     // all the cypress commands are asyn
//     // synchronus when execute because internally they resolve promise

// })