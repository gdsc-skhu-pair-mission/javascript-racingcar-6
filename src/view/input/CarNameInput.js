import { Console } from '@woowacourse/mission-utils';
import getAvailableCars from '../../validators/CarNameValidator.js';

export default async function getUserCarName() {
  const getCarName = await Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  );
  const carArray = getCarName.split(',').map((name) => name.trim());
  const validCarArray = getAvailableCars(carArray);
  return validCarArray;
}
