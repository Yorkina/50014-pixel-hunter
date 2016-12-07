import live from '../helpers/live';

const BONUSES_TYPE = {
  FAST: 'fast',
  HEART: 'heart',
  SLOW: 'slow'
};

const BONUSES = {
  [BONUSES_TYPE.FAST]: {
    title: 'Бонус за скорость:',
    points: 50,
    type: 'fast'
  },
  [BONUSES_TYPE.HEART]: {
    title: 'Бонус за жизни:',
    points: 100,
    type: 'heart'
  },
  [BONUSES_TYPE.SLOW]: {
    title: 'Штраф за медлительность:',
    points: -100,
    type: 'slow'
  }
};

class Verdict {

  constructor() {
    this._value = [];
  }

  get value() {
    return this._value;
  }

  get accumulate() {
    return this._accumulate;
  }

  getLivesFromData() {
    return live.valueArray;
  }

  _ensureBonus(item, type) {
    let bonus = item.bonuses.find((it) => it.type === type);
    if (!bonus) {
      bonus = {count: 0, type: type};
    }

    return bonus;
  }

  getStates(item) {
    const state = [item.isCorrect ? 'correct' : 'wrong'];
    const bonuseStates = item.bonuses.map((it) => it.type);
    return state.concat(bonuseStates);
  }

  countBonuses(item) {
    let fast = 0;
    let slow = 0;
    let heart = 0;

    item.bonuses.forEach((bonuse) => {
      switch (bonuse.type) {
        case BONUSES_TYPE.FAST: fast = bonuse.count; break;
        case BONUSES_TYPE.SLOW: slow = bonuse.count; break;
        case BONUSES_TYPE.HEART: heart = bonuse.count; break;
        default: break;
      }
    });
    return {fast, slow, heart};
  }

  getBonus(type) {
    return BONUSES[type] || {};
  }

  append(source) {
    const time = parseInt(source.time, 10);
    const isCorrect = source.isCorrect;
    const item = {
      bonuses: [],
      isCorrect
    };

    if (isCorrect && time > 10) {
      const bonus = this._ensureBonus(item, BONUSES_TYPE.FAST);
      bonus.count += 1;
      item.bonuses.push(bonus);
    }

    if (isCorrect && time < 20) {
      const bonus = this._ensureBonus(item, BONUSES_TYPE.SLOW);
      bonus.count += 1;
      item.bonuses.push(bonus);
    }

    if (isCorrect) {
      const lives = this.getLivesFromData();

      const bonus = this._ensureBonus(item, BONUSES_TYPE.HEART);
      lives.forEach(() => {
        bonus.count += 1;
      });

      item.bonuses.push(bonus);
    }

    this.value.push(item);
  }
}

export default new Verdict();

