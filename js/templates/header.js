export default (data) => {

  if (data < 0 || data > 3) {
    throw new RangeError('Lives coudnt be negative or more than 3');
  }

  if (!data) {
    throw new RangeError('This function should append one argument');
  }

  const defaultLives = 3;

  const drawLives = (lives) => {
    const diff = defaultLives - lives;
    let livesArray = Array.from([...Array(defaultLives)]);

    return livesArray.map((life, i) => `
      <img src="img/heart__${i < diff ? 'empty' : 'full'}.svg"
      class="game__heart" alt="Life" width="32" height="32">`);
  };

  const drawHeader = () =>
    `<header class="header">
        <div class="header__back">
          <span class="back">
            <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
            <img src="img/logo_small.png" width="101" height="44">
          </span>
        </div>
        <h1 class="game__timer">30</h1>
        <div class="game__lives">
          ${drawLives(data).join('')}
        </div>
      </header>`;

  return drawHeader();
};
