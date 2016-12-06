import appendToPage from '../appendToPage';
import getStats from '../stats';

class Live {

  constructor() {
    this._value = 3;
  }

  get value() {
    return this._value;
  }

  get valueArray() {
    return Array.from([...Array(this.value)]);
  }

  calculate() {
    if (this.value > 1) {
      --this._value;
    } else {
      --this._value;
      this.exitTheGame();
    }
  }

  exitTheGame() {
    appendToPage(getStats());
  }
}

export default new Live();
