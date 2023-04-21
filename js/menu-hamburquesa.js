const d = document;
const $navUl = d.querySelector(".nav__ul");
const $btnOpen = d.querySelector(".btn__open");
const $btnClose = d.querySelector(".btn__close");
const $backgroundModal = d.querySelector(".baground__modal");
const $html = d.querySelector("html");

const habrirMenu = () => {
  d.addEventListener("click", (e) => {
    if (e.target.matches(".btn__open")) {
      $navUl.classList.add("is-active");
      $backgroundModal.style.display = "block";
      $html.style.overflowY = "hidden";
    }
    if (e.target.matches(".btn__close")) {
      $navUl.classList.remove("is-active");
      $html.style.overflowY = "auto";
      $backgroundModal.style.display = "none";
    }
    if (e.target.matches(".baground__modal")) {
      $navUl.classList.remove("is-active");
      $html.style.overflowY = "auto";
      $backgroundModal.style.display = "none";
    }
  });
};

habrirMenu();
