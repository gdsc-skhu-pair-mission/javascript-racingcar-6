import { Console } from '@woowacourse/mission-utils';
import { SYMBOLS } from '../../constants/symbols.js';
import { GAME_MESSAGES } from '../../constants/messages.js';

export default function showRacingWinners(carNames, carPositions) {
  const maxPosition = Math.max(...carPositions);
  const winners = carNames.filter(
    (_, index) => carPositions[index] === maxPosition,
  );

  Console.print(
    `${GAME_MESSAGES.WINNER}${winners.join(SYMBOLS.COMMA_WITH_BLANK)}`,
  );
}
