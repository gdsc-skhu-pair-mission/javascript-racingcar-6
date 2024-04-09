import { Console } from '@woowacourse/mission-utils';

export default function showRacingWinners(carNames, carPositions) {
  const maxPosition = Math.max(...carPositions);
  const winners = carNames.filter(
    (_, index) => carPositions[index] === maxPosition,
  );

  Console.print(`최종 우승자 : ${winners.join(', ')}`);
}
