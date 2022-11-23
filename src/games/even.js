import basisGame from '../index.js';
import getRandomInt from '../getRandom.js';

// функция определения чётности
const parityCheck = () => {
  const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  const iEven = (number) => number % 2 === 0;

  const exampleCalc = () => {
    const example = getRandomInt(1, 50);
    const result = iEven(example) ? 'yes' : 'no';
    return [String(result), example];
  };
  basisGame(rulesGame, exampleCalc);
};
export default parityCheck;
