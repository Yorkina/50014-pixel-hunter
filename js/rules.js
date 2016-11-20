import {compile} from './compile';
import {appendToPage} from './appendToPage';
import {element as gameOneElement} from './gameOne';
import {element as greetingElement} from './greeting';

const template =
    `<header class="header">
        <div class="header__back">
          <span class="back">
            <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
            <img src="img/logo_small.png" width="101" height="44">
          </span>
        </div>
      </header>
      <div class="rules central--none">
        <h1 class="rules__title">Правила</h1>
        <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
          src="img/photo_icon.png" width="16" height="16"> или рисунок <img
          src="img/paint_icon.png" width="16" height="16" alt="">.<br>
          Фотографиями или рисунками могут быть оба изображения.<br>
          На каждую попытку отводится 30 секунд.<br>
          Ошибиться можно не более 3 раз.<br>
          <br>
          Готовы?
        </p>
        <form class="rules__form">
          <input class="rules__input" type="text" placeholder="Ваше Имя">
          <button class="rules__button  continue" type="submit" disabled>Go!</button>
        </form>
      </div>`;

const element = compile(template);
const prevBtn = element.querySelector('.back');
const submitBtn = element.querySelector('.rules__button');
const rulesInput = element.querySelector('.rules__input');

prevBtn.addEventListener('click', prevHandler);
submitBtn.addEventListener('click', nextHandler);
rulesInput.addEventListener('input', toggleInputHandler);

function toggleInputHandler(event) {
  const isEnabled = !event.target.value;
  submitBtn.disabled = isEnabled;
}

function nextHandler(event) {
  event.preventDefault();
  appendToPage(gameOneElement);
}

function prevHandler(event) {
  appendToPage(greetingElement);
}

export {element};
