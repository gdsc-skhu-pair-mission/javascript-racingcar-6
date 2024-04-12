export default function getAvailableAttempts(round) {
  if (round.trim() === '') {
    throw new Error('[ERROR] 공백을 입력하시면 안됩니다.');
  }
  const roundNumber = Number(round);
  if (Number.isNaN(roundNumber)) {
    throw new Error('[ERROR] 숫자가 아닌 값을 입력하시면 안됩니다.');
  }
  if (roundNumber < 1) {
    throw new Error('[ERROR] 0 이하의 수를 입력하시면 안됩니다.');
  }
  return roundNumber;
}
