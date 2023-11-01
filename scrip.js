// RPS = rock paper scissors
let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const outcomeDiv = document.querySelector(".outcome");
const p = document.createElement("p");

const results = document.createElement('div');


p.append(results)

function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  let random_number = Math.floor(Math.random() * choice.length);
  return choice[random_number];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  results.textContent = `${playerScore} ${computerScore}`;
  if (playerSelection === computerSelection) {
    playerSelection =
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    p.textContent = `You tie! You both choose ${playerSelection}.`;
    outcomeDiv.appendChild(p);
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    p.textContent = "You Won! Paper beats Rock";
    outcomeDiv.appendChild(p);
    playerScore++;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    p.textContent = "You Won! Rock beats Scissors";
    outcomeDiv.appendChild(p);
    playerScore++;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    p.textContent = "You Won! Scissors beats Paper";
    outcomeDiv.appendChild(p);
    playerScore++;
  } else {
    computerSelection =
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
    playerSelection =
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    p.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    outcomeDiv.appendChild(p);
    computerScore++;
  }
  p.append(results)
}

rockButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "rock";
  playRound(playerSelection, computerSelection);
});

paperButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "paper";
  playRound(playerSelection, computerSelection);
});

scissorsButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "scissors";
  playRound(playerSelection, computerSelection);
});

/*

  if (playerScore > computerScore) {
    console.log("You win your score was", playerScore);
  }
  else {
    console.log("You lose your score was", playerScore);
  }


 */
