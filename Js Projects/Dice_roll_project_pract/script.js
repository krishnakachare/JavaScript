
let scoreP1 = document.querySelector("#score--0")
let scoreP2 = document.querySelector("#score--1")
let currentScoreP1 = document.querySelector("#current--0")
let currentScoreP2 = document.querySelector("#current--1")

let diceOne = document.querySelector(".dice")
let btnNew = document.querySelector(".btn--new")
let btnRoll = document.querySelector(".btn--roll")
let btnHold = document.querySelector(".btn--hold")

let playing, scores, currentScore, activePlayer

let init = function () {
    scores = [0, 0]
    currentScore = 0
    activePlayer = 0
    playing = true

    scoreP1.textContent = 0
    scoreP2.textContent = 0
    currentScoreP1.textContent = 0
    currentScoreP2.textContent = 0

}

init()


//Player started to play new game
btnNew.addEventListener('click', init)

//roll dice functionality
btnRoll.addEventListener('click', function () {
    if (playing) {
        let dice = Math.floor(Math.random() * 6) + 1
        diceOne.src = `dice-${dice}.png`

        if (dice !== 1) {
            currentScore = currentScore + dice
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore

        }
        else {

            switchPlayer()
        }

    }

})

function switchPlayer() {

    document.querySelector(`#current--${activePlayer}`).textContent = 0
    currentScore = 0
    activePlayer = activePlayer === 0 ? activePlayer = 1 : activePlayer = 0

}

btnHold.addEventListener("click", function () {
    scores[activePlayer] = scores[activePlayer] + currentScore
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer]

    if (scores[activePlayer] >= 50) {
        document.querySelector(`#name--${activePlayer}`).textContent = "Winnar"
        playing=false
    }
    switchPlayer()
})
















