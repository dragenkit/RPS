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

function playRound() {

getComputerChoice()

getHumanChoise()

  if (getComputerChoice() = choiceRock) {
    if (getHumanChoice() = choiceRock) {
      console.log("draw")
      console.log("current score" + "human: " + humanScore + "computer: " + computerScore)
    }
  }
  if (getComputerChoice() = choiceRock) {
    if (getHumanChoice() = choicePaper) {
      humanScore + 1;
      console.log("you win");
      console.log("current score" + "human: " + humanScore + "computer: " + computerScore)
    }
  }
  if (getComputerChoice() = choiceRock) {
    if(getHumanChoice() = choiceSissors) {
      console.log("you lose")
      console.log("current score" + "human: " + humanScore + "computer: " + computerScore)
    }
  }


}