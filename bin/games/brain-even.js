#!/usr/bin/env node
import { welcomeUser, runGame, } from '../../src/index.js';

const userName = welcomeUser();

console.log('Answer "yes" if the number is even, otherwise answer "no".',);

const generateEvenQuestion = () => {
  const minimumNumber = 1;
  const maximumNumber = 100;
  const number = Math.floor(
    Math.random() * (maximumNumber - minimumNumber) + minimumNumber,
  );
  return number;
};

const correctAnswerOnEvenQuestion = () => {
  const EvenQuestion = generateEvenQuestion();
  let correctAnswer = '';
  if (EvenQuestion % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [EvenQuestion, correctAnswer,];
};

runGame(correctAnswerOnEvenQuestion, userName,);
