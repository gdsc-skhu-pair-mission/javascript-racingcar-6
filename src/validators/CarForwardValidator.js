import { Random } from '@woowacourse/mission-utils';

export default function getCarMoveForword(carPositions) {
  const setCarPositions = carPositions.map((position) => {
    const randomNumber = Random.pickNumberInRange(0, 9);

    if (randomNumber >= 4) {
      return position + 1;
    }
    return position;
  });
  return setCarPositions;
}
