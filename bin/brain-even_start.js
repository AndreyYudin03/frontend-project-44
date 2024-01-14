#!/usr/bin/env node
import brainEvenQuestionWithAnswer from '../src/games/brain-even.js';
import runGame from '../src/index.js';

const shortGuideToGame = 'Answer "yes" if the number is even, otherwise answer "no".';

runGame(brainEvenQuestionWithAnswer, shortGuideToGame);
