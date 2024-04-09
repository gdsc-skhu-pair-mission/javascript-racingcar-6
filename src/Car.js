import { Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    if (name.length > 5) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
    }
    if (name.trim() === '') {
      throw new Error('[ERROR] 자동차 이름은 공백일 수 없습니다.');
    }
    this.name = name;
    this.distance = 0;
  }

  move() {
    const MoveNumber = 4;
    if (Random.pickNumberInRange(0, 9) >= MoveNumber) {
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
