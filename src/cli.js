import readlineSync from 'readline-sync';
const userName = () => {
  const name = readlineSync.question('May I have your name? ');
};
export default userName; // сделала именной,если не получится сделать по умолчанию