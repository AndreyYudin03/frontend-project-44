import getRandomNumber from '../utils.js';

function getHiddenNumber(progressionArray) {
  const randomProgressionArrayIndex = Math.floor(
    Math.random() * (progressionArray.length - 0) + 0,
  );

  const hiddenNumber = progressionArray[randomProgressionArrayIndex];
  return hiddenNumber;
}

function getProgressionArrayWithHiddenNumberQuestion(
  hiddenNumber,
  progressionArray,
) {
  const progressionArrayCopy = progressionArray;
  const indexOfHiddenNumber = progressionArrayCopy.indexOf(hiddenNumber);
  progressionArrayCopy[indexOfHiddenNumber] = '..';
  return progressionArrayCopy.toString().replace(/,/g, ' ');
}

function generateProgressionQuestionWithCorrectAnswer() {
  const randomFirstNumber = getRandomNumber();

  const [minimumProgressionLength, maximumProgressionLength] = [4, 10];
  const randomProgressionLength = Math.floor(
    Math.random() * (maximumProgressionLength - minimumProgressionLength)
      + minimumProgressionLength,
  );

  const progressionArray = [];
  progressionArray.push(randomFirstNumber);
  const randomStepProgressionNumber = getRandomNumber();
  let lastElementProgressionArray = progressionArray[progressionArray.length - 1];

  for (let i = 0; i < randomProgressionLength; i += 1) {
    lastElementProgressionArray = progressionArray[progressionArray.length - 1];
    progressionArray.push(
      lastElementProgressionArray + randomStepProgressionNumber,
    );
  }

  const hiddenNumber = getHiddenNumber(progressionArray);
  const progressionQuestion = getProgressionArrayWithHiddenNumberQuestion(
    hiddenNumber,
    progressionArray,
  );
  return [progressionQuestion, hiddenNumber.toString()];
}

export default generateProgressionQuestionWithCorrectAnswer;
