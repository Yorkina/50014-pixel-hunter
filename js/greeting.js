import compile from './compile';
import appendToPage from './appendToPage';
import rulesElement from './rules';


const greeting = {
  challenge: {
    title: 'Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!',
    rules: 'Правила игры просты:',
    firstInstruction: 'Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.',
    secondInstruction: 'Задача кажется тривиальной, но не думай, что все так просто.',
    thirdInstruction: 'Фотореализм обманчив и коварен.',
    fouthInstruction: 'Помни, главное — смотреть очень внимательно.'
  }
};

const logo =
  `<div class="greeting__logo">
    <img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter">
  </div>`;

const challenge =
  `<div class="greeting__challenge">
    <h3>${greeting.challenge.title}</h3>
    <div>${greeting.challenge.rules}</div>
    <p>
      ${greeting.challenge.firstInstruction}<br>
      ${greeting.challenge.secondInstruction}<br>
      ${greeting.challenge.thirdInstruction}<br>
      ${greeting.challenge.fouthInstruction}
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

nextBtn.addEventListener('click', () => appendToPage(rulesElement));

export default greetingElement;
