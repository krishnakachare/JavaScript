/* 
# Polymorphism :
  1. Overloading :
   same class , same method name (same declaration), different signature(different defination).

  2. Overriding :
    different class , same method name (different declaration), same signature(same defination).
    Existing functionality override
    
  # Signature : type of arguments, no of arguments, order of arguments.

*/

//  1. Overloading : Examples-->
function add(a, b) {
    console.log(a + b);
}
function add(a, b, c) {
    console.log(a + b + c);
}
// function add(a, b, c) {
//     console.log(a + b + c);
// }
add(3);
add(3, 2);
add(3, 2, 5);
add(3, 2, 5, 4);

// .should()

//   2. Overriding : Examples--> override push, alert method
//-------------------------------------

// class Addition {
//     // add(x,y){
//     //     console.log(x+y)
//     // }
//     // add(x,y,z){
//     //     console.log(x+y+z)
//     // }

//     // add(x,y,z,q){
//     //     console.log(x+y+z+q)
//     // }

//     addition(x, y, z, a) {
//         if (x != undefined && y != undefined && z != undefined && a != undefined) {
//             console.log(x + y + z + a)
//         }
//         else if (x != undefined && y != undefined && z != undefined) {
//             console.log(x + y + z)
//         }
//         else if (x != undefined && y != undefined) {
//             console.log(x + y)
//         }
//     }
// }

// let a = new Addition()
// a.addition(12, 34, 5, 6)
// a.addition(12, 34, 44)
// a.addition(12, 34)

//---------------------------------

// class add {
//     add(a = undefined, b = undefined, c = undefined, d = undefined) {
//         if (a != undefined && b != undefined && c != undefined && d != undefined) {
//             console.log(a + b + c + d)
//         }
//         else if (a != undefined && b != undefined && c != undefined) {
//             console.log(a + b + c)
//         }
//         else if (a != undefined && b != undefined) {
//             console.log(a + b)
//         }
//     }
// }

// let x = new add()
// x.add(12,23,34,56)
// x.add(12,34)
// x.add(12,13,14)
//--------------------------------

// class OverloadingExample{
//     constructor(){
//         console.log('Default construtor called')
//     }
//     add(a = undefined , b = undefined , c = undefined){
//         if(a != undefined && b !=undefined && c != undefined ){
//             console.log(a+b+c)
//         }
//         else if(a != undefined && b !=undefined  ){
//             console.log(a+b)
//         }
//         else{
//             console.log('Please input correct parameters ')
//         }
//     }
// }

// new OverloadingExample().add(12,23,34)
// new OverloadingExample().add(12,23)
// new OverloadingExample().add()


/* 
Cypress:

.should("be.visible");
.should("have.text", "ABC")
.should("have.attr", "ABC", "ABCValue")

*/

