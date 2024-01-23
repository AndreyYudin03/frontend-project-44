#!/usr/bin/env node
import brainProgressionQuestionWithAnswer from '../src/games/brain-progression.js';
import runGame from '../src/index.js';

runGame(
  brainProgressionQuestionWithAnswer,
  'What number is missing in the progression?',
);
