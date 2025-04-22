const scoreMessage = document.getElementById('scoreMessage')
const playerScore = document.getElementById('playerScore')
const computerScore = document.getElementById('computerScore')
let ps = 0
let cs = 0
       
const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const scissorsBtn= document.getElementById("scissors")

rockBtn.addEventListener('click', () => playRound('rock',computerPlay()))
paperBtn.addEventListener('click', () => playRound('paper',computerPlay()))
scissorsBtn.addEventListener('click', () => playRound('scissors',computerPlay()))

function computerPlay() {
    let myArray = ["rock","paper","scissors"]
    return myArray[Math.floor(Math.random() * myArray.length)]
}

function playRound(playerSelection, computerSelection) {
    let result = null
    let msg = ""
    if (playerSelection == computerSelection) {
        result = 'draw'
        msg = "Draw!"
    }
    
    switch(playerSelection) {
        case "rock":
            if (computerSelection == "paper") {
                msg = "You lose this round! Paper beats Rock!"
                result = 'loss'
            }
            if (computerSelection == "scissors") {
                msg = "You win this round! Rock beats Scissors!"
                result = 'win'
            }
        case "paper":
            if (computerSelection == "rock") {
                msg = "You win this round! Paper beats Rock!"
                result = 'win'
            }
            if (computerSelection == "scissors") {
                msg = "You lose this round! Scissors beats Paper!"
                result = 'loss'
            }
        case "scissors":
            if (computerSelection == "rock") {
                msg = "You lose this round! Rock beats Scissors!"
                result = 'loss'
            }
            if (computerSelection == "paper") {
                msg = "You win this round! Scissors beats Paper!"
                result = 'win'
            }
    }
    updateMessage(result,msg,playerSelection,computerSelection)
}

function updateMessage(result, message, playerSelection, computerSelection) {
    switch (result) {
        case 'draw':
            scoreMessage.textContent = message
            console.log("draw")
            break
        case 'win':
            scoreMessage.textContent = message
            ps += 1
            playerScore.textContent = 'Your Score: ' + ps
            console.log("win")
            break
        case 'loss':
            scoreMessage.textContent = message
            cs += 1
            computerScore.textContent = 'Computer\'s Score: ' + cs
            console.log("loss")
            break
    }
}
