function sayYes() {
  document.getElementById("message").innerText = "Thanks my love 💕";

  for (let i = 0; i < 20; i++) {
    let heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    heart.style.fontSize = "24px";
    heart.style.animation = "floatUp 2s linear forwards";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }
}

function moveNo() {
  const noBtn = document.querySelector(".no");

  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * (window.innerWidth - 100) + "px";
  noBtn.style.top = Math.random() * (window.innerHeight - 50) + "px";
}
