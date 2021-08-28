let firstCard = 10
let secondCard = 11
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEL = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el") // let sumEL = document.querySelector("#sum-el") //# is for id attr , . is for class attr

function startGame() {
    renderGame()
}

function renderGame() {

    sumEL.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + cards[0] + " - " + cards[1]

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEL.textContent = message 
}

function renderGame() {
    let card = 1

    sum += card
    cards.push(card)

    startGame()
}