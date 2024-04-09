export default function getAvailableCars(CarArray) {
  CarArray.forEach((car) => {
    if (car.trim() === '') {
      throw new Error('[ERROR] 공백만 입력하시면 안됩니다.');
    }
    if (car.includes(' ')) {
      throw new Error('[ERROR] 이름 사이에 공백을 입력하시면 안됩니다.');
    }
    if (car.length > 5) {
      throw new Error('[ERROR] 이름이 5글자를 초과하시면 안됩니다.');
    }
  });
  if (CarArray.length < 2) {
    throw new Error('[ERROR] 자동차를 1대 이하로 입력하시면 안됩니다.');
  }
  return CarArray;
}
