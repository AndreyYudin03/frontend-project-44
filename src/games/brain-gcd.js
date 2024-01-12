#!/usr/bin/env node

import runGame from '../../bin/index.js';
import getRandomNumber from '../utils.js';

console.log('Find the greatest common divisor of given numbers.');

function generateGcdQuestion() {
  const randomFirstNumber = getRandomNumber();
  const randomSecondNumber = getRandomNumber();
  return [randomFirstNumber, randomSecondNumber];
}

function getGcdAnswer([firstNumber, secondNumber]) {
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
  return result.toString();
}

function generateGcdQuestionWithCorrectAnswer() {
  const [firstNumber, secondNumber] = generateGcdQuestion();
  const gcdQuestionArrayToString = `${firstNumber} ${secondNumber}`;
  const gcdAnswer = getGcdAnswer([firstNumber, secondNumber]);
  return [gcdQuestionArrayToString, gcdAnswer];
}

runGame(generateGcdQuestionWithCorrectAnswer);
