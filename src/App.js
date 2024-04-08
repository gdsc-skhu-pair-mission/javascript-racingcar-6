import { Random, Console } from '@woowacourse/mission-utils';

async function getUserCarName() {
  const getCarName = await Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  );
  const setCarArray = getCarName.split(',');
  // eslint-disable-next-line no-use-before-define
  const carList = getAvailableCars(setCarArray);
  return carList;
}

function getAvailableCars(CarArray) {
  CarArray.forEach((car) => {
    if (car.trim() === '') {
      throw new Error('[ERROR]공백을 입력하셨습니다.');
    }
    if (car.length > 5) {
      throw new Error('[ERROR]이름이 5글자를 초과하셨습니다.');
    }
  });
  if (CarArray.length < 2) {
    throw new Error('[ERROR]자동차가 한 대이하로 입력하셨습니다. ');
  }
  console.log(CarArray);
  return CarArray;
}

async function askForAttempts() {
  const attemptRound =
    await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  // eslint-disable-next-line no-use-before-define
  const roundNumber = getAvailableAttempts(attemptRound);
  return roundNumber;
}

function getAvailableAttempts(Round) {
  if (Round.trim() === '') {
    throw new Error('[ERROR] 공백을 입력하시면 안됩니다.');
  }
  if (Number.isNaN(+Round)) {
    throw new Error('[ERROR] 숫자가 아닌 값을 입력하시면 안됩니다.');
  }
  if (+Round < 1) {
    throw new Error('[ERROR] 1 이하의 수를 입력하시면 안됩니다.');
  }
}

class App {
  // eslint-disable-next-line class-methods-use-this
  async play() {
    await getUserCarName();
    // await askForAttempts();
  }
}

export default App;
