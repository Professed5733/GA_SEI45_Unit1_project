// https://www.youtube.com/watch?v=i7nIutSLvdU
// https://www.youtube.com/watch?v=dQ6lYd6dyTI
// https://www.includehelp.com/code-snippets/move-object-with-arrow-keys-using-javascript-function.aspx
// https://www.youtube.com/watch?v=Pg1UqzZ5NQM

const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}

function walkLeft() {
  if (!dino.classList.contains("walk-left")) {
    dino.classList.remove("walk-right");
    dino.classList.add("walk-left");
    const currentLeft = parseInt(
      window.getComputedStyle(dino).getPropertyValue("left")
    );
    dino.style.left = currentLeft - 50 + "px";
  }
}

function walkRight() {
  if (!dino.classList.contains("walk-right")) {
    dino.classList.remove("walk-left");
    dino.classList.add("walk-right");
    const currentLeft = parseInt(
      window.getComputedStyle(dino).getPropertyValue("left")
    );
    dino.style.left = currentLeft + 50 + "px";
  }
}

function stopWalking() {
  dino.classList.remove("walk-left");
  dino.classList.remove("walk-right");
}

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    jump();
  }
  if (event.code === "ArrowLeft") {
    walkLeft();
  }
  if (event.code === "ArrowRight") {
    walkRight();
  }
});

document.addEventListener("keyup", function (event) {
  if (event.code === "ArrowLeft" || event.code === "ArrowRight") {
    stopWalking();
  }
});

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    console.log("collision");
    //alert("Game Over!")
  }
}, 10);
