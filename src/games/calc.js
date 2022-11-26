import startGame from '../index.js';
import getRandomInt from '../getRandom.js';

const ruleGame = 'What is the result of the expression?';
const operators = ['*', '-', '+'];

// выбор оператора

const operationSelection = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`operation ${operation} not performed`);
  }
};

const gettingGameData = () => {
  const randomNumber1 = getRandomInt(0, 10);
  const randomNumber2 = getRandomInt(0, 10);
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const example = `${randomNumber1} ${operator} ${randomNumber2}`;
  const result = operationSelection(randomNumber1, randomNumber2, operator);
  return [String(result), example];
};

export default () => startGame(ruleGame, gettingGameData);
