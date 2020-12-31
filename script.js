let mario = document.getElementById("mario");
let block = document.getElementById("block");
let counter = 0;
function jump() {
  if (mario.classList == "animate") {
    return;
  }
  mario.classList.add("animate");
  setTimeout(function () {
    mario.classList.remove("animate");
  }, 300);
}
let checkDead = setInterval(function () {
  let characterTop = parseInt(
    window.getComputedStyle(mario).getPropertyValue("top")
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
    block.style.animation = "none";
    // alert("Game Over. score: " + Math.floor(counter / 100));
    counter = 0;
    block.style.animation = "block 1s infinite linear";
  } else {
    counter++;
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
  }
}, 10);
