const userScore = 0;
const computerScore = 0;
const userScorespam = document.getElementById('user-Score');
const computerScorespan = document.getElementById('computer-Score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

rock_div.addEventListener('click', function () {
  Gamepad('r');
});

paper_div.addEventListener('click', function () {
  Gamepad('p');
});

scissors_div.addEventListener('click', function () {
  Gamepad('s');
});
