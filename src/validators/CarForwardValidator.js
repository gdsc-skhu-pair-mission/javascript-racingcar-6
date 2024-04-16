import { Random } from '@woowacourse/mission-utils';
import { GAME_SETTINGS } from '../constants/symbols.js';

export default function getCarMoveForword(carPositions) {
  const setCarPositions = carPositions.map((position) => {
    const randomNumber = Random.pickNumberInRange(
      GAME_SETTINGS.MIN_RANDOM_NUMBER,
      GAME_SETTINGS.MAX_RANDOM_NUMBER,
    );

    if (randomNumber >= GAME_SETTINGS.FORWARD_POINT) {
      return position + GAME_SETTINGS.INCREASE_POSISION;
    }
    return position;
  });
  return setCarPositions;
}
