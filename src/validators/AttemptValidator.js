import { ERROR_MESSAGES } from '../constants/messages';

export default function getAvailableAttempts(round) {
  if (round.trim() === '') {
    throw new Error(ERROR_MESSAGES.EMPTY_INPUT_ERROR);
  }
  const roundNumber = Number(round);
  if (Number.isNaN(roundNumber)) {
    throw new Error(ERROR_MESSAGES.NON_NUMERIC_INPUT_ERROR);
  }
  if (roundNumber < 1) {
    throw new Error(ERROR_MESSAGES.INPUT_BELOW_MINIMUM_ERROR);
  }
  return roundNumber;
}
