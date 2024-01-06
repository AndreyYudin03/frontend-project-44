#!/usr/bin/env node

import { welcomeUser, runGame } from '../../src/index.js';

const userName = welcomeUser();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

function generatePrimeQuestion() {
  const minimumRandomNumber = 1;
  const maximumRandomNumber = 100;
  const randomNumber = Math.floor(
    Math.random() * (maximumRandomNumber - minimumRandomNumber) + minimumRandomNumber
  );
  return randomNumber;
}

function getPrimeQuestionAndCorrectAnswer() {
  const randomNumber = generatePrimeQuestion();
  let numberDivisorsWithoutRemainder = 0;
  for (let i = 0; i <= randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      numberDivisorsWithoutRemainder += 1;
    }
  }
  let numberIsSimple = '';
  if (numberDivisorsWithoutRemainder === 2) {
    numberIsSimple = 'yes';
  } else {
    numberIsSimple = 'no';
  }
  return [randomNumber, numberIsSimple];
}

runGame(getPrimeQuestionAndCorrectAnswer, userName);
