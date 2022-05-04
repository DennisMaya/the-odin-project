function computerPlay() {
    let myArray = ["rock","paper","scissors"]
    return myArray[Math.floor(Math.random() * myArray.length)]
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("Draw!")
        return null;
    }
    
    switch(playerSelection) {
        case "rock":
            if (computerSelection == "paper") {
                console.log("You lose! Paper beats Rock!")
                return false
            }
            if (computerSelection == "scissors") {
                console.log("You win! Rock beats Scissors!")
                return true
            }
        case "paper":
            if (computerSelection == "rock") {
                console.log("You win! Paper beats Rock!")
                return true
            }
            if (computerSelection == "scissors") {
                console.log("You lose! Scissors beats Paper!")
                return false
            }
        case "scissors":
            if (computerSelection == "rock") {
                console.log("You lose! Rock beats Scissors!")
                return false
            }
            if (computerSelection == "paper") {
                console.log("You win! Scissors beats Paper!")
                return true
            }
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let rounds = 5
    let result = null;
    for (let i = 0; i < rounds; i++) {
        const computerSelection = computerPlay();
        const playerSelection = prompt("Select to play Rock, Paper, or Scissors").toLowerCase().trim();
        result = playRound(playerSelection,computerSelection);
        switch(result) {
            case true:
                playerScore += 1;
            case false:
                computerScore += 1;
        }
    }

    if(playerScore > computerScore) {
        console.log("You win!")
    }
    else if(playerScore < computerScore) {
        console.log("You lose!")
    }
    else {
        console.log("Draw game!")
    }
}

playGame();