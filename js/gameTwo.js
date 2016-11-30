import compile from './compile';
import appendToPage from './appendToPage';
import getNextQuestion from './games';
import getGameOne from './gameOne';


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
    let images = '';
    for (let i = 0; i < 3; i++) {
      if (i < lives) {
        images += `<img src="img/heart__full.svg"
          class="game__heart" alt="Life" width="32" height="32">`;
      } else {
        images += `<img src="img/heart__empty.svg"
          class="game__heart" alt="Life" width="32" height="32">`;
      }
    }
    return images;
  };

  const drawHeader = () =>
    `<header class="header header2">
      <div class="header__back">
        <span class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.png" width="101" height="44">
        </span>
      </div>
      <h1 class="game__timer">NN</h1>
      <div class="game__lives">
        ${drawLives(3)}
      </div>
    </header>`;

  const answers =
    `<form class="game__content">
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


  const gameTwoElement = compile(template);
  const prevBtn = gameTwoElement.querySelector('.back');

  prevBtn.addEventListener('click', () => appendToPage(getGameOne()));
  let values = [];
  const answerBtns = Array.from(gameTwoElement.querySelectorAll('.game__answer input'));
  answerBtns.forEach((button) => button.addEventListener('click', (evt) => {
    if (values.length < 1) {
      values.push({name: evt.target.name, type: evt.target.value});
      return;
    } else if (values.length === 1) {
      values.push({name: evt.target.name, type: evt.target.value});
      appendToPage(getNextQuestion());
    }
  }));

  return gameTwoElement;
};

