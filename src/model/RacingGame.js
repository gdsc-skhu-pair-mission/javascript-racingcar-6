import { Console } from '@woowacourse/mission-utils';
import getCarMoveForword from '../validators/CarForwardValidator.js';
import showRacingStatus from '../view/output/RacingStatusOutput.js';
import showRacingWinners from '../view/output/RacingWinnerOutput.js';

export default class RacingGame {
  constructor(carNames, attempts) {
    this.carNames = carNames;
    this.attempts = attempts;
    this.carPositions = new Array(carNames.length).fill(0);
  }

  Racing() {
    Console.print('\n실행결과');
    for (let i = 0; i < this.attempts; i++) {
      this.carPositions = getCarMoveForword(this.carPositions);
      showRacingStatus(this.carNames, this.carPositions);
    }
    showRacingWinners(this.carNames, this.carPositions);
  }
}
