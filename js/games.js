import getGameOne from './gameOne';
import getGameTwo from './gameTwo';
import getGameThree from './gameThree';
import game from './dataInfo/gameData';
import verdict from './helpers/verdict';
import getStats from './stats';


let currentQuestionNum = 0;

export default () => {
  const results = verdict.value;
  const answers = results.map((it) => {
    return verdict.getStates(it);
  });

  const deleteExtraResults = (it) => {
    return it !== 'heart';
  };

  const total = answers.reduce((sequence, it) => sequence.concat(it), []);
  const filtered = total.filter(deleteExtraResults);

  const makeQuestion = (data) => {
    let element;

    switch (data.id) {
      case 'level0':
      case 'level3':
      case 'level6':
      case 'level9':
        element = getGameOne(data, filtered);
        break;
      case 'level1':
      case 'level4':
      case 'level7':
        element = getGameTwo(data, filtered);
        break;
      case 'level2':
      case 'level5':
      case 'level8':
        element = getGameThree(data, filtered);
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
