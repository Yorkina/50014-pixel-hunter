import compile from './compile';
import introElement from './intro';
import appendToPage from './appendToPage';


const statistics = {
  total: [
    {
      bonuses: [
        {
          title: 'Бонус за скорость:',
          extra: 1,
          points: 50,
          total: 50,
          type: 'fast'
        },
        {
          title: 'Бонус за жизни:',
          extra: 2,
          points: 50,
          total: 100,
          type: 'heart'
        },
        {
          title: 'Штраф за медлительность:',
          extra: 2,
          points: 50,
          total: -100,
          type: 'slow'
        }
      ],
      results: [
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
      count: 1,
      cost_point: 100,
      cost_total: 900,
      result_total: 950
    },
    {
      results: [
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
      count: 2,
      cost_point: 100,
      cost_total: 900,
      result_total: 950
    },
    {
      bonuses: [
        {
          title: 'Бонус за скорость:',
          extra: 2,
          points: 50,
          total: 50,
          type: 'fast'
        }
      ],
      results: [
        'wrong',
        'slow',
        'fast',
        'correct',
        'wrong',
        'unknown',
        'slow',
        'wrong',
        'fast',
        'wrong'
      ],
      count: 3,
      cost_point: 100,
      cost_total: 900,
      result_total: 950
    }
  ],
  title: 'Победа!'
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

const drawBonuses = (item) =>
  `<tr>
    <td></td>
    <td class="result__extra">${item.title}</td>
    <td class="result__extra">${item.extra}&nbsp;<span class="stats__result stats__result--${item.type}"></span></td>
    <td class="result__points">×&nbsp;${item.points}</td>
    <td class="result__total">${item.total}</td>
  </tr>`;

const drawTables = (item) =>
  `<table class="result__table">
    <tr>
      <td class="result__number">${item.count}.</td>
      <td colspan="2">
        <ul class="stats">
          ${item.results.map((it) =>
            `<li class="stats__result stats__result--${it}"></li>`
          ).join('')}
        </ul>
      </td>
      <td class="result__points">×&nbsp;${item.cost_point}</td>
      <td class="result__total">${item.cost_total}</td>
    </tr>
    ${item.bonuses ? item.bonuses.map(drawBonuses).join('') : ''}
    <tr>
      <td colspan="5" class="result__total result__total--final">${item.result_total}</td>
    </tr>
  </table>`;

const template =
    `${header}
      <div class="result">
        <h1>${statistics.title}</h1>
        ${statistics.total.map(drawTables).join('')}
      </div>`;

const statsElement = compile(template);
const nextBtn = statsElement.querySelector('.back');
nextBtn.addEventListener('click', () => appendToPage(introElement));

export default statsElement;
