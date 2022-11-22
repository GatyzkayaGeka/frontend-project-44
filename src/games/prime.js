import basisGame from '../index.js';
import getRandomInt from '../getRandom.js';

// Простое ли число

const primeNumber = () => {
  const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no"';

  const prime = (number) => {
    if (number < 2) {
      return false;
    }
    let diveder = 2;
    while (diveder <= number / 2) {
      if (number % diveder === 0) {
        return false;
      }
      diveder += 1;
    }
    return true;
  };

  const exampleCalc = () => {
    const example = getRandomInt(1, 50);
    const result = prime(example) ? 'yes' : 'no';

    return [String(result), example];
  };
  basisGame(rulesGame, exampleCalc);
};
export default primeNumber;
