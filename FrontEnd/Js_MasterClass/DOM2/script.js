const main = document.querySelector("main");
const div = document.querySelector("div");

const box1 = document.createElement("div");
const box2 = document.createElement("div");
const box3 = document.createElement("div");

box1.classList.add("box");
box2.classList.add("box");
box3.classList.add("box");

main.append(box1, box2, box3);