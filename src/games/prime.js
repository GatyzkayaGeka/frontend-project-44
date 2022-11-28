import startGame from '../index.js';
import getRandomInt from '../getRandom.js';

const ruleGame = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const minRandomNumber = 1;
const maxRandomNumber = 50;

// Простое ли число

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let diveder = 2; diveder <= number / 2; diveder += 1) {
    if (number % diveder === 0) {
      return false;
    }
  }
  return true;
};

const runGame = () => {
  const example = getRandomInt(minRandomNumber, maxRandomNumber);
  const result = isPrime(example) ? 'yes' : 'no';

  return [String(result), example];
};

export default () => startGame(ruleGame, runGame);
