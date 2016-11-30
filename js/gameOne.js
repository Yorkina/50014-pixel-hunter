import compile from './compile';
import appendToPage from './appendToPage';
import getRules from './rules';
import getNextQuestion from './games';
import getStats from './stats';
import data from './data/statsData';


export default (game) => {

  let statics = [
    'wrong',
    'slow',
    'fast',
    'correct',
    'wrong',
    'unknown',
    'slow',
    'unknown',
    'fast',
    'unknown'
  ];

  let defaultLives = {
    count: 3
  };

  const drawLabel = (answer) =>
    answer.labels.map((key) =>
    `<label class="game__answer game__answer--${key.type}">
      <input name="question${answer.count}" type="radio" value=${key.type}>
      <span>${key.text}</span>
    </label>`).join('');

  const drawAnswers = (answer) =>
    `<div class="game__option">
      <img src=${answer.picture} alt="Option ${answer.count}">
      ${answer.labels ? drawLabel(answer) : ''}
    </div>`;

  const drawLives = (lives) => {
    const diff = defaultLives.count - lives;
    let livesArray = Array.from(Array(defaultLives.count));

    return livesArray.map((life, i) => `
      <img src="img/heart__${i < diff ? 'empty' : 'full'}.svg"
      class="game__heart" alt="Life" width="32" height="32">`);
  };

  const drawHeader = () =>
    `<header class="header">
      <div class="header__back">
        <span class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.png" width="101" height="44">
        </span>
      </div>
      <h1 class="game__timer">NN</h1>
      <div class="game__lives">
        ${drawLives(2).join('')}
      </div>
    </header>`;

  const answers =
    `<form class="game__content game__content--wide">
      ${game.answers.map(drawAnswers).join('')}
    </form>`;

  const stats =
    `<div class="stats">
      <ul class="stats">
      ${statics.map((it) =>
        `<li class="stats__result stats__result--${it}"></li>`
      ).join('')}
      </ul>
    </div>`;

  const template =
    `${drawHeader()}
      <div class="game">
        <p class="game__task">${game.question}</p>
        ${answers}
        ${stats}
      </div>`;

  const gameElement = compile(template);
  const prevBtn = gameElement.querySelector('.back');

  prevBtn.addEventListener('click', () => appendToPage(getRules()));

  const answerBtns = Array.from(gameElement.querySelectorAll('.game__answer input'));
  answerBtns.forEach((button) => button.addEventListener('click', (evt) => {
    if (game.id === 'level9') {
      appendToPage(getStats(data));
      return;
    }
    appendToPage(getNextQuestion());
  }));

  return gameElement;
};

