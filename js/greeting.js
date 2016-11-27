import compile from './compile';
import appendToPage from './appendToPage';
import rules from './rules';


export default () => {
  const data = {
    player_name: 'Иван Федорович Крузенштерн'
  };

  const logo =
    `<div class="greeting__logo">
      <img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter">
    </div>`;

  const challenge =
    `<div class="greeting__challenge">
      <h3>Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!</h3>
      <div>Правила игры просты:</div>
      <p>
        Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
        Задача кажется тривиальной, но не думай, что все так просто.<br>
        Фотореализм обманчив и коварен.<br>
        Помни, главное — смотреть очень внимательно.
      </p>
    </div>`;

  const nextStep =
    `<div class="greeting__continue">
      <span>
        <img src="img/arrow_right.svg" width="64" height="64" alt="Next">
      </span>
    </div>`;

  const template =
    `<div class="greeting  central--blur">
      ${logo}
      <h1 class="greeting__asterisk">*</h1>
      ${challenge}
      ${nextStep}
    </div>`;

  const greetingElement = compile(template);
  const nextBtn = greetingElement.querySelector('.greeting__continue');

  nextBtn.addEventListener('click', () => appendToPage(rules(data)));

  return greetingElement;
};

