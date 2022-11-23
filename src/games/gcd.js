import basisGame from '../index.js';
import getRandomInt from '../getRandom.js';

// функция НОД
const greatestCommonDivisor = () => {
  const rulesGame = 'Find the greatest common divisor of given numbers.';

  const gcd = (x, y) => {
    if (!y) {
      return x;
    }
    return gcd(y, x % y);
  };

  const exampleGame = () => {
    const random1 = getRandomInt(0, 10);
    const random2 = getRandomInt(0, 10);
    const example = `${random1} ${random2}`;
    const result = gcd(random1, random2);
    return [String(result), example];
  };

  basisGame(rulesGame, exampleGame);
};
export default greatestCommonDivisor;
