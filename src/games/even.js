import startGame from '../index.js';
import getRandomInt from '../getRandom.js';

const ruleGame = 'Answer "yes" if the number is even, otherwise answer "no".';

// функция определения чётности

const isEven = (number) => number % 2 === 0;

const gettingGameData = () => {
  const randomNumber = getRandomInt(1, 50);
  const example = randomNumber;
  const result = isEven(example) ? 'yes' : 'no';
  return [String(result), example];
};

export default () => startGame(ruleGame, gettingGameData);
