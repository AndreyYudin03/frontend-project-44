#!/usr/bin/env node

import { welcomeUser, runGame, getRandomNumber } from '../../src/index.js';

const userName = welcomeUser();

console.log('What number is missing in the progression?');

function generateProgressionQuestion() {
  const randomFirstNumber = getRandomNumber();

  const [minimumProgressionLength, maximumProgressionLength] = [4, 10];
  const randomProgressionLength = Math.floor(
    Math.random() * (maximumProgressionLength - minimumProgressionLength)
      + minimumProgressionLength,
  );

  const progressionArray = [];
  progressionArray.push(randomFirstNumber);
  const randomStepProgressionNumber = getRandomNumber();
  let lastElementProgressionArray = progressionArray[progressionArray.length - 1];

  for (let i = 0; i < randomProgressionLength; i += 1) {
    lastElementProgressionArray = progressionArray[progressionArray.length - 1];
    progressionArray.push(
      lastElementProgressionArray + randomStepProgressionNumber,
    );
  }

  return progressionArray;
}

function generateProgressionQuestionWithCorrectAnswer() {
  const progressionArray = generateProgressionQuestion();
  const randomProgressionArrayIndex = Math.floor(
    Math.random() * (progressionArray.length - 0) + 0,
  );

  const hiddenNumber = progressionArray[randomProgressionArrayIndex];

  progressionArray[randomProgressionArrayIndex] = '..';
  return [
    progressionArray.toString().replace(/,/g, ' '),
    hiddenNumber.toString(),
  ];
}

runGame(generateProgressionQuestionWithCorrectAnswer, userName);
