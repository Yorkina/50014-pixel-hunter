import {compile} from './compile';
import {appendToPage} from './appendToPage';
import {element as gameThreeElement} from './gameThree';
import {element as gameOneElement} from './gameOne';

const template =
    `<div>
      <header class="header">
        <div class="header__back">
          <span class="back">
            <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
            <img src="img/logo_small.png" width="101" height="44">
          </span>
        </div>
        <h1 class="game__timer">NN</h1>
        <div class="game__lives">
          <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
          <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
          <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
        </div>
      </header>
      <div class="game">
        <p class="game__task">Угадай, фото или рисунок?</p>
        <form class="game__content  game__content--wide">
          <div class="game__option">
            <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
            <label class="game__answer  game__answer--photo">
              <input name="question1" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer  game__answer--wide  game__answer--paint">
              <input name="question1" type="radio" value="paint">
              <span>Рисунок</span>
            </label>
          </div>
        </form>
        <div class="stats">
          <ul class="stats">
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--correct"></li>
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--unknown"></li>
          </ul>
        </div>
      </div>
    </div>`;

const element = compile(template);
const prevBtn = element.querySelector('.back');
prevBtn.addEventListener('click', prevHandler);

let answerBtns = element.querySelectorAll('.game__answer');
answerBtns = Array.from(answerBtns);
answerBtns.forEach((button) => button.addEventListener('click', nextHandler));

function nextHandler() {
  appendToPage(gameThreeElement);
}

function prevHandler() {
  appendToPage(gameOneElement);
}

export {element};
