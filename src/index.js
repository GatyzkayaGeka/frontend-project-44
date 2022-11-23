// функция узнавания имени и приветствия
import readlineSync from 'readline-sync';

const basisGame = (rulesGame, exampleGame) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  // правила игры, задание
  console.log(rulesGame);

  // сам цикл игры - повтор 3 раза
  for (let i = 0; i < 3; i += 1) {
    const exampleIndex = exampleGame();
    const resultIndex = exampleIndex[0];
    console.log(`Question: ${String(exampleIndex[1])}`);
    const answer = readlineSync.question('Your answer: ');

    // проверка результата

    if (resultIndex === answer) {
      console.log('Correct!');
    } else {
      const answerIncorrect = `${answer} is wrong answer ;(. Correct answer was ${resultIndex}. /n Let's try again, ${name}!`;
      console.log(answerIncorrect);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default basisGame;
