#!/usr/bin/env node
import { welcomeUser, runGame, getRandomNumber } from '../../src/index.js';

const userName = welcomeUser();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

function generateEvenQuestionWithCorrectAnswer() {
  const EvenQuestion = getRandomNumber();
  let correctAnswer = '';
  if (EvenQuestion % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [EvenQuestion, correctAnswer];
}

runGame(generateEvenQuestionWithCorrectAnswer, userName);
