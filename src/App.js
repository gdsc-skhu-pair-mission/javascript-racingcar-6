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
    const askForAttempts = Number(
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n'),
    );
    Console.print('\n실행결과');
    for (let i = 0; i < askForAttempts; i++) {
      this.cars.forEach((car) => car.move());
      this.showRacingStatus();
    }
    this.gameWinner();
  }

  showRacingStatus() {
    this.cars.forEach((car) => {
      Console.print(`${car.getName()} : ${'-'.repeat(car.getDistance())}`);
    });
    Console.print('');
  }

  gameWinner() {
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
