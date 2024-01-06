#!/usr/bin/env node

import { runGame, welcomeUser, getRandomNumber } from '../../src/index.js';

const userName = welcomeUser();

console.log('Find the greatest common divisor of given numbers.');

function generateGcdQuestion() {
  const randomFirstNumber = getRandomNumber();
  const randomSecondNumber = getRandomNumber();
  return `${randomFirstNumber} ${randomSecondNumber}`;
}

function generateGcdQuestionWithCorrectAnswer() {
  const gcdQuestionString = generateGcdQuestion();
  const gcdQuestionToArray = gcdQuestionString.split(' ');
  const firstNumberGcdQuestion = parseInt(gcdQuestionToArray[0], 10);
  const secondNumberGcdQuestion = parseInt(gcdQuestionToArray[1], 10);
  let smallestNumber = 0;
  let largestNumber = 0;
  let result = 0;
  if (firstNumberGcdQuestion <= secondNumberGcdQuestion) {
    smallestNumber = firstNumberGcdQuestion;
    largestNumber = secondNumberGcdQuestion;
  } else {
    smallestNumber = secondNumberGcdQuestion;
    largestNumber = firstNumberGcdQuestion;
  }
  if (largestNumber % smallestNumber === 0) {
    result = smallestNumber;
  } else {
    for (let i = 1; i < smallestNumber; i += 1) {
      if (largestNumber % i === 0 && smallestNumber % i === 0) {
        result = i;
      }
    }
  }
  return [gcdQuestionString, result.toString()];
}

runGame(generateGcdQuestionWithCorrectAnswer, userName);
