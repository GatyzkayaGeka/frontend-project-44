import startGame from '../index.js';
import getRandomInt from '../getRandom.js';

const ruleGame = 'What number is missing in the progression?';
const progLength = 10;
const minRandomNumber = 1;
const maxRandomNumber = 10;

// Арифметическая прогрессия

const defineProgression = (firstNumber, lengthStep, progressionLength) => {
  const progressions = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progressions.push(firstNumber + (lengthStep * i));
  }
  return progressions;
};

const runGame = () => {
  const firstNumber = getRandomInt(minRandomNumber, maxRandomNumber);
  const lengthStep = getRandomInt(minRandomNumber, maxRandomNumber);
  const progression = defineProgression(firstNumber, lengthStep, progLength);
  const closedNumber = getRandomInt(0, defineProgression.length - 1);
  const result = progression[closedNumber];
  progression[closedNumber] = '..';
  const example = progression.join(' ');

  return [String(result), example];
};

export default () => startGame(ruleGame, runGame);
