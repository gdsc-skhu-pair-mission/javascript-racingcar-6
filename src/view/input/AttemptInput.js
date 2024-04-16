import { Console } from '@woowacourse/mission-utils';
import getAvailableAttempts from '../../validators/AttemptValidator.js';
import { GAME_MESSAGES } from '../../constants/messages.js';

export default async function askForAttempts() {
  const attemptRound = await Console.readLineAsync(
    GAME_MESSAGES.INPUT_ATTEMPT_NUMBER,
  );
  const roundNumber = getAvailableAttempts(attemptRound);
  return roundNumber;
}
