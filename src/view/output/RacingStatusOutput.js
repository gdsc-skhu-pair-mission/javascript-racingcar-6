import { Console } from '@woowacourse/mission-utils';
import { SYMBOLS } from '../../constants/symbols.js';

export default function showRacingStatus(carNames, carPositions) {
  carNames.forEach((name, index) => {
    const position = SYMBOLS.DASH.repeat(carPositions[index]);
    Console.print(`${name}${SYMBOLS.COLON_WITH_BLACK}${position}`);
  });
  Console.print(SYMBOLS.EMPTY);
}
