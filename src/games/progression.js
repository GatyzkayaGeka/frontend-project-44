import startGame from '../index.js';
import getRandomInt from '../getRandom.js';

const ruleGame = 'What number is missing in the progression?';
const progLength = 10;

// Арифметическая прогрессия

const progression = (firstNumber, lengthStep) => {
  const progressions = [];
  for (let i = 0; i < progLength; i += 1) {
    progressions.push(firstNumber + (lengthStep * i));
  }
  return progressions;
};

const gettingGameData = () => {
  const firstNumber = getRandomInt(0, 10);
  const lengthStep = getRandomInt(1, 10);
  const progressions = progression(firstNumber, lengthStep);
  const closedNumber = getRandomInt(0, progression.length - 1);
  const result = progressions[closedNumber];
  progressions[closedNumber] = '..';
  const example = progressions.join(' ');

  return [String(result), example];
};

export default () => startGame(ruleGame, gettingGameData);
