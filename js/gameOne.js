import compile from './compile';
import appendToPage from './appendToPage';
import getRules from './rules';
import getNextQuestion from './games';
import getStats from './stats';
import verdict from './helpers/verdict';
import timer from './helpers/timer';
import drawHeader from './templates/header';
import stats from './templates/stats';
import live from './helpers/live';


export default (game, stat) => {
  const drawLabel = (answer) =>
    answer.labels.map((key, i) =>
    `<label class="game__answer game__answer--${key.type}">
      <input name="question${answer.count}" type="radio" value=${key.type} data-answer=${answer.count}>
      <span>${key.text}</span>
    </label>`).join('');

  const drawAnswers = (answer) =>
    `<div class="game__option">
      <img src=${answer.picture} alt="Option ${answer.count}">
      ${answer.labels ? drawLabel(answer) : ''}
    </div>`;

  const answers =
    `<form class="game__content game__content--wide">
      ${game.answers.map(drawAnswers).join('')}
    </form>`;

  const template =
    `${drawHeader(live.value)}
      <div class="game">
        <p class="game__task">${game.question}</p>
        ${answers}
        ${stat ? stats(stat) : stats([])}
      </div>`;

  const steps = new Map();
  const gameElement = compile(template);
  const prevBtn = gameElement.querySelector('.back');
  let timeToStop = timer(gameElement, 30);

  prevBtn.addEventListener('click', () => appendToPage(getRules()));

  const getAnswer = (type, count) => {
    const time = gameElement.querySelector('.game__timer').innerText;
    const labels = game.answers[count].labels;
    const answer = labels.find((it) => it.type === type);

    if (!answer) {
      return null;
    }

    if (!answer.correct) {
      live.calculate();
    }

    return {
      time: time,
      isCorrect: answer.correct
    };
  };

  const countResults = () => {
    const stepsEntries = steps.entries();
    for (let step of stepsEntries) {
      const stepType = step[1];
      const stepCount = step[0];
      const answer = getAnswer(stepType, stepCount);
      if (!answer) {
        continue;
      }

      verdict.append(answer);
    }
  };

  const clickHandler = (evt) => {
    const target = evt.target;
    const type = target.value;
    const count = +target.dataset.answer;

    if (steps.has(count)) {
      return;
    }

    steps.set(count, type);

    if (steps.size >= game.answers.length) {
      countResults();
      timeToStop();

      if (game.id === 'level9' || !live.value) {
        appendToPage(getStats());
        return;
      } else {
        appendToPage(getNextQuestion());
      }
    }
  };

  const answerBtns = Array.from(gameElement.querySelectorAll('.game__answer input'));
  answerBtns.forEach((button) => button.addEventListener('click', clickHandler));

  return gameElement;
};

