'use strict';
// Hosting
let winningScore = 10
let gameStatus = true
let arr = ['KRISHNA WINNER', 'SWAPNIL WINNER']
let arr1 = []
let activePlayer = 0
let currentScore = 0
let scores = [0, 0]
// HTML elements
let player1 = document.querySelector('#name--0')
let player2 = document.querySelector('#name--1')
let scoreP1 = document.querySelector('#score--0')
let scoreP2 = document.querySelector('#score--1')
let currentScoreP1 = document.querySelector('#current--0')
let currentScoreP2 = document.querySelector('#current--1')
let dice = document.querySelector('.dice')
// Events
let newGameB = document.querySelector('.btn.btn--new')
let rollDiceB = document.querySelector('.btn.btn--roll')
let holdB = document.querySelector('.btn.btn--hold')

init()

newGameB.addEventListener('click', init)

rollDiceB.addEventListener('click', function () {
    if (gameStatus) {
        // Dice Rolling
        let diceRollingNo = Math.floor(Math.random() * 6) + 1
        dice.src = `dice-${diceRollingNo}.png`
        if (diceRollingNo !== 1) {
            currentScore = currentScore + diceRollingNo
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore
        } else {
            switchPlayer()
        }
    }
})

holdB.addEventListener('click', function () {
    scores[activePlayer] = scores[activePlayer] + currentScore
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer]
    if (scores[activePlayer] >= winningScore) {
        document.querySelector(`#name--${activePlayer}`).textContent = arr[activePlayer]
        gameStatus = false
    }
    switchPlayer()
})

function init() {
    gameStatus = true
    activePlayer = 0
    currentScore = 0
    scores = [0, 0]
    player1.textContent = 'KRISHNA'
    player2.textContent = 'SWAPNIL'
    scoreP1.textContent = 0
    scoreP2.textContent = 0
    currentScoreP1.textContent = 0
    currentScoreP2.textContent = 0
}

function switchPlayer() {
    currentScore = 0
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore
    activePlayer = activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
}
