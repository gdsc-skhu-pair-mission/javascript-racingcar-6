export default function getAvailableCars(CarArray) {
  CarArray.forEach((car) => {
    if (car.trim() === '') {
      throw new Error('[ERROR]공백을 입력하셨습니다.');
    }
    if (car.length > 5) {
      throw new Error('[ERROR]이름이 5글자를 초과하셨습니다.');
    }
  });
  if (CarArray.length < 2) {
    throw new Error('[ERROR]자동차가 한 대이하로 입력하셨습니다. ');
  }
  return CarArray;
}
