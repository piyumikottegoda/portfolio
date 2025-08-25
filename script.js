// Animate skill bars when visible
const bars = document.querySelectorAll('.skill-bar .bar span');
window.addEventListener('scroll', () => {
  bars.forEach(bar => {
    let skillValue = bar.getAttribute('data-skill');
    let pos = bar.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      bar.style.width = skillValue + "%";
    }
  });
});

// Animate Professional Skills Circles
document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll(".circle");
  circles.forEach(circle => {
    let percent = circle.getAttribute("data-percent");
    let angle = (percent / 100) * 360;
    circle.style.background = `conic-gradient(cyan ${angle}deg, #333 ${angle}deg)`;
  });
});
