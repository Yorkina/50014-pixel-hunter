import appendToPage from '../appendToPage';
import getNextQuestion from '../games';
import live from './live';
import verdict from '../dataInfo/verdict';

export default (element) => {
  let time = 30;
  let timerElement = element.querySelector('.game__timer');

  const timer = () => {
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
