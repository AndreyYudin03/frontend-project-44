import getRandomNumber from '../utils.js';

function getEvenQuestionAnswer(randomNumber) {
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

  return correctAnswer;
}

function generateEvenQuestionWithCorrectAnswer() {
  const evenQuestion = getRandomNumber();
  const evenQuestionAnswer = getEvenQuestionAnswer(evenQuestion);

  return [evenQuestion, evenQuestionAnswer];
}

export default generateEvenQuestionWithCorrectAnswer;
