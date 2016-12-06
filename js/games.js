import getGameOne from './gameOne';
import getGameTwo from './gameTwo';
import getGameThree from './gameThree';
import game from './dataInfo/gameData';
import verdict from './dataInfo/verdict';
import getStats from './stats';


let currentQuestionNum = 0;

export default () => {
  const results = verdict.results;
  const makeQuestion = (data) => {
    let element;

    switch (data.id) {
      case 'level0':
      case 'level3':
      case 'level6':
      case 'level9':
        element = getGameOne(data, results);
        break;
      case 'level1':
      case 'level4':
      case 'level7':
        element = getGameTwo(data, results);
        break;
      case 'level2':
      case 'level5':
      case 'level8':
        element = getGameThree(data, results);
        break;
      default:
        element = getStats();
    }

    return element;
  };


  const currentQuest = game[currentQuestionNum++];
  const template = makeQuestion(currentQuest);
  return template;
};
