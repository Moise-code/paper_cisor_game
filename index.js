const startGameButton = document.querySelector('#start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

const getPlayerChoice = () =>{
  const selection = prompt(`choose between ${ROCK}, ${PAPER} or ${SCISSORS}, what do you choose?`, '');

  if(
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(`Invalid choice sir, therefore we just picked ${SCISSORS} for you`)
  }
}


startGameButton.addEventListener('click', )