//var


var a = 10; // global
console.log('global ', a); // 10

function f1() {
    var a = 20; // function
    console.log('function ', a); // 20

    if (true) {
        var name = 'sachin'; // even though name is declared inside block, its scope is not block
        console.log('block ', name);
    }
    console.log('outside block ', name);
}
f1();







// Global Scope & Function Scope
var a = 10; // global
let b = 20; // global

function f1() {
    var c = 30; // function
    e = 50;  // scope is Gobal
    console.log('F1 started...')
    console.log('a ', a)
    console.log('b ', b)
    console.log('c ', c)
    // console.log('d ', d)  No
    console.log('e ', e); // yes
    console.log('F1 Ended...')
}
function f2() {
    var d = 40; // Function
    console.log('F2 started...')
    console.log('a ', a)
    console.log('b ', b)
    // console.log('c ', c)  No
    console.log('d ', d)
    console.log('e ', e) // yes
    console.log('F2 ended...')
}
f1();
f2();

// When a variable is declared without var/let/const , no matter where it is declared, its scope is global





//////////////////////////////////////////////////////////////////////
//let
let a = 10;
console.log('Global ', a); // global

function f1() {
    let a = 20;
    console.log('function ', a); // function 

    if (true) {
        let a = 30;
        console.log('block ', a); // block
    }
}
f1();




function varTest() {
    for (var i = 1; i <= 3; i++) {
        console.log('block ', i)
    }
    console.log('function ', i); // i variable is visible outside the forloop, its scope is not block , its scope is function
}
varTest()

function letTest() {
    for (let i = 1; i <= 3; i++) {
        console.log('block ', i)
    }
    // console.log('function ', i); i is not visible outside the loop, which is expected
}
letTest()

//////////////////////////////////////////////////////////////////////
//const