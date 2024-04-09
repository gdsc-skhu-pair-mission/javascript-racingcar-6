import getUserCarName from './view/input/CarNameInput.js';
import askForAttempts from './view/input/AttemptInput.js';
import RacingGame from './model/RacingGame.js';

class App {
  // eslint-disable-next-line class-methods-use-this
  async play() {
    const carNames = await getUserCarName();
    const attempts = await askForAttempts();
    const racingGame = new RacingGame(carNames, attempts);
    racingGame.Racing();
  }
}

export default App;
