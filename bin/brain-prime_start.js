#!/usr/bin/env node
import brainPrimeQuestionWithAnswer from '../src/games/brain-prime.js';
import runGame from '../src/index.js';

const shortGuideToGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

runGame(brainPrimeQuestionWithAnswer, shortGuideToGame);
