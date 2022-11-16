import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

// функция узнавания имени
export const userName = () => readlineSync.question('May I have your name? ');

const name = userName();
console.log(`Hello, ${name}!`);

// функция для получения рандомного числа
export const getRandomInt = (max) => {
  const random = Math.floor(Math.random() * max);
  return random;
};

// функция определения чётности
export const parityCheck = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const random = getRandomInt(50);
    console.log('Question: ', random);
    const answer = readlineSync.question('Your answer: ');

    const answerHonest = (random % 2 === 0) && (answer === 'yes');
    const answerOdd = (random % 2 !== 0) && (answer === 'no');

    if ((answerHonest === true) || (answerOdd === true)) {
      console.log('Correct!');
    } else {
      const answerAnother = (answer === 'yes' ? 'no' : 'yes');
      const answerIncorrect = `"${answer}" is wrong answer ;(. Correct answer was "${answerAnother}". /n Let's try again, "${name}"!`;
      console.log(answerIncorrect);
      return answerIncorrect;
    }
  }
  console.log(`Congratulations, "${name}!"`);
};
