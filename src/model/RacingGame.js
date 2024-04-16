import { Console } from '@woowacourse/mission-utils';
import getCarMoveForword from '../validators/CarForwardValidator.js';
import showRacingStatus from '../view/output/RacingStatusOutput.js';
import showRacingWinners from '../view/output/RacingWinnerOutput.js';
import { GAME_MESSAGES } from '../constants/messages.js';
import { GAME_SETTINGS } from '../constants/symbols.js';

export default class RacingGame {
  constructor(carNames, attempts) {
    this.carNames = carNames;
    this.attempts = attempts;
    this.carPositions = new Array(carNames.length).fill(
      GAME_SETTINGS.INITIAL_POSITION,
    );
  }

  Racing() {
    Console.print(GAME_MESSAGES.PROCESS_RESULT);
    for (let i = 0; i < this.attempts; i++) {
      this.carPositions = getCarMoveForword(this.carPositions);
      showRacingStatus(this.carNames, this.carPositions);
    }
    showRacingWinners(this.carNames, this.carPositions);
  }
}
