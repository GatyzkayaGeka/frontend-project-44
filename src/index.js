// функция узнавания имени и приветствия
import readlineSync from 'readline-sync';

const rounds = 3;

const startGame = (ruleGame, runGame) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  // правила игры, задание
  console.log(ruleGame);

  // сам цикл игры - повтор 3 раза
  for (let i = 0; i < rounds; i += 1) {
    const [result, example] = runGame();
    console.log(`Question: ${example}`);
    const answer = readlineSync.question('Your answer: ');

    // проверка результата

    if (result === answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}. /n Let's try again, ${name}!`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default startGame;
