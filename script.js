// Simple animation for fade-in effect
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("section").forEach(sec => {
        sec.style.opacity = 0;
        setTimeout(() => {
            sec.style.transition = "opacity 1s ease-in-out";
            sec.style.opacity = 1;
        }, 200);
    });
});
