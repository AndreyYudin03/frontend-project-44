import getRandomNumber from '../utils.js';

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
  const operators = ['+', '-', '*'];
  const firstOperand = getRandomNumber();
  const secondOperand = getRandomNumber();
  const operator = operators[getRandomNumber(0, 3)];
  const calculationQuestion = `${firstOperand} ${operator} ${secondOperand}`;
  const calculationAnswer = calculateResult(
    firstOperand,
    secondOperand,
    operator,
  ).toString();

  return [calculationQuestion, calculationAnswer];
};

export default generateCalculationQuestionWithCorrectAnswer;
