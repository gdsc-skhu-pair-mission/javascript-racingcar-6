import { ERROR_MESSAGES } from '../constants/messages';

export default function getAvailableCars(carArray) {
  carArray.forEach((car) => {
    if (car.trim() === '') {
      throw new Error(ERROR_MESSAGES.EMPTY_INPUT_ERROR);
    }
    if (car.includes(' ')) {
      throw new Error(ERROR_MESSAGES.SPACE_IN_CAR_NAME_ERROR);
    }
    if (car.length > 5) {
      throw new Error(ERROR_MESSAGES.CAR_NAME_LENGTH_ERROR);
    }
  });

  const checkedDuplicateCars = new Set(carArray);
  if (checkedDuplicateCars.size !== carArray.length) {
    throw new Error(ERROR_MESSAGES.DUPLICATE_CAR_NAME_ERROR);
  }

  if (carArray.length < 2) {
    throw new Error(ERROR_MESSAGES.TOO_FEW_CARS_ERROR);
  }
  return carArray;
}
