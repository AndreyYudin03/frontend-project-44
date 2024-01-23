import getRandomNumber from "../utils.js";

const getGcdAnswer = (firstNumber, secondNumber) => {
  const [smallestNumber, largestNumber] = [
    Math.min(firstNumber, secondNumber),
    Math.max(firstNumber, secondNumber),
  ];
  let result = 0;
  if (largestNumber % smallestNumber === 0) {
    result = smallestNumber;
  } else {
    for (let i = 1; i < smallestNumber; i += 1) {
      if (largestNumber % i === 0 && smallestNumber % i === 0) {
        result = i;
      }
    }
  }
  return result;
};

const generateGcdQuestionWithCorrectAnswer = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const gcdQuestion = `${firstNumber} ${secondNumber}`;
  const gcdAnswer = getGcdAnswer(firstNumber, secondNumber).toString();
  return [gcdQuestion, gcdAnswer];
};

export default generateGcdQuestionWithCorrectAnswer;
