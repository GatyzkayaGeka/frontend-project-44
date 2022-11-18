import basisGame from '../index.js';
import getRandomInt from '../getRandom.js';

// функция НОД
const greatestCommonDivisor = () => {
  const rulesGame = 'Find the greatest common divisor of given numbers.';

  const gcd = (x, y) => {
    while ((x !== 0) && (y !== 0)) {
      if (x > y) {
        x = x % y;
      } else {
        y = y % x;
      }
    }
    return (x + y);
  };

  const exampleCalc = () => {
    const random1 = getRandomInt(10);
    const random2 = getRandomInt(10);
    const example = `${random1} ${random2}`;
    const result = gcd(random1, random2);
    return [String(result), example];
  };

  basisGame(rulesGame, exampleCalc);
};
export default greatestCommonDivisor;
