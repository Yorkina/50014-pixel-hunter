import compile from './compile';
import appendToPage from './appendToPage';
import gameThreeElement from './gameThree';
import gameOneElement from './gameOne';


const game = {
  timer: 'NN',
  livesSrc: [
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
    'unknow',
    'slow',
    'unknow',
    'fast',
    'unknow'
  ],
  question: 'Угадай, фото или рисунок?',
  answers: {
    photo: 'Фото',
    picture: 'Рисунок'
  }
};

const darwHeader = () =>
    `<header class="header">
      <div class="header__back">
        <span class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.png" width="101" height="44">
        </span>
      </div>
      <h1 class="game__timer">${game.timer}</h1>
      <div class="game__lives">
        ${game.livesSrc.map((it) =>
          `<img src=${it} class="game__heart" alt="Life" width="32" height="32">`
        ).join('')}
      </div>
    </header>`;

const answers =
  `<form class="game__content game__content--wide">
    <div class="game__option">
      <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
      <label class="game__answer game__answer--photo">
        <input name="question1" type="radio" value="photo">
        <span>${game.answers.photo}</span>
      </label>
      <label class="game__answer game__answer--wide game__answer--paint">
        <input name="question1" type="radio" value="paint">
        <span>${game.answers.picture}</span>
      </label>
    </div>
  </form>`;

const stats =
  `<div class="stats">
    <ul class="stats">
    ${game.stats.map((it) =>
        `<li class="stats__result ${'stats__result' + '--' + (it)}">`
      ).join('')}</li>
    </ul>
  </div>`;
// <li class="stats__result stats__result--wrong"></li>
//       <li class="stats__result stats__result--slow"></li>
//       <li class="stats__result stats__result--fast"></li>
//       <li class="stats__result stats__result--correct"></li>
//       <li class="stats__result stats__result--wrong"></li>
//       <li class="stats__result stats__result--unknown"></li>
//       <li class="stats__result stats__result--slow"></li>
//       <li class="stats__result stats__result--unknown"></li>
//       <li class="stats__result stats__result--fast"></li>
//       <li class="stats__result stats__result--unknown"></li>

const template =
  `${darwHeader()}
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
