import getRandomNumber from '../utils.js';

const getHiddenNumber = (progressionArray) => {
  const progressionIndex = Math.floor(
    Math.random() * (progressionArray.length - 0) + 0,
  );

  return progressionArray[progressionIndex];
};

const getProgressionArrayWithHiddenNumberQuestion = (
  hiddenNumber,
  progressionArray,
) => {
  const progressionCopy = Array.from(progressionArray);
  const indexOfHiddenNumber = progressionCopy.indexOf(hiddenNumber);
  progressionCopy[indexOfHiddenNumber] = '..';
  return progressionCopy.toString().replace(/,/g, ' ');
};

const generateProgressionQuestionWithCorrectAnswer = () => {
  const firstNumber = getRandomNumber();

  const progressionLength = getRandomNumber(4, 10);

  const progressionArray = [];
  progressionArray.push(firstNumber);
  const stepProgression = getRandomNumber();
  let lastElementProgressionArray = progressionArray[progressionArray.length - 1];

  for (let i = 0; i < progressionLength; i += 1) {
    lastElementProgressionArray = progressionArray[progressionArray.length - 1];
    progressionArray.push(lastElementProgressionArray + stepProgression);
  }

  const hiddenNumber = getHiddenNumber(progressionArray);
  const progressionQuestion = getProgressionArrayWithHiddenNumberQuestion(
    hiddenNumber,
    progressionArray,
  );
  return [progressionQuestion, hiddenNumber.toString()];
};

export default generateProgressionQuestionWithCorrectAnswer;
