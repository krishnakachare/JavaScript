///////////////////////////////////  LEXICAL SCOPE   /////////////////////////////////////////////////
// child function can access all thing(parameters/variables) which have parent function is called lexical scope

// function  addA(x,y){
//     console.log(x+y) // 25
//     let h = 100 
//     let v = 20 

//     //console.log(j+d)                   // cant we go revers

//     addB()                      // WE can call function decleration before and after where function write
//     function addB(){
//         let j = 10
//         let d = 20
//         console.log(h+v)     // 120
//         console.log(j+d)     // 30
    
//         function addC(){
//             console.log(h+v+j+d)    // 150 
//         }
//         addC()
//     }
// }

// addA(12,13)
