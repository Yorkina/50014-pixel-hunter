import compile from './compile';
import appendToPage from './appendToPage';
import gameTwoElement from './gameTwo';
import rulesElement from './rules';


const game = {
  header: {
    timer: 'NN'
  },
  question: 'Угадайте для каждого изображения фото или рисунок?',
  answers: {
    photo: 'Фото',
    picture: 'Рисунок'
  }
};

const header =
  `<header class="header">
      <div class="header__back">
          <span class="back">
            <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
            <img src="img/logo_small.png" width="101" height="44">
          </span>
      </div>
      <h1 class="game__timer">${game.header.timer}</h1>
      <div class="game__lives">
        <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
        <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
        <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
      </div>
    </header>`;

const answers =
    `<form class="game__content">
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>${game.answers.photo}</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>${game.answers.picture}</span>
        </label>
      </div>
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>${game.answers.photo}</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint">
          <span>${game.answers.picture}</span>
        </label>
      </div>
    </form>`;

const stats =
    `<div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>`;

const template =
    `${header}
      <div class="game">
        <p class="game__task">${game.question}</p>
        ${answers}
        ${stats}
      </div>`;

const gameOneElement = compile(template);
const prevBtn = gameOneElement.querySelector('.back');

prevBtn.addEventListener('click', () => appendToPage(rulesElement));

const answerBtns = Array.from(gameOneElement.querySelectorAll('.game__answer'));
answerBtns.forEach((button) => button.addEventListener('click', () => {
  appendToPage(gameTwoElement);
}));

export default gameOneElement;
