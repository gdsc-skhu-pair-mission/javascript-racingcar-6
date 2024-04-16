import { Console } from '@woowacourse/mission-utils';
import getAvailableCars from '../../validators/CarNameValidator.js';
import { GAME_MESSAGES } from '../../constants/messages.js';
import { SYMBOLS } from '../../constants/symbols.js';

export default async function getUserCarName() {
  const getCarName = await Console.readLineAsync(GAME_MESSAGES.INPUT_CAR_NAMES);
  const carArray = getCarName.split(SYMBOLS.COMMA).map((name) => name.trim());
  const validCarArray = getAvailableCars(carArray);
  return validCarArray;
}
