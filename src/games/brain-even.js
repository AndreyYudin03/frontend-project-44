import getRandomNumber from '../utils.js';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const generateEvenQuestionWithCorrectAnswer = () => {
  const evenQuestion = getRandomNumber();
  const evenAnswer = isEven(evenQuestion);

  return [evenQuestion, evenAnswer];
};

export default generateEvenQuestionWithCorrectAnswer;
