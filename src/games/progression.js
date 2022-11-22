import basisGame from '../index.js';
import getRandomInt from '../getRandom.js';

// Арифметическая прогрессия

const arithmeticProgression = () => {
  const rulesGame = 'What number is missing in the progression?';
  const progLength = 10;

  const progression = (oneNumber, step) => {
    const massivProgression = [];
    for (let i = 0; i < progLength; i += 1) {
      massivProgression.push(oneNumber + (step * i));
    }
    return massivProgression;
  };

  const exampleCalc = () => {
    const oneNumber = getRandomInt(0, 10);
    const step = getRandomInt(1, 10);
    const massivProgression = progression(oneNumber, step);
    const closedNumber = getRandomInt(0, progression.length - 1);
    const result = massivProgression[closedNumber];
    massivProgression[closedNumber] = '..';
    const example = massivProgression.join(' ');

    return [String(result), example];
  };
  basisGame(rulesGame, exampleCalc);
};
export default arithmeticProgression;
