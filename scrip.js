// RPS = rock paper scissors
let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const outcomeDiv = document.querySelector(".outcome");
const p = document.createElement("p");

function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  let random_number = Math.floor(Math.random() * choice.length);
  return choice[random_number];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  switch (playerSelection) {
    case "rock":
      switch (computerSelection) {
        case "rock":
          p.textContent = "It's tie!";
          outcomeDiv.appendChild(p);

        case "paper":
          p.textContent = "You Lose! Paper beats Rock";
          outcomeDiv.appendChild(p);
        case "scissors":
          p.textContent = "You Win! Rock beats Scissors";
          outcomeDiv.appendChild(p);
      }
    case "paper":
      switch (computerSelection) {
        case "rock":
          return "You Win! Paper beats Rock";
        case "paper":
          return "It's tie!";
        case "scissors":
          return "You Lose! Scissors beats Paper";
      }
    case "scissors":
      switch (computerSelection) {
        case "rock":
          return "You Lose! Rock beats Scissors";
        case "paper":
          return "You Win! Sicssors beats Paper";
        case "scissors":
          return "It's tie!";
      }
  }
}

rockButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "rock";
  console.log(playRound(playerSelection, computerSelection));
});

paperButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "paper";
  console.log(playRound(playerSelection, computerSelection));
});

scissorsButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "scissors";
  console.log(playRound(playerSelection, computerSelection));
});

/*function game() {
  let playerScore = 0;
  let computerScore = 0;
  let round;
  for (let i = 1; i <= 1; i++) {

    // const playerSelection = window.prompt("type yours choice:");
    const computerSelection = getComputerChoice();


    round = playRound(playerSelection, computerSelection);
    console.log(round);
    if (round.includes("Win")) {
      playerScore++;
    } else if (round.includes("Lose")) {
      computerScore++;
    } else {
      continue;
    }
  }
 

  if (playerScore > computerScore) {
    console.log("You win your score was", playerScore);
  }
  else {
    console.log("You lose your score was", playerScore);
  }

}
game();
 */
