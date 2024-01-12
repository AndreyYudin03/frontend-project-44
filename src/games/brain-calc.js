#!/usr/bin/env node
import runGame from '../../bin/index.js';
import getRandomNumber from '../utils.js';

console.log('What is the result of the expression?');

function generateCalculationQuestion() {
  const operationsArray = ['+', '-', '*'];
  const randomFirstOperand = getRandomNumber();
  const randomSecondOperand = getRandomNumber();
  const randomOperator = operationsArray[Math.floor(Math.random() * operationsArray.length)];
  const mathematicalQuestionToArray = [
    randomFirstOperand,
    randomSecondOperand,
    randomOperator,
  ];
  return mathematicalQuestionToArray;
}

function calculateResult([firstOperand, secondOperand, operator]) {
  let result = 0;
  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    default:
      result = firstOperand * secondOperand;
  }
  return result.toString();
}

function generateCalculationQuestionWithCorrectAnswer() {
  const [firstOperand, secondOperand, operator] = generateCalculationQuestion();
  const calculationQuestionArrayToString = `${firstOperand} ${operator} ${secondOperand}`;
  const calculationAnswer = calculateResult([
    firstOperand,
    secondOperand,
    operator,
  ]);
  return [calculationQuestionArrayToString, calculationAnswer];
}

runGame(generateCalculationQuestionWithCorrectAnswer);
