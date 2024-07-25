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
 let humanChoice = prompt("Rock,Paper,Sissor");

humanChoice.toLocaleLowerCase();
return humanChoice
}

let humanScore = 0;
let computerScore = 0;
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();


function playRound(humanChoice,computerChoice) {

if (computerChoice === choiceRock) {
    if (humanChoise === choiceRock) {
      console.log("draw")
      console.log("current score " + "human: " + humanScore + " computer: " + computerScore)
    }
  }
  
    if (humanChoice === choicePaper) {
      humanScore + 1;
      console.log("you win");
      console.log("current score " + "human: " + humanScore + " computer: " + computerScore)
    }
  
    if(humanChoice === choiceSissors) {
      computerScore + 1;
      console.log("you lose")
      console.log("current score " + "human: " + humanScore + " computer: " + computerScore)
    }
}

if (computerChoice === choicePaper) {
  if (humanChoice === choiceRock) {
      computerScore =+ 1;
      console.log("you lose")
      console.log("current score " + "human: " + humanScore + " computer: " + computerScore)
  }
  
  
    if (humanChoice === choicePaper) {
      computerScore =+ 1;
      console.log("draw")
      console.log("current score " + "human: " + humanScore + " computer: " + computerScore)
    }

  
  
    if(humanChoice === choiceSissors) {
      humanScore =+ 1;
      console.log("you win")
      console.log("current score " + "human: " + humanScore + " computer: " + computerScore)
    }
  

if (computerChoice === choiceSissors) {
  if (humanChoise === choiceRock) {
    humanScore =+ 1;
    console.log("you win")
  }

  if (humanChoice === choicePaper) {
    computerScore =+ 1;
    console.log("you lose")
    console.log("current score " + "human: " + humanScore + " computer: " + computerScore)
  }

  if (humanChoice === choiceSissors) {
    console.log("draw")
    console.log("current score " + "human: " + humanScore + " computer: " + computerScore)
  }
}

}

playRound()
