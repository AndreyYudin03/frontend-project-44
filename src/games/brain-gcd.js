import getRandomNumber from '../utils.js';

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
  const randomFirstNumber = getRandomNumber();
  const randomSecondNumber = getRandomNumber();
  const gcdQuestionArrayToString = `${randomFirstNumber} ${randomSecondNumber}`;
  const gcdAnswer = getGcdAnswer([randomFirstNumber, randomSecondNumber]);
  return [gcdQuestionArrayToString, gcdAnswer];
}

export default generateGcdQuestionWithCorrectAnswer;
