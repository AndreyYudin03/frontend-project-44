#!/usr/bin/env node
import brainGcdQuestionWithAnswer from '../src/games/brain-gcd.js';
import runGame from '../src/index.js';

runGame(
  brainGcdQuestionWithAnswer,
  'Find the greatest common divisor of given numbers.',
);
