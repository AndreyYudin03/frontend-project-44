import getRandomNumber from '../utils.js';

function getPrimeAnswer(randomNumber) {
  let numberDivisorsWithoutRemainder = 0;
  for (let i = 0; i <= randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      numberDivisorsWithoutRemainder += 1;
    }
  }
  let numberIsSimple = '';
  if (numberDivisorsWithoutRemainder === 2) {
    numberIsSimple = 'yes';
  } else {
    numberIsSimple = 'no';
  }
  return numberIsSimple;
}

function generatePrimeQuestionWithCorrectAnswer() {
  const primeQuestion = getRandomNumber();
  const primeAnswer = getPrimeAnswer(primeQuestion);
  return [primeQuestion, primeAnswer];
}

export default generatePrimeQuestionWithCorrectAnswer;
