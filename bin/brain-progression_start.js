#!/usr/bin/env node
import brainProgressionQuestionWithAnswer from '../src/games/brain-progression.js';
import runGame from '../src/index.js';

const shortGuideToGame = 'What number is missing in the progression?';

runGame(brainProgressionQuestionWithAnswer, shortGuideToGame);
