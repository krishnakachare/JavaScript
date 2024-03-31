'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

// js
const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
// console.log(containerApp)
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };



accounts.forEach(function (el) {
  createUserName(el)
})

function createUserName(account) {
  account.userName = account.owner.split(' ')
    .map(function (el) {
      return el[0]
    }).join('').toLowerCase() // ss
  // ["Sarah","Smith"] // ["S","S] // .join("") //s
}

// console.log(accounts)


// Event handlers or Listeners 


// Login 

btnLogin.addEventListener('click', function () {




})










/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


// Event listerner  (explanation one)


// Explaination 
// let salary = [
//   [1, 2, 3]
//   , [3, 4, 5, 6]
//   , [11, 22, 333, 444, 555]
// ]

// let rrr = salary.filter(function (el) {
//   return el.length == 5
// })

// [[11, 22, 333, 444, 555]]

// let rrr = salary.find(function (el) {
//   return el.length == 5
// })
// [11, 22, 333, 444, 555]

// const accounts = [account1, account2, account3, account4];

// let r = document.querySelectorAll('.app')





// btnLogin.addEventListener('click', function () {
//   containerApp.style.opacity = 100;
//   let check = accounts.find((el) => {
//     console.log(el)
//     return el.owner == inputLoginUsername.value && el.pin == inputLoginPin.value
//   })

//   console.log(check)


//   if (check) {

//     //containerApp.setAttribute('style','opacity:100')
//     containerApp.style.opacity = 100;
//     console.log('YES')
//   } else {
//     console.log('NOT')
//   }
// })