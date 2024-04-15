import { Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    const MIN_NAME_LENGTH = 5;
    if (typeof name !== 'string') {
      throw new Error('[ERROR] 자동차 이름은 문자열이어야 합니다.');
    }
    if (name.length > MIN_NAME_LENGTH) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
    }
    if (name.trim() === '') {
      throw new Error('[ERROR] 자동차 이름은 공백일 수 없습니다.');
    }
    this.name = name;
    this.distance = 0;
  }

  move() {
    const MOVE_NYMBER = 4;
    if (Random.pickNumberInRange(0, 9) >= MOVE_NYMBER) {
      this.distance += 1;
    }
  }

  getDistance() {
    return this.distance;
  }

  getName() {
    return this.name;
  }
}

export default Car;
