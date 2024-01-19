'use strict';

//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting conditions

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;
let cnt = 0;
let score0 = 0,
  score1 = 0;

let activePlayer = 0;
//rolling dice functionality

btnRoll.addEventListener('click', function () {
  //1. generating random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3. Check for rolled 1:if true, switch to next player

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    change();
  }
});

const change = function () {
  currentScore = 0;
  document
    .querySelector(`.player--${cnt % 2 ? 1 : 0}`)
    .classList.toggle('player--active');
  document
    .querySelector(`.player--${cnt % 2 ? 0 : 1}`)
    .classList.toggle('player--active');
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 1 ? 0 : 1;
  cnt++;
};

btnHold.addEventListener('click', function () {
  if (cnt % 2) {
    score1 += currentScore;
    score1El.textContent = score1;
    change();
  } else {
    score0 += currentScore;
    score0El.textContent = score0;
    change();
  }
  
});
