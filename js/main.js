import {element as introElement} from './intro';
import {element as greetingElement} from './greeting';
import {element as rulesElement} from './rules';
import {element as gameOneElement} from './gameOne';
import {element as gameTwoElement} from './gameTwo';
import {element as gameThreeElement} from './gameThree';
import {element as statsElement} from './stats';

(function () {

  // Rules
  let rulesSubmit = rulesElement.querySelector('.rules__button');

  rulesElement.querySelector('.rules__input').oninput = function () {
    if (this.value) {
      rulesSubmit.removeAttribute('disabled');
    } else {
      rulesSubmit.setAttribute('disabled', '');
    }
  };

  // Slides changer

  let mainElement = document.getElementById('main');

  let switcher = document.createElement('div');
  switcher.innerHTML = '' +
    '<span class="prev"><img src="img/arrow_left.svg" alt="Left" width="50" height="50"></span>   ' +
    '<span class="next"><img src="img/arrow_right.svg" alt="Right" width="50" height="50"></span>';
  switcher.style.cssText = 'text-align: center';
  mainElement.after(switcher);

  let slides = [
    introElement,
    greetingElement,
    rulesElement,
    gameOneElement,
    gameTwoElement,
    gameThreeElement,
    statsElement
  ];
  let current = -1;

  let select = (index) => {
    current = index;
    mainElement.innerHTML = '';
    mainElement.appendChild(slides[index]);
  };

  document.querySelector('.next').onclick = (e) => {
    if (current < slides.length - 1) {
      select(current + 1);
    }
  };

  document.querySelector('.prev').onclick = (e) => {
    if (current > 0) {
      select(current - 1);
    }
  };

  select(0);
})();
