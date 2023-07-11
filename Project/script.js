// https://www.youtube.com/watch?v=i7nIutSLvdU
// https://www.youtube.com/watch?v=dQ6lYd6dyTI
// https://www.includehelp.com/code-snippets/move-object-with-arrow-keys-using-javascript-function.aspx
// https://www.youtube.com/watch?v=Pg1UqzZ5NQM
// https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
// https://www.includehelp.com/code-snippets/move-object-with-arrow-keys-using-javascript-function.aspx
// https://bobbyhadz.com/blog/javascript-check-if-two-elements-overlap
// https://dev.bennage.com/blog/2013/01/11/game-dev-02/

const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const score = document.getElementById("score");
const scoreElement = document.getElementById("scoreValue");

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 500);
  }
}

//To be reviewed
// let leftValue = 0;

// function walkLeft() {
//   if (!dino.classList.contains("walk-left")) {
//     dino.classList.remove("walk-right");
//     dino.classList.add("walk-left");
//     // const currentLeft = parseInt(
//     //   window.getComputedStyle(dino).getPropertyValue("left")
//     // );
//     if (leftValue >= 0 && leftValue <= 250) {
//       leftValue = leftValue - 50;
//       dino.style.left = leftValue + "px";
//     }
//     // dino.style.left = parseInt(dino.style.left) + 5 + "px";
//     // console.log(dino.style.left);
//   }
// }

// To be reviewed
// function walkRight() {
//   if (!dino.classList.contains("walk-right")) {
//     dino.classList.remove("walk-left");
//     dino.classList.add("walk-right");
//     // const currentLeft = parseInt(
//     //   window.getComputedStyle(dino).getPropertyValue("left")
//     // );
//     // dino.style.left = currentLeft + 50 + "px";
//     if (leftValue >= 0 && leftValue <= 250) {
//       leftValue = leftValue + 50;
//       dino.style.left = leftValue + "px";
//     }
//     // dino.style.left = parseInt(dino.style.left) - 5 + "px";
//   }
// }

//To be reviewed
// function stopWalking() {
//   dino.classList.remove("walk-left");
//   dino.classList.remove("walk-right");
// }

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    jump();
  }
  // if (event.code === "ArrowLeft") {
  //   walkLeft();
  // }
  // if (event.code === "ArrowRight") {
  //   walkRight();
  // }
});

// Old collision
// document.addEventListener("keyup", function (event) {
//   if (event.code === "ArrowLeft" || event.code === "ArrowRight") {
//     stopWalking();
//   }
// });

// let isAlive = setInterval(function () {
//   let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
//   let cactusLeft = parseInt(
//     window.getComputedStyle(cactus).getPropertyValue("left")
//   );

//   if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
//     console.log("collision");
//     //alert("Game Over!")
//   }
// }, 10);

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

//Score Function based on time
//https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock
// https://linuxhint.com/javascript-count-up-timer/#:~:text=Approach%201%3A%20Implement%20a%20Count,the%20nearest%20down%20integer%20value.
function updateScore() {
  let score = 0;

  setInterval(() => {
    score += 10;
    scoreElement.innerHTML = `Score: ${score.toString().padStart(6, "0")}`;
  }, 1000);
}

updateScore();

function myFunction() {
  const x = document.getElementById("game");
  if ((x.style.display = "none")) {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
