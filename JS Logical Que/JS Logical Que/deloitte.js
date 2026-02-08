let names = ["Mahesh", "Dienesh", "Kamalesh", "Sathish", "Suresh", "Ramesh"];
let weightage = [-2, 2, 1, -1, 3, 0];
let sortWeightage = [-2, 2, 1, -1, 3, 0];
sortWeightage.sort().reverse();
// console.log(sortWeightage);// [ 3, 2, 1, 0, -2, -1 ]
let nameObj = new Map();
let newName = [];

/* 
Map(6) {
  -2 => 'Mahesh',
  2 => 'Dienesh',
  1 => 'Kamalesh',
  -1 => 'Sathish',
  3 => 'Suresh',
  0 => 'Ramesh'
}
*/

for (let i = 0; i < names.length; i++) {
    nameObj.set(weightage[i], names[i])
};

for (let val of sortWeightage) {
    newName.push(nameObj.get(val));
}

console.log(newName); // [ 'Suresh', 'Dienesh', 'Kamalesh', 'Ramesh', 'Mahesh', 'Sathish' ]


