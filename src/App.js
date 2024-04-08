import { Random, Console } from '@woowacourse/mission-utils';

async function getUserCarName() {
  const getCarName = await Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  );
  const setCarArray = getCarName.split(',');
  const carList = getAvailableCars(setCarArray);
  return carList;
}

function getAvailableCars(CarArray) {
  if (CarArray.length < 2) {
    throw new Error('[ERROR]자동차가 한 대이하로 입력하셨습니다. ');
  }
  CarArray.forEach((car) => {
    if (car.trim() === '') {
      throw new Error('[ERROR]공백을 입력하셨습니다.');
    }

    if (car.length() > 5) {
      throw new Error('[ERROR]이름이 5글자를 초과하셨습니다.');
    }
  });
  console.log(CarArray);
  return CarArray;
}

class App {
  async play() {
    await getUserCarName();
  }
}

export default App;
