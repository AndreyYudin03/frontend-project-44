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
  const firstNumber = parseInt(gcdQuestionToArray[0], 10);
  const secondNumber = parseInt(gcdQuestionToArray[1], 10);
  let smallestNumber = 0;
  let largestNumber = 0;
  let result = 0;
  if (firstNumber <= secondNumber) {
    smallestNumber = firstNumber;
    largestNumber = secondNumber;
  } else {
    smallestNumber = secondNumber;
    largestNumber = firstNumber;
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
