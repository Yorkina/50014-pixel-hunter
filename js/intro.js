import compile from './compile';
import greetingElement from './greeting';
import appendToPage from './appendToPage';

const template =
    `<div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
        Sparnaay.</p>
    </div>`;

const introElement = compile(template);
const nextBtn = introElement.querySelector('.intro__asterisk');

nextBtn.addEventListener('click', () => appendToPage(greetingElement));

export default introElement;
