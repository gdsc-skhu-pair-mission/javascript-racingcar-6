import { Console } from '@woowacourse/mission-utils';
import getAvailableAttempts from '../../validators/AttemptValidator.js';

export default async function askForAttempts() {
  const attemptRound =
    await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  const roundNumber = getAvailableAttempts(attemptRound);
  return roundNumber;
}
