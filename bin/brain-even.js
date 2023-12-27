#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const correctAnswers = ['yes', 'no'];
const minimumNumber = 1;
const maximumNumber = 100;
let testIsPassed = true;

for (let i = 0; i < 3; i += 1) {
  const number = Math.floor(
    Math.random() * (maximumNumber - minimumNumber) + minimumNumber,
  );
  console.log(`Question: ${number}`);
  const answerToQuestion = readlineSync.question('Your answer: ');
  if (number % 2 === 0 && answerToQuestion === 'no') {
    console.log(
      `'no' is wrong answer. Correct answer was 'yes'.\nLet's try again, ${userName}`,
    );
    testIsPassed = false;
    break;
  } else if (number % 2 !== 0 && answerToQuestion === 'yes') {
    console.log(
      `'yes' is wrong answer. Correct answer was 'no'.\nLet's try again, ${userName}`,
    );
    testIsPassed = false;
    break;
  } else if (correctAnswers.includes(answerToQuestion === false)) {
    console.log(
      `'${answerToQuestion}' is wrong answer.\nLet's try again, ${userName}`,
    );
    testIsPassed = false;
    break;
  } else {
    console.log('Correct!');
  }
}

if (testIsPassed === true) {
  console.log(`Congratulations, ${userName}`);
}
