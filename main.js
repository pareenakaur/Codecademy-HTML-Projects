console.log('Game start');

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb'){
    return userInput;
  }else {
    console.log("Error, invalid input.");
  }
}

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random()* 3);
  switch(randomNumber){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2: 
      return 'scissors';
      break;
  }
}

function determineWinner(userChoice, computerChoice){
  if (userChoice === 'bomb'){
    return 'User wins!';
  } else if (userChoice === computerChoice){
    return 'Game is a tie.';
  } else if (userChoice === 'rock' && computerChoice === 'paper'){
    return 'Computer wins!';
  } else if (userChoice === 'paper' && computerChoice === 'scissors'){
    return 'Computer wins!';
  } else if (userChoice === 'scissors' && computerChoice === 'rock'){
    return 'Computer wins!';
  } else {
    return 'User wins!';
  }
}

/*
console.log(determineWinner('rock', 'paper'));
console.log(determineWinner('rock', 'scissors'));
console.log(determineWinner('rock', 'rock'));
console.log(determineWinner('paper', 'paper'));
console.log(determineWinner('paper', 'rock'));
console.log(determineWinner('paper', 'scissors'));
console.log(determineWinner('scissors', 'paper'));
console.log(determineWinner('scissors', 'scissors'));
console.log(determineWinner('scissors', 'rock'));
*/

function playGame(){
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  console.log('user\'s choice: '+ userChoice);
  console.log('computer\'s choice: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
