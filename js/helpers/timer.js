import appendToPage from '../appendToPage';
import getNextQuestion from '../games';
import live from './live';
import verdict from '../helpers/verdict';

export default (element, time) => {

  if (time < 0 || time > 30) {
    throw new RangeError('Time coudnt be negative or more than 30');
  }

  const timer = () => {
    const timerElement = element.querySelector('.game__timer');
    timerElement.textContent = --time;

    if (time === 0) {
      live.calculate();
      verdict.append({time: 0, isCorrect: false});
      stopTimer();

      if (live.value) {
        appendToPage(getNextQuestion());
      }
    }
  };

  const interval = setInterval(() => timer(), 1000);

  const stopTimer = () => {
    clearInterval(interval);
  };

  return stopTimer;
};
