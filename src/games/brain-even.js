import getRandomNumber from '../utils.js';

const isEven = (number) => number % 2 === 0;

const generateEvenQuestionWithCorrectAnswer = () => {
  const evenQuestion = getRandomNumber();
  const evenAnswer = isEven(evenQuestion) ? 'yes' : 'no';

  return [evenQuestion, evenAnswer];
};

export default generateEvenQuestionWithCorrectAnswer;
