import compile from './compile';
import appendToPage from './appendToPage';
import gameThreeElement from './gameThree';
import gameOneElement from './gameOne';


const game = {
  timer: 'NN',
  lives_src: [
    'img/heart__empty.svg',
    'img/heart__full.svg',
    'img/heart__full.svg'
  ],
  stats: [
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
  ],
  question: 'Угадай, фото или рисунок?',
  answers: [
    {
      type: {
        photo: 'Фото',
        paint: 'Рисунок'
      },
      picture: 'http://placehold.it/705x455',
      count: 1
    }
  ]
};

const drawLabel = (answer) =>
  Object.keys(answer.type).map((key) =>
  `<label class="game__answer game__answer--wide game__answer--${key}">
    <input name="question${answer.count}" type="radio" value=${key}>
    <span>${answer.type[key]}</span>
  </label>`).join('');

const drawAnswers = (answer) =>
  `<div class="game__option">
    <img src=${answer.picture} alt="Option ${answer.count}" width="705" height="455">
    ${drawLabel(answer)}
  </div>`;

const answersCount = game.answers.map((it) => drawAnswers(it)).join('');

const drawHeader = () =>
    `<header class="header">
      <div class="header__back">
        <span class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.png" width="101" height="44">
        </span>
      </div>
      <h1 class="game__timer">${game.timer}</h1>
      <div class="game__lives">
        ${game.lives_src.map((it) =>
          `<img src=${it} class="game__heart" alt="Life" width="32" height="32">`
        ).join('')}
      </div>
    </header>`;

const answers =
  `<form class="game__content game__content--wide">
    ${answersCount}
  </form>`;

const stats =
  `<div class="stats">
    <ul class="stats">
    ${game.stats.map((it) =>
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

prevBtn.addEventListener('click', () => appendToPage(gameOneElement));

const answerBtns = Array.from(gameTwoElement.querySelectorAll('.game__answer'));
answerBtns.forEach((button) => button.addEventListener('click', () => {
  appendToPage(gameThreeElement);
}));

export default gameTwoElement;
