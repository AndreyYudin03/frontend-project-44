import getRandomNumber from '../utils.js';

const isPrime = (number) => {
  let numberDivisorsWithoutRemainder = 0;
  for (let i = 0; i <= number; i += 1) {
    if (number % i === 0) {
      numberDivisorsWithoutRemainder += 1;
    }
  }
  return numberDivisorsWithoutRemainder === 2;
};

const generatePrimeQuestionWithCorrectAnswer = () => {
  const primeQuestion = getRandomNumber();
  const primeAnswer = isPrime(primeQuestion) ? 'yes' : 'no';
  return [primeQuestion, primeAnswer];
};

export default generatePrimeQuestionWithCorrectAnswer;
