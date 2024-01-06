#!/usr/bin/env node

import { welcomeUser, runGame } from '../../src/index.js';

const userName = welcomeUser();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

function generatePrimeQuestion() {
  const minimumNumber = 1;
  const maximumNumber = 100;
  const randomNumber = Math.floor(
    Math.random() * (maximumNumber - minimumNumber) + minimumNumber,
  );
  return randomNumber;
}

function generatePrimeQuestionWithCorrectAnswer() {
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

runGame(generatePrimeQuestionWithCorrectAnswer, userName);
