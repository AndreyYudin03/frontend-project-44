#!/usr/bin/env node
import readlineSync from "readline-sync";
import welcomeUser from "../../src/index.js";

const userName = welcomeUser();

const operationsArray = ["+", "-", "*"];
const minimumNumber = 1;
const maximumNumber = 100;
let randomFirstOperand = 0;
let randomSecondOperand = 0;
let randomOperator = "";
let mathematicalQuestion = 0;
let mathematicalQuestionToString = "";
let testIsPassed = true;

for (let i = 0; i < 3; i += 1) {
  randomFirstOperand = Math.floor(
    Math.random() * (maximumNumber - minimumNumber) + minimumNumber
  );
  randomSecondOperand = Math.floor(
    Math.random() * (maximumNumber - minimumNumber) + minimumNumber
  );
  randomOperator = operationsArray[Math.floor(Math.random() * (2 - 0) + 0)];
  if (randomOperator === "+") {
    mathematicalQuestion = randomFirstOperand + randomSecondOperand;
  } else if (randomOperator === "-") {
    mathematicalQuestion = randomFirstOperand - randomSecondOperand;
  } else if (randomOperator === "*") {
    mathematicalQuestion = randomFirstOperand * randomSecondOperand;
  }
  mathematicalQuestionToString = `${randomFirstOperand.toString()} ${randomOperator} ${randomSecondOperand.toString()}`;
  console.log(`Question: ${mathematicalQuestionToString}`);
  const answerToQuestion = readlineSync.question("Your answer: ");
  if (answerToQuestion === mathematicalQuestion.toString()) {
    console.log("Correct!");
  } else {
    console.log(
      `'${answerToQuestion}' is wrong answer. Correct answer was '${mathematicalQuestion}'.`
    );
    console.log(`Let's try again, ${userName}!`);
    testIsPassed = false;
    break;
  }
}

if (testIsPassed === true) {
  console.log(`Congratulations, ${userName}`);
}
