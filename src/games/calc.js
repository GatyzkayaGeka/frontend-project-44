import basisGame from '../index.js';
import getRandomInt from '../getRandom.js';

// функция калькулятора
const calculator = () => {
  const rulesGame = 'What is the result of the expression?';

  const exampleGame = () => {
    const random1 = getRandomInt(0, 10);
    const random2 = getRandomInt(0, 10);
    const operators = ['*', '-', '+'];
    const operator = operators[getRandomInt(0, 3)];

    const example = `${random1} ${operator} ${random2}`;

    // выбор оператора
    let result;
    switch (operator) {
      case '+':
        result = random1 + random2;
        break;
      case '-':
        result = random1 - random2;
        break;
      case '*':
        result = random1 * random2;
        break;
      default:
        result = null;
    }
    return [String(result), example];
  };
  basisGame(rulesGame, exampleGame);
};
export default calculator;
