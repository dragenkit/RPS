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

function getHumanChoise() {
 let humanChoise = prompt("Rock,Paper,Sissor");

humanChoise.toLocaleLowerCase();
return humanChoise
}

let humanScore = 0;
let computerScore = 0;

