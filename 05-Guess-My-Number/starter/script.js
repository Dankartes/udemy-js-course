'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value);

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
const scoreSelector = document.querySelector('.score');
scoreSelector.textContent = score;

let highscore = 0;

const clickHandler = () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('🚫 Invalid number!');
  } else if (guess === secretNumber) {
    displayMessage('🏆 Correct number!');

    document.querySelector('body').style.backgroundColor = 'Green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }

  if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess < secretNumber
          ? '👇 Number is too low!'
          : '🤳 Number is too high!'
      );
      score--;
      scoreSelector.textContent = score;
    } else {
      displayMessage('😘 You lost the game!!!');
      scoreSelector.textContent = 0;
    }
  }
};

const resetGameHandler = () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  scoreSelector.textContent = score;

  document.querySelector('body').style.removeProperty('background-color');
  document.querySelector('.number').style.removeProperty('width');
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = null;
};

document.querySelector('.btn.check').addEventListener('click', clickHandler);

document
  .querySelector('.btn.again')
  .addEventListener('click', resetGameHandler);
