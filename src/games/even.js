import startGame from '../index.js';
import getRandomInt from '../getRandom.js';

const ruleGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const minRandomNumber = 1;
const maxRandomNumber = 50;

// функция определения чётности

const isEven = (number) => number % 2 === 0;

const runGame = () => {
  const example = getRandomInt(minRandomNumber, maxRandomNumber);
  const result = isEven(example) ? 'yes' : 'no';
  return [String(result), example];
};

export default () => startGame(ruleGame, runGame);
