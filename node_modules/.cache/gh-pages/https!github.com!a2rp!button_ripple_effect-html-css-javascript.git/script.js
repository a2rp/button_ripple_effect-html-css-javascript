const button = document.querySelector(".ripple-button");
document.querySelector("#copyright-year").textContent = new Date().getFullYear();
const ripple = button.querySelector(".ripple");

function moveRipple(event) {
    const rect = button.getBoundingClientRect();
    ripple.style.left = `${event.clientX - rect.left}px`;
    ripple.style.top = `${event.clientY - rect.top}px`;
}

button.addEventListener("pointerenter", moveRipple);
button.addEventListener("pointermove", moveRipple);
button.addEventListener("pointerdown", moveRipple);

const menuToggle = document.querySelector("#menu-toggle");
const siteNavigation = document.querySelector("#site-navigation");
const topButton = document.querySelector("#to-top");

menuToggle.addEventListener("click", () => {
    const open = siteNavigation.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
});

siteNavigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        siteNavigation.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});

window.addEventListener("scroll", () => {
    topButton.classList.toggle("is-visible", window.scrollY > 320);
}, { passive: true });

topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
