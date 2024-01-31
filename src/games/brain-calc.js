import getRandomNumber from '../utils.js';

const operators = ['+', '-', '*'];

const calculateResult = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      throw new Error(`Unknown operator state: '${operator}'`);
  }
};

const generateCalculationQuestionWithCorrectAnswer = () => {
  const firstOperand = getRandomNumber();
  const secondOperand = getRandomNumber();
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const calculationQuestion = `${firstOperand} ${operator} ${secondOperand}`;
  const calculationAnswer = calculateResult(
    firstOperand,
    secondOperand,
    operator,
  ).toString();

  return [calculationQuestion, calculationAnswer];
};

export default generateCalculationQuestionWithCorrectAnswer;
