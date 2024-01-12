#!/usr/bin/env node
import runGame from '../../bin/index.js';
import getRandomNumber from '../utils.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

function generateEvenQuestion() {
  const evenQuestion = getRandomNumber();
  return evenQuestion;
}

function getEvenQuestionAnswer(randomNumber) {
  let correctAnswer = '';
  if (randomNumber % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return correctAnswer;
}

function generateEvenQuestionWithCorrectAnswer() {
  const evenQuestion = generateEvenQuestion();
  const evenQuestionAnswer = getEvenQuestionAnswer(evenQuestion);
  return [evenQuestion, evenQuestionAnswer];
}

runGame(generateEvenQuestionWithCorrectAnswer);
