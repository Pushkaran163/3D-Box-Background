// Optional: Add any interactive behavior here, such as stopping and starting the animation or changing colors
document.addEventListener("DOMContentLoaded", () => {
    const scene = document.querySelector(".scene");

    scene.addEventListener("mouseenter", () => {
        scene.style.animationPlayState = "paused";
    });

    scene.addEventListener("mouseleave", () => {
        scene.style.animationPlayState = "running";
    });
});