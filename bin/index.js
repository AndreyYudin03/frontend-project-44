import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

function runGame(questionWithAnswer) {
  for (let i = 0; i < 3; i += 1) {
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
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

export default runGame;
