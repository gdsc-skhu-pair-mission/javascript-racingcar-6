import { ERROR_MESSAGES } from '../constants/messages.js';
import { GAME_SETTINGS, SYMBOLS } from '../constants/symbols.js';

export default function getAvailableAttempts(round) {
  if (round.trim() === SYMBOLS.EMPTY) {
    throw new Error(ERROR_MESSAGES.EMPTY_INPUT_ERROR);
  }
  const roundNumber = Number(round);
  if (Number.isNaN(roundNumber)) {
    throw new Error(ERROR_MESSAGES.NON_NUMERIC_INPUT_ERROR);
  }
  if (roundNumber < GAME_SETTINGS.MIN_ROUNDS_REQUIRED) {
    throw new Error(ERROR_MESSAGES.INPUT_BELOW_MINIMUM_ERROR);
  }
  return roundNumber;
}
