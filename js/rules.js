import compile from './compile';
import appendToPage from './appendToPage';
import getGameOne from './gameOne';
import getGreeting from './greeting';


export default (rules) => {
  const data = {
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
    question: 'Угадайте для каждого изображения фото или рисунок?',
    answers: [
      {
        labels: [
          {type: 'photo', text: 'Фото'},
          {type: 'paint', text: 'Рисунок'},
        ],
        picture: 'http://placehold.it/468x458',
        count: 1
      },
      {
        labels: [
          {type: 'photo', text: 'Фото'},
          {type: 'paint', text: 'Рисунок'},
        ],
        picture: 'http://placehold.it/468x458',
        count: 2
      }
    ]
  };

  const header =
    `<header class="header">
      <div class="header__back">
        <span class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.png" width="101" height="44">
        </span>
      </div>
    </header>`;

  const player =
    `<form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>`;

  const content =
    `<div class="rules central--none">
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
      ${player}
    </div>`;

  const template =
    `${header}
    ${content}`;

  const rulesElement = compile(template);
  const prevBtn = rulesElement.querySelector('.back');
  const submitBtn = rulesElement.querySelector('.rules__button');
  const rulesInput = rulesElement.querySelector('.rules__input');

  prevBtn.addEventListener('click', () => appendToPage(getGreeting()));

  submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    appendToPage(getGameOne(data));
  });

  if (rules.player_name) {
    rulesInput.value = rules.player_name;
    submitBtn.disabled = false;
  }

  rulesInput.addEventListener('input', (event) => {
    const isEnabled = !event.target.value;
    submitBtn.disabled = isEnabled;
  });

  return rulesElement;
};
