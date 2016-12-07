export default (stat) => {

  if (!stat) {
    throw new RangeError('This function should append one argument');
  }

  const statistics = stat;

  const stats =
    `<div class="stats">
      <ul class="stats">
      ${statistics.map((it) =>
        `<li class="stats__result stats__result--${it}"></li>`
      ).join('')}
      </ul>
    </div>`;

  return stats;
};
