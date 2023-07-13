function createGame() {
  const newGame = document.getElementsByClassName("game")[0];
  newGame.style.width = "600px";
  newGame.style.height = "200px";
  newGame.style.border = "1px solid black";
  newGame.style.margin = "auto";
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
  const scoreDiv = document.getElementById("score");

  newCactus.id = "cactus";
  newCactus.style.width = "20px";
  newCactus.style.height = "40px";
  newCactus.style.position = "relative";
  newCactus.style.top = "110px";
  newCactus.style.left = "580px";
  newCactus.style.backgroundImage = "url(img/cactus.png)";
  newCactus.style.backgroundSize = "20px 40px";

  const animationDuration = Math.floor(Math.random() * 750) + 750;
  newCactus.style.animation = `block ${animationDuration}ms linear`;

  newGame.insertBefore(newCactus, scoreDiv);

  newCactus.addEventListener("animationend", function () {
    newCactus.remove();

    createCactus();
  });
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
}

function createScoreValue() {
  const newScoreElement = document.createElement("span");
  const newScoreId = document.getElementById("score");

  newScoreElement.id = "scoreValue";
  newScoreId.appendChild(newScoreElement);
  document.getElementById("scoreValue").innerHTML = "000000";
}

function createLife() {
  const newLife = document.createElement("div");
  const newGame = document.getElementsByClassName("game")[0];

  newLife.id = "life";
  newLife.style.width = "100px";
  newLife.style.height = "20px";
  newLife.style.backgroundSize = "100px 20px";
  newLife.style.position = "relative";
  newLife.style.top = "-100px";
  newLife.style.left = "250px";

  newGame.appendChild(newLife);
}

function createLifeValue() {
  const newLifeElement = document.createElement("span");
  const newLifeId = document.getElementById("life");

  newLifeElement.id = "lifeValue";
  newLifeId.appendChild(newLifeElement);
  document.getElementById("lifeValue").innerHTML = "Life: 3";
}

function updateScore() {
  const scoreElement = document.getElementById("scoreValue");
  let score = 0;

  setInterval(() => {
    score += 10;
    scoreElement.innerHTML = `Score: ${score.toString().padStart(6, "0")}`;
  }, 1000);
}

function createGameElements() {
  createGame();
  createDino();
  createCactus();
  createScore();
  createScoreValue();
  updateScore();
  createLife();
  createLifeValue();

  // Jump Function
  const dino = document.getElementById("dino");

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

  // Start the continuous overlap checking
  requestAnimationFrame(checkOverlap);

  // Helper function to check for overlap
  function isOverlap(rect1, rect2) {
    return (
      rect1.left < rect2.right &&
      rect1.right > rect2.left &&
      rect1.top < rect2.bottom &&
      rect1.bottom > rect2.top
    );
  }

  const cactus = document.getElementById("cactus");
  function checkOverlap() {
    // Get the elements or their positions
    const object1 = document.getElementById("dino");
    const object2 = document.getElementById("cactus");
    const rect1 = object1.getBoundingClientRect();
    const rect2 = object2.getBoundingClientRect();

    const lifeElement = document.getElementById("lifeValue");

    // Check for overlap only if the buffer is not active
    if (!isBufferActive && isOverlap(rect1, rect2)) {
      life -= 1;
      lifeElement.innerHTML = `Life: ${life}`;

      // Activate the buffer and start the timer
      isBufferActive = true;
      setTimeout(() => {
        isBufferActive = false;
      }, bufferDuration);
    }
    // Check end game
    if (life === 0) {
      endGame();
    } else {
      requestAnimationFrame(checkOverlap);
    }
  }

  // End Game Function
  function endGame() {
    // Get your score
    const yourScore = document.getElementById("yourScore");
    const scoreElement = document.getElementById("scoreValue");
    yourScore.innerHTML = scoreElement.innerHTML;

    const gameContainer = document.getElementsByClassName("game")[0];
    gameContainer.innerHTML = "";
    gameContainer.style.display = "none";

    const gameOverDiv = document.getElementById("gameOver");
    gameOverDiv.style.display = "block";
  }
}

// Restart Game Function
function restartGame() {
  // Reset variables
  life = 3;
  isBufferActive = false;
  const yourScore = document.getElementById("yourScore");
  yourScore.innerHTML = "";

  // Reset game elements
  const gameContainer = document.getElementsByClassName("game")[0];
  gameContainer.style.display = "block";

  // Hide game over banner

  gameOverBanner.style.display = "none";

  // Initialize game
  createGameElements();
}

// Get the start banner element
const startBanner = document.getElementById("start");
let life = 3;
let isBufferActive = false;
const bufferDuration = 3000; // 3 seconds

const gameOverBanner = document.getElementById("gameOver");

// Add event listener for keydown event for Game Start
document.addEventListener("keydown", function (event) {
  // Check if the pressed key is the Enter key
  if (event.code === "Enter") {
    // Hide or remove the start banner element
    startBanner.style.display = "none"; // or startBanner.remove();
    if (gameOverBanner.style.display === "block") {
      restartGame();
    } else {
      // Load Game Elements
      createGameElements();
    }
  }
});
