import compile from './compile';
import appendToPage from './appendToPage';
import getNextQuestion from './games';
import timer from './helpers/timer';
import drawHeader from './templates/header';
import stats from './templates/stats';
import live from './helpers/live';
import verdict from './dataInfo/verdict';


export default (game, stat) => {
  const drawAnswers = (answer, i) =>
    `<div class="game__option" data-answer=${answer.count}>
      <img src=${answer.picture} alt="Option ${answer.count}">
    </div>`;

  const answers =
    `<form class="game__content game__content--triple">
      ${game.answers.map(drawAnswers).join('')}
    </form>`;

  const template =
    `${drawHeader(live.value)}
      <div class="game">
        <p class="game__task">${game.question}</p>
        ${answers}
        ${stats(verdict.results)}
      </div>`;

  const gameElement = compile(template);
  let timeToStop = timer(gameElement, 30);

  const countResults = (elem) => {
    const time = gameElement.querySelector('.game__timer').innerText;
    const answer = elem.dataset.answer;
    const result = {time: time, isCorrect: game.answers[answer].correct};

    if (!game.answers[answer].correct) {
      live.calculate();
    }

    verdict.append(result);
  };

  const clickHandler = (evt) => {
    timeToStop();
    const target = evt.target;
    countResults(target);

    if (!live.value) {
      return;
    }
    appendToPage(getNextQuestion());
  };

  const answerBtns = Array.from(gameElement.querySelectorAll('.game__option'));
  answerBtns.forEach((button) => button.addEventListener('click', clickHandler));

  return gameElement;
};

