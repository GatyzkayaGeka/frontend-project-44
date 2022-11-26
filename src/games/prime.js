import startGame from '../index.js';
import getRandomInt from '../getRandom.js';

const ruleGame = 'Answer "yes" if given number is prime. Otherwise answer "no"';

// Простое ли число

const isprime = (number) => {
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

const gettingGameData = () => {
  const randomPrimeNumber = getRandomInt(1, 50);
  const example = randomPrimeNumber;
  const result = isprime(example) ? 'yes' : 'no';

  return [String(result), example];
};

export default () => startGame(ruleGame, gettingGameData);
