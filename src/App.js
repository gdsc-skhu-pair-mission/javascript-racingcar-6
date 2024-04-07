import { Random, Console } from '@woowacourse/mission-utils';

function carNameException(carNameList, carName) {
  if (!Number.isNaN(Number(carNameList))) {
    throw new Error('[Error] 숫자가 입력되었습니다. 문자를 입력해주십시오.');
  }
  if (!carNameList.includes(',')) {
    throw new Error("[Error] ',' 가 포함되어 있지 않습니다.");
  }

  carName.forEach((name) => {
    if (name.length > 5) {
      throw new Error('[Error] 5자 이하인 이름으로 입력해주세요.');
    }
  });
}

async function inputCarName() {
  let carNameList = await Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  );
  let carName = carNameList.split(',');

  carNameException(carNameList, carName);
  return carName;
}

async function inputTryCount() {
  let tryCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  if (Number.isNaN(Number(tryCount))) {
    throw new Error('[Error] 숫자가 아닙니다.');
  }
  if (tryCount < 0) {
    throw new Error('[Error] 0보다 큰 수를 입력해야 합니다.');
  }

  return tryCount;
}

function isGo(nowState) {
  let randomNum = Random.pickNumberInRange(0, 9);
  let nextState = nowState;
  if (randomNum >= 4) {
    nextState += '-';
    return nextState;
  }
  return nextState;
}

function showWinner(carState, carName) {
  let maxLength = Math.max(...carState.map((str) => str.length));
  let winnerName = [];

  carState.forEach((name, index) => {
    if (name.length === maxLength) {
      winnerName.push(carName[index]);
    }
  });

  // 이후 수정 필요 (에러 원인에 대한 해결책 아직 발견하지 못함)
  // eslint-disable-next-line prefer-template
  Console.print('최종 우승자 : ' + winnerName.join(', '));
}

function showCarGo(carName, tryCount) {
  Console.print('\n실행 결과');
  let carState = new Array(carName.length).fill('');

  for (let i = 0; i < tryCount; i++) {
    carName.forEach((name, index) => {
      carState[index] = isGo(carState[index]);
      // 이후 수정 필요 (에러 원인에 대한 해결책 아직 발견하지 못함)
      // eslint-disable-next-line prefer-template
      Console.print(name + ' : ' + carState[index]);
    });
    Console.print('');
  }
  showWinner(carState, carName);
}

class App {
  // 이후 수정 필요 (에러 원인에 대한 해결책 아직 발견하지 못함)
  // eslint-disable-next-line class-methods-use-this
  async play() {
    let carName = await inputCarName();
    let tryCount = await inputTryCount();
    showCarGo(carName, tryCount);
  }
}

const game = new App();
game.play();

export default App;
