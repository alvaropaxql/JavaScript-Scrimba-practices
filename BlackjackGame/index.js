let player = {
    name: "Alvaro",
    money: 50,
    playerInfo: function() {
        playerEl.textContent = player.name +  ": €" + player.money
    }
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let messageEL = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el") // let sumEL = document.querySelector("#sum-el") //# is for id attr , . is for class attr
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}

function renderGame() {
    let message = ""

    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " - "
    }

    sumEL.textContent = "Sum: " + sum
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
    player.playerInfo()
}

function newCard() {

    if(isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()

        sum += card
        cards.push(card)
        renderGame()
    }
}

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1

    if(randomCard === 1) {
        randomCard = 11
    }
    else if(randomCard >= 11 ) {
        randomCard = 10
    }

    return randomCard
}