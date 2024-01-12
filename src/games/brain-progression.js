#!/usr/bin/env node

import runGame from '../../bin/index.js';
import getRandomNumber from '../utils.js';

console.log('What number is missing in the progression?');

function generateArithmeticProgression() {
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

function getHiddenNumber(progressionArray) {
  const randomProgressionArrayIndex = Math.floor(
    Math.random() * (progressionArray.length - 0) + 0,
  );

  const hiddenNumber = progressionArray[randomProgressionArrayIndex];
  return hiddenNumber;
}

function getProgressionArrayWithHiddenNumberQuestion(
  hiddenNumber,
  progressionArray,
) {
  const progressionArrayCopy = progressionArray;
  const indexOfHiddenNumber = progressionArrayCopy.indexOf(hiddenNumber);
  progressionArrayCopy[indexOfHiddenNumber] = '..';
  return progressionArrayCopy.toString().replace(/,/g, ' ');
}

function generateProgressionQuestionWithCorrectAnswer() {
  const arithmeticProgression = generateArithmeticProgression();
  const hiddenNumber = getHiddenNumber(arithmeticProgression);
  const arithmeticProgressionQuestion = getProgressionArrayWithHiddenNumberQuestion(
    hiddenNumber,
    arithmeticProgression,
  );
  return [arithmeticProgressionQuestion, hiddenNumber.toString()];
}

runGame(generateProgressionQuestionWithCorrectAnswer);
