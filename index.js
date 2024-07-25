const choiceRock = "rock"
const choicePaper = "paper"
const choiceSissors = "sissors"

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
 let humanChoise = prompt("Rock,Paper,Sissor");

humanChoise.toLocaleLowerCase();
return humanChoise
}

let humanScore = 0;
let computerScore = 0;
let humanChoise = getHumanChoice();
let computerChoice = getComputerChoice();


function playRound(humanScore,computerChoice) {

if (computerChoice === choiceRock) {
    if (humanChoise === choiceRock) {
      console.log("draw")
      console.log("current score " + "human: " + humanScore + " computer: " + computerScore)
    }
  }
  
    if (humanChoise === choicePaper) {
      humanScore + 1;
      console.log("you win");
      console.log("current score " + "human: " + humanScore + " computer: " + computerScore)
    }
  
    if(humanChoise === choiceSissors) {
      computerScore + 1;
      console.log("you lose")
      console.log("current score " + "human: " + humanScore + " computer: " + computerScore)
    }
}

if (computerChoice === choicePaper) {
  if (humanChoise === choiceRock) {
      computerScore + 1;
      console.log("you lose")
      console.log("current score " + "human: " + humanScore + " computer: " + computerScore)
  }
  
  
    if (humanChoise === choicePaper) {
      computerScore + 1;
      console.log("draw")
      console.log("current score " + "human: " + humanScore + " computer: " + computerScore)
    }

  
  
    if(humanChoise === choiceSissors) {
      humanScore + 1;
      console.log("you win")
      console.log("current score " + "human: " + humanScore + " computer: " + computerScore)
    }
  

if (computerChoice === choiceSissors) {
  if (humanChoise === choiceRock) {
    humanScore + 1;
    console.log("you win")
  }

  if (humanChoise === choicePaper) {
    computerScore + 1;
    console.log("you lose")
    console.log("current score " + "human: " + humanScore + " computer: " + computerScore)
  }

  if (humanChoise === choiceSissors) {
    console.log("draw")
    console.log("current score " + "human: " + humanScore + " computer: " + computerScore)
  }
}

}

playRound()
