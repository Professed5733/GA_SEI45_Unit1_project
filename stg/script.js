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

  newDino.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
      jump(newDino);
    }
  });
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
  newCactus.style.animation = "block 1.5s infinite linear";

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

function updateScore() {
  const scoreElement = document.getElementById("scoreValue");
  let score = 0;

  setInterval(() => {
    score += 10;
    scoreElement.innerHTML = `Score: ${score.toString().padStart(6, "0")}`;
  }, 1000);
}
const start = document.getElementsByClassName("start");

function startGame() {
  if (!start.classList.contains("start")) {
    start.classList.add("start");
    start.style.display = "none";
  }
}

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    startGame();
  }
});

// createGame();
// createDino();
// createCactus();
// createScore();
// createScoreValue();
// updateScore();

const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const score = document.getElementById("score");

function jump(dino) {
  if (!dino.classList.contains("jump")) {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 500);
  }
}

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    jump(dino);
  }
});

function checkOverlap() {
  // Get the elements or their positions
  const object1 = document.getElementById("dino");
  const object2 = document.getElementById("cactus");
  const rect1 = object1.getBoundingClientRect();
  const rect2 = object2.getBoundingClientRect();

  // Check for overlap
  if (
    rect1.left < rect2.right &&
    rect1.right > rect2.left &&
    rect1.top < rect2.bottom &&
    rect1.bottom > rect2.top
  ) {
    console.log("Collision");
    // Perform collision-related actions here
  }

  // Call the function again on the next frame
  requestAnimationFrame(checkOverlap);
}

// Start the continuous overlap checking
requestAnimationFrame(checkOverlap);
