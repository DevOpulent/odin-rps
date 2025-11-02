const options = ["rock", "paper","scissors"];

function getComputerChoice() {  
    const choice = options [Math.floor(Math.random() * options.length)];
    console.log(choice)
    return choice;

}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return ("Tie");
    }

    else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || 
    (playerSelection == "scissors" && computerSelection == "paper")) {
        return ("Player");
    }

    else {
        return ("Computer");
    }

}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection)

    if (result == "Tie") {
        return ("You Tied!!");
    }

    else if (result == "Player") {
        return `You Win!! ${playerSelection} beats ${computerSelection}`;
    }

    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

}

    const playerSelection = "rock";
    const computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));