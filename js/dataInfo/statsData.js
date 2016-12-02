const data = {
  total: [
    {
      bonuses: [
        {
          title: 'Бонус за скорость:',
          extra: 1,
          points: 50,
          total: 50,
          type: 'fast'
        },
        {
          title: 'Бонус за жизни:',
          extra: 2,
          points: 50,
          total: 100,
          type: 'heart'
        },
        {
          title: 'Штраф за медлительность:',
          extra: 2,
          points: 50,
          total: -100,
          type: 'slow'
        }
      ],
      results: [
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
      count: 1,
      cost_point: 100,
      cost_total: 900,
      result_total: 950
    },
    {
      results: [
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
      count: 2,
      cost_point: 100,
      cost_total: 900,
      result_total: 950
    },
    {
      bonuses: [
        {
          title: 'Бонус за скорость:',
          extra: 2,
          points: 50,
          total: 50,
          type: 'fast'
        }
      ],
      results: [
        'wrong',
        'slow',
        'fast',
        'correct',
        'wrong',
        'unknown',
        'slow',
        'wrong',
        'fast',
        'wrong'
      ],
      count: 3,
      cost_point: 100,
      cost_total: 900,
      result_total: 950
    }
  ],
  title: 'Победа!'
};

export default data;
