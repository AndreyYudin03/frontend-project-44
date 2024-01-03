#!/usr/bin/env node
import { runGame, welcomeUser } from "../../src/index.js";

const userName = welcomeUser();

const generateCalculationQuestion = () => {
  const operationsArray = ["+", "-", "*"];
  const minimumNumber = 1;
  const maximumNumber = 100;
  const randomFirstOperand = Math.floor(
    Math.random() * (maximumNumber - minimumNumber) + minimumNumber
  );
  const randomSecondOperand = Math.floor(
    Math.random() * (maximumNumber - minimumNumber) + minimumNumber
  );
  const randomOperator = operationsArray[Math.floor(Math.random() * operationsArray.length)];
  const mathematicalQuestionToString = `${randomFirstOperand} ${randomOperator} ${randomSecondOperand}`;
  return mathematicalQuestionToString;
};

const calculateResult = () => {
  const calculationQuestionString = generateCalculationQuestion();
  const calculationQuestionStringToArray = calculationQuestionString.split(" ");
  const firstOperand = parseInt(calculationQuestionStringToArray[0], 10);
  const secondOperand = parseInt(calculationQuestionStringToArray[2], 10);
  const operator = calculationQuestionStringToArray[1];
  let result = 0;
  if (operator === "+") {
    result = firstOperand + secondOperand;
  } else if (operator === "-") {
    result = firstOperand - secondOperand;
  } else if (operator === "*") {
    result = firstOperand * secondOperand;
  }
  return [calculationQuestionString, result.toString()];
};

runGame(calculateResult, userName);
