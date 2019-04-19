const hamburgerMenu = document.getElementById("hamburger-menu");
const menu = document.getElementById("menu");
const closeAd = document.querySelector(".close");
const ad = document.querySelector(".ad__container");
const container = document.getElementById("container");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("click");
  menu.classList.toggle("show-menu");
  container.style.position =
    container.style.position === "fixed" ? "static" : "fixed";
});

closeAd.addEventListener("click", () => (ad.style.display = "none"));
