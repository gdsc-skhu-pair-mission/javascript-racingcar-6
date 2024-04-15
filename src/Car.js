import { Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.minNameLength = 5;
    if (name.length > this.minNameLength) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
    }
    if (name.trim() === '') {
      throw new Error('[ERROR] 자동차 이름은 공백일 수 없습니다.');
    }
    this.name = name;
    this.distance = 0;
  }

  move() {
    this.MoveNumber = 4;
    if (Random.pickNumberInRange(0, 9) >= this.MoveNumber) {
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
