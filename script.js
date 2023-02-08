let $startButton = document.querySelector("#start");
let $gamePlace = document.querySelector("#game");
let $timeHeader = document.querySelector("#time-header");
let $gameTime = document.querySelector("#game-time");
let $time = document.querySelector("#time");

let $gameResult = document.querySelector("#result-header");
let $result = document.querySelector("#result");
let counter = 0;
$startButton.addEventListener("click", startGame);

function startGame() {
  $startButton.classList.add("hide");
  $gamePlace.style.backgroundColor = "white";
  $time.textContent = $gameTime.value;
  $timeHeader.classList.remove("hide");
  $gameResult.classList.add("hide");

  createBox();
  timer();
}

function createBox() {
  $gamePlace.innerHTML = "";
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  let box = document.createElement("div");
  const size = getRandom(30, 100);
  const left = getRandom(0, 300 - size);
  const top = getRandom(0, 300 - size);

  box.style.width = box.style.height = size + "px";
  box.style.backgroundColor = "#" + randomColor;

  // random place
  box.style.position = "absolute";
  box.style.top = top + "px";
  box.style.left = left + "px";
  box.style.border = "1px solid black";
  box.setAttribute("data-box", "true");

  $gamePlace.insertAdjacentElement("afterbegin", box);
}

$gamePlace.addEventListener("click", clicked);

function clicked(event) {
  if (event.target.dataset.box) {
    createBox();
    counter++;
  }
}

function getRandom(min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
}

const timer = () => {
  let interval = setInterval(function () {
    $time.textContent = ($time.textContent - 0.1).toFixed(1);
    if ($time.textContent == 0.0) {
      clearInterval(interval);
      endGame();
      results();
    }
  }, 100);
};

function results() {
  $timeHeader.classList.add("hide");
  $gameResult.classList.remove("hide");
  $result.textContent = counter;
  counter = 0;
}

function endGame() {
  $gamePlace.innerHTML = "";
  $startButton.classList.remove("hide");
  $gamePlace.style.backgroundColor = "#ccc";
}
