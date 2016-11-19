import {intro} from './intro';
import {greeting} from './greeting';
import {rules} from './rules';
import {gameOne} from './gameOne';
import {gameTwo} from './gameTwo';
import {gameThree} from './gameThree';
import {stats} from './stats';

(function () {
  let loadTemplate = (templateName, templateElement) => {
    let node = document.createElement('span');
    let template = templateElement;
    let content = template.content ? template.content : template;
    node.appendChild(content);
    return node.cloneNode(true);
  };


  // Rules
  let rulesElement = loadTemplate('rules', rules);
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
    loadTemplate('intro', intro),
    loadTemplate('greeting', greeting),
    rulesElement,
    loadTemplate('game-1', gameOne),
    loadTemplate('game-2', gameTwo),
    loadTemplate('game-3', gameThree),
    loadTemplate('stats', stats)
  ];
  let current = -1;

  let select = (index) => {
    current = index;
    mainElement.innerHTML = '';
    mainElement.appendChild(slides[index]);
  };

  document.querySelector('.next').onclick = (e) => {
    e.preventDefault();
    if (current < slides.length - 1) {
      select(current + 1);
    } else {
      return;
    }
  };

  document.querySelector('.prev').onclick = (e) => {
    e.preventDefault();
    if (current > 0) {
      select(current - 1);
    } else {
      return;
    }
  };

  select(0);
})();
