const startGameButton = document.querySelector('#start-game-btn');
const addNext = document.querySelector('.add');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK

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
}


startGameButton.addEventListener('click', getPlayerChoice)