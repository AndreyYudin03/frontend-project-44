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
  const randomOperator =
    operationsArray[Math.floor(Math.random() * operationsArray.length)];
  const mathematicalQuestionToString = `${randomFirstOperand} ${randomOperator} ${randomSecondOperand}`;
  return mathematicalQuestionToString;
};

const calculationQuestionString = generateCalculationQuestion;

const calculateResult = () => {
  const CalculationQuestionStringToArray =
    calculationQuestionString().split(" ");
  const firstOperand = parseInt(CalculationQuestionStringToArray[0], 10);
  const secondOperand = parseInt(CalculationQuestionStringToArray[2], 10);
  const operator = CalculationQuestionStringToArray[1];
  let result = 0;
  if (operator === "+") {
    result = firstOperand + secondOperand;
  } else if (operator === "-") {
    result = firstOperand - secondOperand;
  } else if (operator === "*") {
    result = firstOperand * secondOperand;
  }
  return result.toString();
};

runGame(calculationQuestionString, calculateResult, userName);
