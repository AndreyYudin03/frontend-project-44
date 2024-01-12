#!/usr/bin/env node

import runGame from '../../bin/index.js';
import getRandomNumber from '../utils.js';

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

function generatePrimeQuestion() {
  const randomNumber = getRandomNumber();
  return randomNumber;
}

function getPrimeAnswer(randomNumber) {
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
  return numberIsSimple;
}

function generatePrimeQuestionWithCorrectAnswer() {
  const primeQuestion = generatePrimeQuestion();
  const primeAnswer = getPrimeAnswer(primeQuestion);
  return [primeQuestion, primeAnswer];
}

runGame(generatePrimeQuestionWithCorrectAnswer);
