import { Console } from '@woowacourse/mission-utils';

export default function showRacingStatus(carNames, carPositions) {
  carNames.forEach((name, index) => {
    const position = '-'.repeat(carPositions[index]);
    Console.print(`${name} : ${position}`);
  });
  Console.print('');
}
