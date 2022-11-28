import startGame from '../index.js';
import getRandomInt from '../getRandom.js';

const ruleGame = 'Find the greatest common divisor of given numbers.';
const minRandomNumber = 0;
const maxRandomNumber = 10;

// функция НОД

const determineGreatestDivisor = (x, y) => {
  if (!y) {
    return x;
  }
  return determineGreatestDivisor(y, x % y);
};

const runGame = () => {
  const randomNumber1 = getRandomInt(minRandomNumber, maxRandomNumber);
  const randomNumber2 = getRandomInt(minRandomNumber, maxRandomNumber);
  const example = `${randomNumber1} ${randomNumber2}`;
  const result = determineGreatestDivisor(randomNumber1, randomNumber2);
  return [String(result), example];
};

export default () => startGame(ruleGame, runGame);
