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
    // dino.style.left = parseInt(dino.style.left) - 50 + "px";
    let x = parseInt(dino.style.left);
    console.log(x);
  }
}

function walkRight() {
  if (!dino.classList.contains("walk-right")) {
    dino.classList.remove("walk-left");
    dino.classList.add("walk-right");
    // dino.style.left = parseInt(dino.style.left) + 50 + "px";
    let x = window.getComputedStyle(dino, null).getPropertyValue(property);
    console.log(x);
  }
}

function stopWalking() {
  dino.classList.remove("walk-left");
  dino.classList.remove("walk-right");
  let x = dino.style.left;
  console.log(x);
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
