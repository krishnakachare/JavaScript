// if--else:
// age < 16 --- you can swim
// age >= 18 --- you can vote
// age 16 & 17 --- you can not vote


// var age = prompt("Enter your age:");

// if(age < 16){ // age 0 to 15
//     console.log("You can Swim");
// }
// else if(age >= 18){ // age >= 18
//     console.log("You can vote");
// }
// else{ // age 16 & 17
//     console.log("You can not vote..");
// }


// Foor Loop:

// Syntax:

// for(initailization; condition check; increment/decrement)
// {
//     statements;
// }

// 1 to 100
//  1 ------ <= 100

// for(var i = 1; i<=100; i++){
//    // console.log(i);
// }
 
// // i = 101; i <= 100; i++
// // {
// //     console.log(100)
// // }

// console.log(i);  // 101


// // 2 4 6 ..... 20

// for(var i = 2; i <= 20; i += 2){
//     console.log(i);  // 2 
// }

// console.log(i); // 22
// // i = i + 2 ----- i += 2
// // i++


// for ---- false ---- execute
// while ---- true ---- execute

// While Loop:

// Syntax:

// intialization
// while(Condition check){
//     statements
//     increment
// }


// 1 --- 10

// var x = 1;

// while(x <= 10){
//     console.log(x);
//     x++;
// }

// 4 8 12 ---- 40

// var i = 4;

// while(i<=40){
//     console.log(i)
//     i += 4;
// }



// do while loop:

// var i = 4;
// do{
//     console.log(i)
//     i += 4
// }
// while(i <= 40)


// break:

// break with for:

// for(var i = 1; i <= 20 ; i++)
// {
//     console.log(i);
//     if(i == 10){
//         break;
//     }
// }
// console.log(i)


// break with while

// var i = 2;

// while(i <= 20){
//     console.log(i)
//     if(i == 10){
//         break;
//     }
//     i += 2;
// }


// Continue


// continue with for:

// for(var i = 1; i <= 20 ; i++)
// {
//     console.log(i);
//     if(i == 10){
//         continue;
//     }
// }
// console.log(i)


// continue with while:

// var i = 5

// while(i <= 50){

//     console.log(i); // 5 10 15 infinite loop

//     if(i == 10){
//         continue;
//     }

//     i += 5;

// }



// var i = 0

// while(i <= 50){

//     i += 5;  // 5 10 15 ..... 50
 
//     if(i == 10){
//         continue;
//     }
//     console.log(i); 
// }



// for in:

// var languages = {
//     first: "C",
//     second: "CPP",
//     third: "JavaScript",
//     fourth: "Php",
//     fifth:"Python"
// }

// for(i in languages){
//     console.log(languages[i]);
// }

// for of

text = "JavaScript";
for(x of text){
    console.log(x);
}

// console.log(text)