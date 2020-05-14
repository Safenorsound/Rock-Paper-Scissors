const userScore = 0;
const computerScore = 0;
const userScorespam = document.getElementById('user-Score');
const computerScorespan = document.getElementById('computer-Score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      console.log('User Wins!');
  }
}

function main() {
  rock_div.addEventListener('click', function () {
    game('r');
  });

  paper_div.addEventListener('click', function () {
    game('p');
  });

  scissors_div.addEventListener('click', function () {
    game('s');
  });
}

main();
