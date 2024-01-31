import getRandomNumber from '../utils.js';

const getProgressionWithHiddenNumberQuestion = (progression) => {
  const progressionCopy = Array.from(progression);
  const indexOfHiddenNumber = Math.floor(
    Math.random() * (progressionCopy.length - 0) + 0,
  );
  const hiddenNumber = progressionCopy[indexOfHiddenNumber];
  progressionCopy[indexOfHiddenNumber] = '..';
  return [progressionCopy.toString().replace(/,/g, ' '), hiddenNumber];
};

const generateProgression = (step, numberOfElements) => {
  const progression = [];

  for (let i = 1; i <= numberOfElements; i += 1) {
    progression.push(step * i);
  }

  return progression;
};

const generateProgressionQuestionWithCorrectAnswer = () => {
  const progression = generateProgression(
    getRandomNumber(),
    getRandomNumber(5, 10),
  );

  const progressionQuestionWithHiddenNumber = getProgressionWithHiddenNumberQuestion(progression);

  return [
    progressionQuestionWithHiddenNumber[0],
    progressionQuestionWithHiddenNumber[1].toString(),
  ];
};

export default generateProgressionQuestionWithCorrectAnswer;
