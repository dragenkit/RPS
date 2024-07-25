const choiceRock = "rock"
const choicePaper = "paper"
const choiceSissors = "sissor"

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3)

if (randomNumber === 0) {
  return choiceRock
} else if (randomNumber === 1) {
  return choicePaper
} else if (randomNumber === 2) {
  return choiceSissors
}
}

function getHumanChoice() {
 let humanChoice = prompt("Rock,Paper,Sissor");

humanChoice.toLocaleLowerCase();
return humanChoice
}

let humanScore = 0;
let computerScore = 0;
/**let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
*/

function playRound(humanChoice,computerChoice) {
  
if (computerChoice === choiceRock) {
    if (humanChoice === choiceRock) {
      console.log("draw")
      console.log("current score " + "human: " + humanScore + " computer: " + computerScore)
    }
  
  
    if (humanChoice === choicePaper) {
      humanScore += 1;
      console.log("you win");
      console.log("current score " + "human: " + humanScore + " computer: " + computerScore)
    }
  
    if(humanChoice === choiceSissors) {
      computerScore += 1;
      console.log("you lose")
      console.log("current score " + "human: " + humanScore + " computer: " + computerScore)
    }
  }


if (computerChoice === choicePaper) {
  if (humanChoice === choiceRock) {
      computerScore += 1;
      console.log("you lose")
      console.log("current score " + "human: " + humanScore + " computer: " + computerScore)
  }
  
  
    if (humanChoice === choicePaper) {
      computerScore += 1;
      console.log("draw")
      console.log("current score " + "human: " + humanScore + " computer: " + computerScore)
    }

  
  
    if(humanChoice === choiceSissors) {
      humanScore += 1;
      console.log("you win")
      console.log("current score " + "human: " + humanScore + " computer: " + computerScore)
    }
  }

if (computerChoice === choiceSissors) {
  if (humanChoice === choiceRock) {
    humanScore += 1;
    console.log("you win")
    console.log("current score " + "human: " + humanScore + " computer: " + computerScore)
  }

  if (humanChoice === choicePaper) {
    computerScore += 1;
    console.log("you lose")
    console.log("current score " + "human: " + humanScore + " computer: " + computerScore)
  }

  if (humanChoice === choiceSissors) {
    console.log("draw")
    console.log("current score " + "human: " + humanScore + " computer: " + computerScore)
  }
}

}

function playGame() {

  while (humanScore < 3 && computerScore < 3) {

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    

    playRound(humanChoice,computerChoice);
  }
  if (humanScore === 3) {
    console.log("you won the game")
  } else if (computerScore === 3) {
    console.log("the computer won the game")
  }
}

playGame()