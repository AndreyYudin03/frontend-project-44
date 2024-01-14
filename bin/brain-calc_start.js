#!/usr/bin/env node
import brainCalcQuestionWithAnswer from '../src/games/brain-calc.js';
import runGame from '../src/index.js';

const shortGuideToGame = 'What is the result of the expression?';

runGame(brainCalcQuestionWithAnswer, shortGuideToGame);
