import getRandomNumber from '../utils.js';

function calculateResult([firstOperand, secondOperand, operator]) {
  let result = 0;
  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    default:
      throw new Error(`Unknown operator state: '${operator}'`);
  }
  return result.toString();
}

function generateCalculationQuestionWithCorrectAnswer() {
  const operationsArray = ['+', '-', '*'];
  const randomFirstOperand = getRandomNumber();
  const randomSecondOperand = getRandomNumber();
  const randomOperator = operationsArray[Math.floor(Math.random() * operationsArray.length)];
  const calculationQuestionArrayToString = `${randomFirstOperand} ${randomOperator} ${randomSecondOperand}`;
  const calculationAnswer = calculateResult([
    randomFirstOperand,
    randomSecondOperand,
    randomOperator,
  ]);

  return [calculationQuestionArrayToString, calculationAnswer];
}

export default generateCalculationQuestionWithCorrectAnswer;
