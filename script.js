function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      console.log("Hubo un error en la opcion de la IA");
  }
}

function getHumanChoice() {
  let opcion = prompt("ingresa tu eleccion");
  return opcion.toLowerCase();
}

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
  console.log(`Your choice: ${humanChoice}. CPU choice : ${computerChoice}`);
  if (humanChoice == computerChoice) {
    console.log("Draw");
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "rock")
  ) {
    console.log("You won this round!");
    humanScore++;
  } else {
    console.log("You lose this round!");
    computerScore++;
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice(), humanScore, computerScore);
    console.log(`Your Score = ${humanScore}`);
    console.log(`CPU Score = ${computerScore}`);
  }
  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (computerScore < humanScore) {
    console.log("You lose the game!");
  }
  console.log(`Your final score = ${humanScore}`);
  console.log(`CPU final score = ${computerScore}`);
}

playGame();
