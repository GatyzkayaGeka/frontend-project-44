import startGame from '../index.js';
import getRandomInt from '../getRandom.js';

const ruleGame = 'What is the result of the expression?';
const operators = ['*', '-', '+'];
const minRandomNumber = 1;
const maxRandomNumber = 10;

// выбор оператора

const calculate = (num1, num2, operation) => {
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

const runGame = () => {
  const randomNumber1 = getRandomInt(minRandomNumber, maxRandomNumber);
  const randomNumber2 = getRandomInt(minRandomNumber, maxRandomNumber);
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const example = `${randomNumber1} ${operator} ${randomNumber2}`;
  const result = calculate(randomNumber1, randomNumber2, operator);
  return [String(result), example];
};

export default () => startGame(ruleGame, runGame);
