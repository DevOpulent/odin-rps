let playerScore = 0;
let computerScore = 0; 

const options = ["rock", "paper","scissors"];
const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')

const outcomeDiv = document.querySelector('.outcome')

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
    const result = checkWinner(playerSelection, computerSelection);
    const p = document.createElement('p');
    outcomeDiv.innerHTML = ""; // clear previous round

    if (result === "Tie") {
        p.innerText = "You tied!!";
    } else if (result === "Player") {
        playerScore++;
        p.innerText = `You Win!! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        p.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

    outcomeDiv.appendChild(p);
    updateScoreboard();
    checkForWinner();
}

function updateScoreboard() {
    document.querySelector('.player-score').textContent = `Player: ${playerScore}`;
    document.querySelector('.computer-score').textContent = `Computer: ${computerScore}`;
}

function checkForWinner() {
    const winnerMessage = document.querySelector('.winner-message');

    if (playerScore === 5) {
        winnerMessage.textContent = "🎉 You won the game!";
        disableButtons();
    } else if (computerScore === 5) {
        winnerMessage.textContent = "💀 You lost the game!";
        disableButtons();
    }
}

function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

        rockButton.addEventListener('click', () => {
            const computerSelection = getComputerChoice();
            const playerSelection = "rock";
            playRound(playerSelection, computerSelection)
        })

        paperButton.addEventListener('click', () => {
            const computerSelection = getComputerChoice();
            const playerSelection = "paper";
            playRound(playerSelection, computerSelection)
        })

        scissorsButton.addEventListener('click', () => {
            const computerSelection = getComputerChoice();
            const playerSelection = "scissors";
            playRound(playerSelection, computerSelection)
        })