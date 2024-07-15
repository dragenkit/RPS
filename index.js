const choiceRock = "Rock"
const choicePaper = "Paper"
const choiceSissors = "Sissors"

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 2)

if (randomNumber === 0) {
  return choiceRock
} else if (randomNumber === 1) {
  return choicePaper
} else {
  return choiceSissors
}
}





