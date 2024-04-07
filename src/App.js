import { Randoms, Console } from '@woowacourse/mission-utils';

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
}

class App {
  async play() {}
}

export default App;
