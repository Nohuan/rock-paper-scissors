// RPS = rock paper sicsors

function getComputerChoice() {
  let choice = ["rock", "paper", "sicsors"];
  let random_number = Math.floor(Math.random() * choice.length);
  return choice[random_number];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  switch (playerSelection) {
    case "rock":
      switch (computerSelection) {
        case "rock":
          return "It's tie!";
        case "paper":
          return "You Lose! Paper beats Rock";
        case "sicsors":
          return "You Win! Rock beats Sicsors";
      }
    case "paper":
      switch (computerSelection) {
        case "rock":
          return "You Win! Paper beats Rock";
        case "paper":
          return "It's tie!";
        case "sicsors":
          return "You Lose! Sicsors beats Paper";
      }
    case "sicsors":
      switch (computerSelection) {
        case "rock":
          return "You Lose! Rock beats Sicsors";
        case "paper":
          return "You Win! Sicsors beats Paper";
        case "sicsors":
          return "It's tie!";
      }
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let round;
  for (let i = 1; i <= 5; i++) {

    const playerSelection = window.prompt("type yours choice:");
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
