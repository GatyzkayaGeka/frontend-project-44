import startGame from '../index.js';
import getRandomInt from '../getRandom.js';

const ruleGame = 'Find the greatest common divisor of given numbers.';

// функция НОД

const determineGreatestDivisor = (x, y) => {
  if (!y) {
    return x;
  }
  return determineGreatestDivisor(y, x % y);
};

const gettingGameData = () => {
  const randomNumber1 = getRandomInt(0, 10);
  const randomNumber2 = getRandomInt(0, 10);
  const example = `${randomNumber1} ${randomNumber2}`;
  const result = determineGreatestDivisor(randomNumber1, randomNumber2);
  return [String(result), example];
};

export default () => startGame(ruleGame, gettingGameData);
