export default (stat) => {


  let statistics = stat;

  if (!statistics) {
    statistics = [];
  }
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
