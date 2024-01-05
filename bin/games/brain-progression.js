#!/usr/bin/env node

import { welcomeUser, runGame } from "../../src/index.js";

const userName = welcomeUser();

console.log("What number is missing in the progression?");

function generateProgressionQuestionWithCorrectAnswer() {
  const minimumProgressionFirstNumber = 1;
  const maximumProgressionFirstNumber = 100;
  const randomFirstNumber = Math.floor(
    Math.random() *
      (maximumProgressionFirstNumber - minimumProgressionFirstNumber) +
      minimumProgressionFirstNumber
  );

  const minimumProgressionLength = 5;
  const maximumProgressionLength = 10;
  const randomProgressionLength = Math.floor(
    Math.random() * (maximumProgressionLength - minimumProgressionLength) +
      minimumProgressionLength
  );

  const progressionArray = [];
  progressionArray.push(randomFirstNumber);
  const randomStepProgressionNumber = Math.floor(Math.random() * (100 - 1) + 1);
  let lastElementProgressionArray =
    progressionArray[progressionArray.length - 1];

  for (let i = 0; i < 4; i += 1) {
    lastElementProgressionArray = progressionArray[progressionArray.length - 1];
    progressionArray.push(
      lastElementProgressionArray + randomStepProgressionNumber
    );
  }

  for (
    let i = minimumProgressionLength;
    i < randomProgressionLength + 1;
    i += 1
  ) {
    lastElementProgressionArray = progressionArray[progressionArray.length - 1];
    progressionArray.push(
      lastElementProgressionArray + randomStepProgressionNumber
    );
  }

  const randomProgressionArrayIndex = Math.floor(
    Math.random() * (progressionArray.length - 0) + 0
  );

  const hiddenNumber = progressionArray[randomProgressionArrayIndex];

  progressionArray[randomProgressionArrayIndex] = "..";
  return [
    progressionArray.toString().replace(/,/g, " "),
    hiddenNumber.toString(),
  ];
}

runGame(generateProgressionQuestionWithCorrectAnswer, userName);
