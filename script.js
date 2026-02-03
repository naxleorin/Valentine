let yesBtn = document.getElementById("yes");
let noBtn = document.getElementById("no");

let yesSize = 20;

noBtn.addEventListener("click", () => {
  yesSize += 10;
  yesBtn.style.fontSize = yesSize + "px";

  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "%";
  noBtn.style.top = Math.random() * 80 + "%";
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = "<h1>YAAAY 💕🥰</h1><p>Rendez-vous le 14 😘</p>";
});