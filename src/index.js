import readlineSync from 'readline-sync';

const numberOfRounds = 3;

function runGame(questionWithAnswer, shortGuideToGame) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(shortGuideToGame);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, answer] = questionWithAnswer();
    const userAnswer = readlineSync.question(
      `Question: ${question}\nYour answer: `,
    );

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer. Correct answer was '${answer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

export default runGame;
