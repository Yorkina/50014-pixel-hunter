import compile from './compile';
import appendToPage from './appendToPage';
import gameTen from './gameTen';
import gameEight from './gameEight';


export default (game) => {
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
    question: 'Как ты думаешь, эти изображения фото или рисунок?',
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

  const drawAnswers = (answer) =>
    `<div class="game__option">
      <img src=${answer.picture} alt="Option ${answer.count}" width="304" height="455">
    </div>`;

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
    `<form class="game__content game__content--triple">
      ${game.answers.map(drawAnswers).join('')}
    </form>`;

  const statistics =
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
        ${statistics}
      </div>`;

  const gameNineElement = compile(template);
  const prevBtn = gameNineElement.querySelector('.back');

  prevBtn.addEventListener('click', () => appendToPage(gameEight()));

  const answerBtns = Array.from(gameNineElement.querySelectorAll('.game__option'));
  answerBtns.forEach((button) => button.addEventListener('click', () => {
    appendToPage(gameTen(data));
  }));

  return gameNineElement;
};

