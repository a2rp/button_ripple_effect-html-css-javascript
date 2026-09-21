const button = document.querySelector(".ripple-button");
const ripple = button.querySelector(".ripple");

function moveRipple(event) {
    const rect = button.getBoundingClientRect();
    ripple.style.left = `${event.clientX - rect.left}px`;
    ripple.style.top = `${event.clientY - rect.top}px`;
}

button.addEventListener("pointerenter", moveRipple);
button.addEventListener("pointermove", moveRipple);
button.addEventListener("pointerdown", moveRipple);
