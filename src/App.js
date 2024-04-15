import { Console } from '@woowacourse/mission-utils';
// eslint-disable-next-line import/extensions
import Car from './Car.js';

class App {
  constructor() {
    this.cars = [];
  }

  async play() {
    const getUserCarName = await Console.readLineAsync(
      '경주 할 자동차 이름(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const carNames = getUserCarName.split(',');
    carNames.forEach((name) => {
      const car = new Car(name);
      this.cars.push(car);
    });

    this.askForAttempts =
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const AVAILABLE_ATTEMPTS = this.getAvailableAttempts();

    Console.print('\n실행결과');
    for (let i = 0; i < AVAILABLE_ATTEMPTS; i++) {
      this.cars.forEach((car) => car.move());
      this.showRacingStatus();
    }
    this.generateGameWinner();
  }

  getAvailableAttempts() {
    if (this.askForAttempts.trim() === '') {
      throw new Error('[ERROR] 공백을 입력하실 수 없습니다.');
    }
    const ATTEMPTS = Number(this.askForAttempts);
    if (Number.isNaN(ATTEMPTS)) {
      throw new Error('[ERROR] 숫자가 아닌 값을 입력하실 수 없습니다. ');
    }
    if (ATTEMPTS < 0) {
      throw new Error('[ERROR] 숫자가 0보다 작으면 안됩니다.');
    }
    return ATTEMPTS;
  }

  showRacingStatus() {
    this.cars.forEach((car) => {
      Console.print(`${car.getName()} : ${'-'.repeat(car.getDistance())}`);
    });
    Console.print('');
  }

  generateGameWinner() {
    const getWinnerDistance = Math.max(
      ...this.cars.map((car) => car.getDistance()),
    );

    const getWinner = this.cars
      .filter((car) => car.getDistance() === getWinnerDistance)
      .map((car) => car.getName());
    // eslint-disable-next-line prefer-template
    Console.print('최종 우승자 : ' + getWinner.join(', '));
  }
}

export default App;
