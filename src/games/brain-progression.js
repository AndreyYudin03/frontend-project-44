import getRandomNumber from '../utils.js';

const getHiddenNumber = (progression) => {
  const progressionIndex = Math.floor(
    Math.random() * (progression.length - 0) + 0,
  );

  return progression[progressionIndex];
};

const getProgressionWithHiddenNumberQuestion = (hiddenNumber, progression) => {
  const progressionCopy = Array.from(progression);
  const indexOfHiddenNumber = progressionCopy.indexOf(hiddenNumber);
  progressionCopy[indexOfHiddenNumber] = '..';
  return progressionCopy.toString().replace(/,/g, ' ');
};

const generateProgressionQuestionWithCorrectAnswer = () => {
  const firstNumber = getRandomNumber();

  const progressionLength = getRandomNumber(4, 10);

  const progression = [];
  progression.push(firstNumber);
  const stepProgression = getRandomNumber();
  let lastElementProgressionArray = progression[progression.length - 1];

  for (let i = 0; i < progressionLength; i += 1) {
    lastElementProgressionArray = progression[progression.length - 1];
    progression.push(lastElementProgressionArray + stepProgression);
  }

  const hiddenNumber = getHiddenNumber(progression);
  const progressionQuestion = getProgressionWithHiddenNumberQuestion(
    hiddenNumber,
    progression,
  );
  return [progressionQuestion, hiddenNumber.toString()];
};

export default generateProgressionQuestionWithCorrectAnswer;
