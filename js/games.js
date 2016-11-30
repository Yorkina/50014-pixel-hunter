import getGameOne from './gameOne';
import getGameTwo from './gameTwo';
import getGameThree from './gameThree';
import getGameLast from './gameLast';


const game = [
  {
    id: 'level0',
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
