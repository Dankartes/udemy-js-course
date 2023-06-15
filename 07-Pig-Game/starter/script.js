'use strict';

//variables

//select elements
const player0 = document.querySelector('.player--0');
const score0El = document.querySelector('#score--0');
// const currentScore0El = document.getElementById('current--0');

const player1 = document.querySelector('.player--1');
const score1El = document.querySelector('#score--1');
// const currentScore1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn.btn--new');
const btnRoll = document.querySelector('.btn.btn--roll');
const btnHold = document.querySelector('.btn.btn--hold');

const switchPlayer = () => {
  document.querySelector(`#current--${currentPlayer}`).textContent = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  currentScore = 0;

  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

//starting conditions
let playing, currentPlayer, currentScore, scores;

const init = () => {
  if (typeof currentPlayer != 'undefined') {
    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.remove('player--winner');

    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.remove('player--active');
  }

  player0.classList.add('player--active');

  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;

  playing = true;
  currentPlayer = 0;
  currentScore = 0;
  scores = [0, 0];

  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
};

init();
//rolling dice functionality
btnRoll.addEventListener('click', () => {
  if (playing) {
    const diceNo = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');

    diceEl.src = `dice-${diceNo}.png`;

    if (diceNo !== 1) {
      currentScore += diceNo;

      document.querySelector(`#current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    scores[currentPlayer] += currentScore;
    document.querySelector(`#score--${currentPlayer}`).textContent =
      scores[currentPlayer];

    if (scores[currentPlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('player--active');
    } else switchPlayer();
  }
});

btnNew.addEventListener('click', init);
