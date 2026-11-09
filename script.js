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

function setNavigationOpen(open) {
    siteNavigation.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
}

menuToggle.addEventListener("click", () => {
    setNavigationOpen(!siteNavigation.classList.contains("is-open"));
});

siteNavigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setNavigationOpen(false));
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && siteNavigation.classList.contains("is-open")) {
        setNavigationOpen(false);
        menuToggle.focus();
    }
});

function updateTopButton() {
    const visible = window.scrollY > 320;
    topButton.classList.toggle("is-visible", visible);
    topButton.tabIndex = visible ? 0 : -1;
    topButton.setAttribute("aria-hidden", String(!visible));
}

window.addEventListener("scroll", updateTopButton, { passive: true });
updateTopButton();

topButton.addEventListener("click", () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
});
