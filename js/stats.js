import compile from './compile';
import getIntro from './intro';
import appendToPage from './appendToPage';
import verdict from './helpers/verdict';


const answers = verdict.value;

export default () => {
  const header =
    `<header class="header">
      <div class="header__back">
        <span class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.png" width="101" height="44">
        </span>
      </div>
    </header>`;

  const drawBonus = (count, bonus) => {
    return `<tr>
      <td></td>
      <td class="result__extra">${bonus.title}</td>
      <td class="result__extra">${count}&nbsp;<span class="stats__result stats__result--${bonus.type}"></span></td>
      <td class="result__points">×&nbsp;${bonus.points}</td>
      <td class="result__total">${count * bonus.points}</td>
    </tr>`;
  };

  const drawBonuses = (item) => {
    if (!item.bonuses.length) {
      return '';
    }

    return item.bonuses.map((it) => {
      const bonus = verdict.getBonus(it.type);
      return drawBonus(it.count, bonus);
    }).join('');
  };

  const countTotalAmmount = (item) => {
    return (item.fast * 50 + item.heart * 100) - (item.slow * 100);
  };

  const checkFinalResult = (item, total) => {
    if (item.isCorrect) {
      return `<td colspan="5" class="result__total result__total--final">${countTotalAmmount(total)}</td>`;
    }
    return '';
  };

  const drawTables = (item, i) => {
    const states = verdict.getStates(item);
    const totalBonuses = verdict.countBonuses(item);
    return `<table class="result__table">
      <tr>
        <td class="result__number">${i}.</td>
        <td colspan="2">
          <ul class="stats">
            ${states.map((it) =>
              `<li class="stats__result stats__result--${it}"></li>`
            ).join('')}
          </ul>
        </td>
        <td class="result__points">${item.isCorrect ? '×&nbsp;' + 50 : ''}</td>
        <td class="result__total ${item.isCorrect ? '' : 'result__total--final'}">${item.isCorrect ? countTotalAmmount(totalBonuses) : 'FAIL'}</td>
      </tr>
        ${drawBonuses(item)}
      <tr>
        ${checkFinalResult(item, totalBonuses)}
      </tr>
    </table>`;
  };

  const template =
    `${header}
      <div class="result">
        <h1>${answers.length < 10 ? 'Проигрыш' : 'Победа'}</h1>
        ${answers.map(drawTables).join('')}
      </div>`;

  const statsElement = compile(template);
  const nextBtn = statsElement.querySelector('.back');
  nextBtn.addEventListener('click', () => appendToPage(getIntro()));

  return statsElement;
};

