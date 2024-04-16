export const GAME_MESSAGES = Object.freeze({
  INPUT_CAR_NAMES:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  INPUT_ATTEMPT_NUMBER: '시도할 횟수는 몇 회인가요?\n',
  WINNER: '최종 우승자 : ',
  PROCESS_RESULT: '\n실행결과',
});

export const ERROR_MESSAGES = Object.freeze({
  EMPTY_INPUT_ERROR: '[ERROR] 공백만 입력하시면 안됩니다.',
  NON_NUMERIC_INPUT_ERROR: '[ERROR] 숫자가 아닌 값을 입력하시면 안됩니다.',
  INPUT_BELOW_MINIMUM_ERROR: '[ERROR] 0 이하의 수를 입력하시면 안됩니다.',
  SPACE_IN_CAR_NAME_ERROR: '[ERROR] 이름 사이에 공백을 입력하시면 안됩니다.',
  CAR_NAME_LENGTH_ERROR: '[ERROR] 이름이 5글자를 초과하시면 안됩니다.',
  TOO_FEW_CARS_ERROR: '[ERROR] 자동차를 1대 이하로 입력하시면 안됩니다.',
  DUPLICATE_CAR_NAME_ERROR: '[ERROR] 중복된 이름을 입력하시면 안됩니다.',
});
