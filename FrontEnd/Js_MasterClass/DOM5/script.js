const main = document.querySelector("main");
const button = document.querySelector("button");
const timer = document.querySelector("#timer");
const overlay = document.querySelector(".overlay");
const scoree = document.querySelector("#score");
const result = document.querySelector("#result");

const box = document.createElement("div");
box.classList.add("box");

let time = 0;
let score = 0;
let interval;

button.addEventListener("click", () => {
  clearInterval(interval);
  randonBoxPos();

  interval = setInterval(() => {
    randonBoxPos();
    time += 1;
    timer.textContent = time;
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
    gameOver();
  }, 10000);
});

const randonBoxPos = () => {
  box.style.backgroundColor = randomColor();
  box.style.display = "block";
  main.append(box);

  let mainH = main.clientHeight - box.offsetHeight;
  let mainW = main.clientWidth - box.offsetWidth;

  const rY = Math.random() * mainH;
  const rX = Math.random() * mainW;

  box.style.top = `${rY}px`;
  box.style.left = `${rX}px`;
};

const randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
};

box.addEventListener("click" ,() => {
    score += 1;
    scoree.textContent = score;
    box.style.display = "none";
});

const gameOver = () => {
    overlay.style.display = "flex";
    result.textContent = `Score - ${score}`;
    setTimeout(() => {
        overlay.style.display = "none";
        time = 0;
        score = 0;
        timer.textContent = time;
        scoree.textContent = score;
        box.style.display = "none";
    }, 3000);
}