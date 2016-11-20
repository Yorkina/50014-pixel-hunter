import {compile} from './compile';
import {element as greetingElement} from './greeting';
import {appendToPage} from './appendToPage';

const template =
    `<div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
        Sparnaay.</p>
    </div>`;

const element = compile(template);
const nextBtn = element.querySelector('.intro__asterisk');
nextBtn.addEventListener('click', nextHandler);

function nextHandler() {
  appendToPage(greetingElement);
}

export {element};
