function createGame() {
  const newGame = document.createElement("div");
  newGame.className = "game";
  newGame.style.width = "600px";
  newGame.style.height = "200px";
  newGame.style.border = "1px solid black";
  newGame.style.margin = "auto";

  document.body.appendChild(newGame);
}

function createDino() {
  const newDino = document.createElement("div");
  const newGame = document.getElementsByClassName("game")[0];

  newDino.id = "dino";
  newDino.style.width = "50px";
  newDino.style.height = "50px";
  newDino.style.backgroundImage = "url(img/trex.png)";
  newDino.style.backgroundSize = "50px 50px";
  newDino.style.position = "relative";
  newDino.style.top = "150px";
  newDino.style.left = "0px";

  newGame.appendChild(newDino);
}

function createCactus() {
  const newCactus = document.createElement("div");
  const newGame = document.getElementsByClassName("game")[0];

  newCactus.id = "cactus";
  newCactus.style.width = "20px";
  newCactus.style.height = "40px";
  newCactus.style.position = "relative";
  newCactus.style.top = "110px";
  newCactus.style.left = "580px";
  newCactus.style.backgroundImage = "url(img/cactus.png)";
  newCactus.style.backgroundSize = "20px 40px";
  //   newCactus.style.animation = "block 1.5s infinite linear";

  newGame.appendChild(newCactus);
}

function createScore() {
  const newScore = document.createElement("div");
  const newGame = document.getElementsByClassName("game")[0];

  newScore.id = "score";
  newScore.style.width = "100px";
  newScore.style.height = "20px";
  newScore.style.backgroundSize = "100px 20px";
  newScore.style.position = "relative";
  newScore.style.top = "-80px";
  newScore.style.left = "500px";

  newGame.appendChild(newScore);
  //   document.getElementById("score").innerHTML = "Score:";
}

function createScoreValue() {
  const newScoreElement = document.createElement("span");
  const newScoreId = document.getElementById("score");

  newScoreElement.id = "scoreValue";
  newScoreId.appendChild(newScoreElement);
  document.getElementById("scoreValue").innerHTML = "000000";
}

createGame();
createDino();
createCactus();
createScore();
createScoreValue();

function updateScore() {
  const scoreElement = document.getElementById("scoreValue");
  let score = 0;

  setInterval(() => {
    score += 10;
    scoreElement.innerHTML = `Score: ${score.toString().padStart(6, "0")}`;
  }, 1000);
}

updateScore();
