import readlineSync from "readline-sync";

function welcomeUser() {
  console.log("node bin/brain-games.js\nWelcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  return console.log(`Hello, ${userName}`);
}

export default welcomeUser;
