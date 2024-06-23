let fName = "Hare Krishna! Hare Rama!"
let fName1 = fName.split("").sort().join();
console.log(fName1)
let counter = 1;

for (let i = 0; i < fName1.length; i++) {
    if (fName1[i] == fName1[i + 1]) {
        counter++;
    }
    else
     {
        console.log(fName1[i] + " " + counter);
        counter = 1;

    }
}
console.log(counter)





// let fName = "HareKrishnaHareRama"
//   let fName1 = fName.split("").sort();
//   let counter = 1;

//   for (let i = 0; i < fName1.length; i++) 
//   {
//     if (fName1[i] == fName1[i + 1])
//      {
//       counter++;
//      }
//      else
//       {
//                  console.log(fName1[i] + " " + counter);
//                  counter = 1;
                 
//                }
//     }





    // https://www.w3schools.com/jsref/jsref_substring.asp













    //Q. Sorting the array have differant type of elements

let multiArray = [67, [4, 5, 6, 'hi'], "karan", true, 22.4, "rajshree", [1, 2, 3], false, -365,];
function SortElementWithDataType(x) {
        let sorted = []
        let types = []
        for (let i = 0; i < x.length; i++) {
                if (x[i].length) {
                        for (let j = 0; j < x[i].length; j++) {
                                let type = typeof (x[i][j])
                                if (!types.includes(type)) {
                                        console.log('hello')
                                        types.push(type)
                                }
                        }
                }
        }
        for (let i = 0; i < types.length; i++) {
                for (let j = 0; j < x.length; j++) {
                        if (types[i] == typeof (x[j])) {
                                sorted.push(x[j])
                        }
                }
        }
        console.log(types)
        return sorted
}
let f = SortElementWithDataType(multiArray)
console.log(f)



///////////////////////////////////////////////ME//////////////////////////////////////////////////////

//EXAMPLE ---1.

// let str = 'AAAAAC2345@#$&6CCCDD%Z'
// let x = str.split('')
// //console.log(x)                              // // we can get results with or without
// let num = 0
// let special = 0
// let alpha = 0

// for (let i = 0; i < x.length; i++) {
//     if (Number(x[i])) {
//         num = num + 1
//     }

//     else if ((x[i] == '@') || (x[i] == '#') || (x[i] == '$') || (x[i] == '&') || (x[i] == '%')) {
//         special = special + 1
//     }

//     else { alpha = alpha + 1 }
// }
// console.log(num, special, alpha)


//EXAMPLE---2.

// let caa = "123AAAAbaca3435354@@2222!!!&&&&3534535354sca"
// let aa = 0
// let nn = 0
// let ss = 0

// for (let i = 0; i < caa.length; i++) {
//     if (Number(caa[i])) {
//         nn = nn + 1
//     }

//     else if ((caa[i] == '@') || (caa[i] == '!') || (caa[i] == '&') ) {
//         ss = ss + 1
//     }

//     else { aa = aa + 1 }
// }
// console.log(aa, nn, ss)  // 11 24 9
