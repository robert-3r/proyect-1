const $userCart = document.querySelector(".user_cart");
const backgroundModal = document.querySelector(".baground__modal");
const $cartModal = document.querySelector(".cart-modal");

document.addEventListener("click", (e) => {
  if (e.target.matches(".user_cart")) {
    $cartModal.style.display = "block";
    backgroundModal.style.display = "block";
  }
  if (e.target.matches(".baground__modal")) {
    $cartModal.style.display = "none";
    backgroundModal.style.display = "none";
  }
  if (e.target.matches(".cart-modal__close")) {
    $cartModal.style.display = "none";
    backgroundModal.style.display = "none";
  }
});
