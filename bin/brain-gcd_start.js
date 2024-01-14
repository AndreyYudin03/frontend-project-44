#!/usr/bin/env node
import brainGcdQuestionWithAnswer from '../src/games/brain-gcd.js';
import runGame from '../src/index.js';

const shortGuideToGame = 'Find the greatest common divisor of given numbers.';

runGame(brainGcdQuestionWithAnswer, shortGuideToGame);
