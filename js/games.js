import getGameOne from './gameOne';
import getGameTwo from './gameTwo';
import getGameThree from './gameThree';
import getGameLast from './gameLast';


const game = [
  {
    id: 'level0',
    question: 'Угадай, фото или рисунок?',
    answers: [
      {
        labels: [
          {type: 'photo', text: 'Фото'},
          {type: 'paint', text: 'Рисунок'},
        ],
        picture: 'http://placehold.it/705x455',
        count: 1
      }
    ]
  },
  {
    id: 'level1',
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
  },
  {
    id: 'level2',
    question: 'Найдите рисунок среди изображений',
    answers: [
      {
        picture: 'http://placehold.it/304x455',
        count: 1
      },
      {
        picture: 'http://placehold.it/304x455',
        count: 2
      },
      {
        picture: 'http://placehold.it/304x455',
        count: 3
      }
    ]
  },
  {
    id: 'level3',
    question: 'Угадай, фото или рисунок?',
    answers: [
      {
        labels: [
          {type: 'photo', text: 'Фото'},
          {type: 'paint', text: 'Рисунок'},
        ],
        picture: 'http://placehold.it/705x455',
        count: 1
      }
    ]
  },
  {
    id: 'level4',
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
  },
  {
    id: 'level5',
    question: 'Найдите рисунок среди изображений',
    answers: [
      {
        picture: 'http://placehold.it/304x455',
        count: 1
      },
      {
        picture: 'http://placehold.it/304x455',
        count: 2
      },
      {
        picture: 'http://placehold.it/304x455',
        count: 3
      }
    ]
  },
  {
    id: 'level6',
    question: 'Угадай, фото или рисунок?',
    answers: [
      {
        labels: [
          {type: 'photo', text: 'Фото'},
          {type: 'paint', text: 'Рисунок'},
        ],
        picture: 'http://placehold.it/705x455',
        count: 1
      }
    ]
  },
  {
    id: 'level7',
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
  },
  {
    id: 'level8',
    question: 'Найдите рисунок среди изображений',
    answers: [
      {
        picture: 'http://placehold.it/304x455',
        count: 1
      },
      {
        picture: 'http://placehold.it/304x455',
        count: 2
      },
      {
        picture: 'http://placehold.it/304x455',
        count: 3
      }
    ]
  },
  {
    id: 'level9',
    question: 'Угадай, фото или рисунок?',
    answers: [
      {
        labels: [
          {type: 'photo', text: 'Фото'},
          {type: 'paint', text: 'Рисунок'},
        ],
        picture: 'http://placehold.it/705x455',
        count: 1
      }
    ]
  },
  {
    id: 'level10',
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
  },
];

let currentQuestionNum = 0;

export default () => {
  const makeQuestion = (data) => {
    let element;

    switch (data.id) {

      case 'level0':
        element = getGameOne(data);
        break;
      case 'level1':
        element = getGameTwo(data);
        break;
      case 'level2':
        element = getGameThree(data);
        break;
      case 'level3':
        element = getGameOne(data);
        break;
      case 'level4':
        element = getGameTwo(data);
        break;
      case 'level5':
        element = getGameThree(data);
        break;
      case 'level6':
        element = getGameOne(data);
        break;
      case 'level7':
        element = getGameTwo(data);
        break;
      case 'level8':
        element = getGameThree(data);
        break;
      case 'level9':
        element = getGameLast(data);
        break;
    }

    return element;
  };


  const currentQuest = game[currentQuestionNum++];
  const template = makeQuestion(currentQuest);
  return template;
};
