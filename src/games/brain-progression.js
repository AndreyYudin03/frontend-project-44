import getRandomNumber from '../utils.js';

const generateProgression = (firstNumber, step, numberOfElements) => {
  const progression = [firstNumber];

  for (let i = 1; i < numberOfElements; i += 1) {
    progression[i] = progression[i - 1] + step;
  }

  return progression;
};

const generateProgressionQuestionWithCorrectAnswer = () => {
  const progression = generateProgression(
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(5, 10),
  );

  const indexOfHiddenNumber = getRandomNumber(0, progression.length - 1);
  const hiddenNumber = progression[indexOfHiddenNumber];
  progression[indexOfHiddenNumber] = '..';

  const [progressionQuestion, progressionAnswer] = [
    progression.toString().replace(/,/g, ' '),
    hiddenNumber.toString(),
  ];

  return [progressionQuestion, progressionAnswer];
};

export default generateProgressionQuestionWithCorrectAnswer;
