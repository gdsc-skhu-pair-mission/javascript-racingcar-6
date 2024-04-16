import { ERROR_MESSAGES } from '../constants/messages.js';
import { GAME_SETTINGS, SYMBOLS } from '../constants/symbols.js';

export default function getAvailableCars(carArray) {
  carArray.forEach((car) => {
    if (car.trim() === SYMBOLS.EMPTY) {
      throw new Error(ERROR_MESSAGES.EMPTY_INPUT_ERROR);
    }
    if (car.includes(SYMBOLS.SPACE)) {
      throw new Error(ERROR_MESSAGES.SPACE_IN_CAR_NAME_ERROR);
    }
    if (car.length > GAME_SETTINGS.MAX_NAME_LENGTH) {
      throw new Error(ERROR_MESSAGES.CAR_NAME_LENGTH_ERROR);
    }
  });

  const checkedDuplicateCars = new Set(carArray);
  if (checkedDuplicateCars.size !== carArray.length) {
    throw new Error(ERROR_MESSAGES.DUPLICATE_CAR_NAME_ERROR);
  }

  if (carArray.length < GAME_SETTINGS.MIN_CARS_REQUIRED) {
    throw new Error(ERROR_MESSAGES.TOO_FEW_CARS_ERROR);
  }
  return carArray;
}
