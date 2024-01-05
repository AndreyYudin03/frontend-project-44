import readlineSync from "readline-sync";

function welcomeUser() {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
  return userName;
}

function runGame(questionWithAnswer, userName) {
  let testIsPassed = true;

  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = questionWithAnswer();
    const userAnswer = readlineSync.question(
      `Question: ${question}\nYour answer: `
    );
    const correctAnswer = answer;

    if (userAnswer === correctAnswer) {
      console.log("Correct!");
    } else {
      console.log(
        `'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${userName}!`);
      testIsPassed = false;
      break;
    }
  }
  if (testIsPassed) {
    console.log(`Congratulations, ${userName}!`);
  }
}

export { runGame, welcomeUser };
