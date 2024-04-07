import { Random, Console } from '@woowacourse/mission-utils';

async function inputCarName() {
  let carNameList = await Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  );

  if (!Number.isNaN(Number(carNameList))) {
    throw new Error('[Error] 숫자가 입력되었습니다. 문자를 입력해주십시오.');
  }
  if (!carNameList.includes(',')) {
    throw new Error("[Error] ',' 가 포함되어 있지 않습니다.");
  }

  let carName = carNameList.split(',');

  carName.forEach((name) => {
    if (name.length > 5) {
      throw new Error('[Error] 5자 이하인 이름으로 입력해주세요.');
    }
  });

  return carName;
}

async function inputTryCount() {
  let tryCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
  if (Number.isNaN(Number(tryCount))) {
    throw new Error('[Error] 숫자가 아닙니다.');
  }
  if (tryCount < 0) {
    throw new Error('[Error] 0보다 큰 수를 입력해야 합니다.');
  }

  return tryCount;
}

function isGo() {
  let randomNum = Random.pickNumberInRange(0, 9);

  if (randomNum >= 4) {
    return true;
  }
  return false;
}

class App {
  async play() {
    let carName = await inputCarName();
    let tryCount = await inputTryCount();

    console.log(carName);
    console.log(tryCount);
  }
}

const game = new App();
game.play();

export default App;
