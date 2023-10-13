//Rock,paper and scissor game

var choices = ['rock', 'paper', 'scissors'];

do {
  var playerOneChoice = prompt('Please enter rock, paper, or scissors');
  var playerOne = playerOneChoice.trim().toLowerCase();

  var computerChoice = Math.floor(Math.random() * choices.length);
  var computer = choices[computerChoice];

  var playerOneIndex = choices.indexOf(playerOne);
  var computerIndex = choices.indexOf(computer);

  if (playerOneIndex === -1) {
    alert('Invalid input. Please enter rock, paper, or scissors.');
    continue;
  }
  else if (playerOne === '') {
    alert('No input detected. Please enter rock, paper, or scissors.');
    continue;
  }

  if (playerOneIndex === computerIndex) {
    result = 'tie!';
  } else if (
    (playerOneIndex === 0 && computerIndex === 2) 
    (playerOneIndex === 1 && computerIndex === 0) 
    (playerOneIndex === 2 && computerIndex === 1)
  ) {
    result = 'Player One wins!';
  } else {
    result = 'Computer wins!';
  }


  alert('Player One: ' + playerOne + '\nComputer: ' + computer + '\nResult: ' + result);

} while (confirm('Do you want to play again?'));

alert('Thank you for playing!');