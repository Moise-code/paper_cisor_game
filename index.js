const startGameButton = document.querySelector('#start-game-btn');
const addNext = document.querySelector('.add');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
let isGameRunning = false;
const RESULT_PLAYER_WINS = 'the player won the game';
const RESULT_COMPUTER_WINS = 'the computer won the game'

const getPlayerChoice = () =>{
  const selection = prompt(`choose between ${ROCK}, ${PAPER} or ${SCISSORS}, what do you choose?`, '').toUpperCase() ;

  if(
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(`Invalid choice sir, therefore we just picked ${DEFAULT_USER_CHOICE} for you`)
    addNext.innerHTML += `<p>The choice that a user chose is ${DEFAULT_USER_CHOICE}</p>`
    console.log(DEFAULT_USER_CHOICE);
    return DEFAULT_USER_CHOICE;
  } else if(selection === ROCK ||
            selection === PAPER || 
            selection === SCISSORS
    ) {
      addNext.innerHTML += `<p>The choice that a user chose is ${selection}</p>`
      console.log(selection);
      return selection;
    }
    // adding the computer choice here
  
    
}
const getComputerChoice = () =>{
  const randomValue = Math.random();
  if(randomValue < 0.34){
    return ROCK;
  } else if(randomValue < 0.70){
    return PAPER;
  } else {
    return SCISSORS;
  }
};
const getWinner = (computerChoice, playerChoice) =>{
if(computerChoice === playerChoice){
   return RESULT_DRAW;
} else if (computerChoice === ROCK && playerChoice === PAPER || 
           computerChoice === PAPER && playerChoice === SCISSORS ||
          computerChoice === SCISSORS && playerChoice === ROCK) {
  return RESULT_PLAYER_WINS;
} else if(playerChoice === PAPER && computerChoice === ROCK ||
          playerChoice === PAPER && computerChoice === SCISSORS ||
          playerChoice === SCISSORS && computerChoice === ROCK){

            return RESULT_COMPUTER_WINS;
}
}

startGameButton.addEventListener('click', e =>{
  e.preventDefault();
  if(isGameRunning){
    return;

  }
  isGameRunning = true;
  console.log('The Game is starting....');
  const playerChoose = getPlayerChoice();
  const computerChoose = getComputerChoice();
  getWinner(computerChoose, playerChoose);
  const winner = getWinner(computerChoose, playerChoose);
  // lets provide the message to the user
  let message = `you pickec ${playerChoose}, the computer picked ${computerChoose}, therefore you `; 

  if(winner === RESULT_DRAW){
    message = message + 'have a draw';
  } else if( winner === RESULT_PLAYER_WINS ) {
    message = message + 'won the the game'
  } else {
    message = message + 'lost and the computer won the game.'
  }
  alert(message);
  isGameRunning = false;
})