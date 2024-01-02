import readlineSync from "readline-sync";

function welcomeUser() {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}`);
  return userName;
}

function runGame(question, correctAnswerFn, userName) {
  const attempts = 3;
  let testIsPassed = true;

  for (let i = 0; i < attempts; i += 1) {
    const userAnswer = readlineSync.question(
      `Question: ${question}\nYour answer: `
    );
    const correctAnswer = correctAnswerFn;

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
    console.log(`Congratulations, ${userName}`);
  }
}

export { welcomeUser, runGame };
