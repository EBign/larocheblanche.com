const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.addEventListener("click", () => {
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  menu.classList.toggle('open');
  burger.textContent = burger.textContent === '☰' ? '✕' : '☰';
});


document.querySelectorAll(".submenu-toggle").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const parent = toggle.closest(".has-submenu");
    parent.classList.toggle("open");
  });
});
