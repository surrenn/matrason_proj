const hamburger = document.querySelector(".header-mobile__hamburger");
const menuCloser = document.querySelector(".mobile-menu__closer");
const menu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  menu.classList.add("mobile-menu_active");

  document.querySelectorAll(".mobile-dropdown__item").forEach((item) => {
    item.addEventListener("click", () => {
      menu.classList.remove("mobile-menu_active");
    });
  });
});

menuCloser.addEventListener("click", () => {
  menu.classList.remove("mobile-menu_active");
});
