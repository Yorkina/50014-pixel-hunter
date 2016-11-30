import getGameOne from './gameOne';
import getGameTwo from './gameTwo';
import getGameThree from './gameThree';
import game from './dataInfo/gameData';

let currentQuestionNum = 0;

export default () => {
  const makeQuestion = (data) => {
    let element;

    switch (data.id) {
      case 'level0':
      case 'level3':
      case 'level6':
      case 'level9':
        element = getGameOne(data);
        break;
      case 'level1':
      case 'level4':
      case 'level7':
        element = getGameTwo(data);
        break;
      case 'level2':
      case 'level5':
      case 'level8':
        element = getGameThree(data);
        break;
    }

    return element;
  };


  const currentQuest = game[currentQuestionNum++];
  const template = makeQuestion(currentQuest);
  return template;
};
