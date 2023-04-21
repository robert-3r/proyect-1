const count = document.querySelector(".hero__count");
const $cartModalCheckoutContainer = document.querySelector(
  ".cart-modal__checkout-container"
);

let $notificationCart = document.querySelector(".header__card--notification");

let userInputNumber = 0;
let indexImg = 1;

if ($notificationCart.innerHTML === "0") {
  $notificationCart.style.display = "none";
  $cartModalCheckoutContainer.innerHTML =
    "<p class='cart-modal__checkout-content'>sin productos</p>";
}

document.addEventListener("click", (e) => {
  if (e.target.matches(".btn-minus > *")) {
    if (userInputNumber === 0) return;
    userInputNumber--;
    count.value = userInputNumber;
  }
  if (e.target.matches(".btn-plus > *")) {
    userInputNumber++;
    count.value = userInputNumber;
  }
  // agregar total de poductos al carrro;
  if (e.target.matches(".hero__btn")) {
    if (userInputNumber === 0) return;

    $notificationCart.style.display = "block";

    let valorAnterior = parseInt($notificationCart.innerHTML);
    valorAnterior = valorAnterior + userInputNumber;

    $cartModalCheckoutContainer.innerHTML = `
      <div class="cart-modal__details-container">
     <img
       class="img-modal__product"
       src="./images/image-product-1-thumbnail.jpg"
       alt=" product 1"
     />
     <div class="cart-modal__product-container">
       <p class="cart-modal__product">
         zapatillas de deporte de edición limitada de otoño
       </p>
       <p class="cart-modal__price">$125 x ${valorAnterior} = <span>$${
      125 * valorAnterior
    }</span></p>
     </div>
     <i class="bi bi-trash3 cart-modal__delete"></i>
   </div>
   <button class="cart-modal__btn hero__btn">Comprar</button> 
     `;

    $notificationCart.innerHTML = valorAnterior;
    count.value = 0
  
  }
  if (e.target.matches(".cart-modal__delete")) {
    $notificationCart.style.display = "none";
    $cartModalCheckoutContainer.innerHTML =
      "<p class='cart-modal__checkout-content'>sin productos</p>";
  }
  if (e.target.matches(".cart-modal__btn")) {
    const tiempo = setTimeout(() => {
      $notificationCart.style.display = "none";
      $cartModalCheckoutContainer.innerHTML =
        "<p class='cart-modal__checkout-content'>Gracias por su compra ,no implemente un metodo de pago porque es un proyecto de practica.</p>";
    }, 10);
    setTimeout(() => {
      clearTimeout(tiempo);
      $cartModalCheckoutContainer.innerHTML =
        "<p class='cart-modal__checkout-content'>sin productos</p>";
        count.value = 0;
        userInputNumber = 0
    }, 3000);
  }
  // carrousel img
  const imgCarrousel = document.querySelector(".imagen__1");

  if (e.target.matches(".gallery__next > * ")) {
    changeNextImage(imgCarrousel);
  }
  if (e.target.matches(".gallery__previus > * ")) {
    changePreviusImage(imgCarrousel);
  }

  function changeNextImage(imgContainer) {
    if (indexImg === 4) {
      indexImg = 0;
    }
    indexImg++;
    imgContainer.setAttribute("src", `../images/image-product-${indexImg}.jpg`);
    imgContainer.setAttribute("alt", `product ${indexImg}`);
  }
  function changePreviusImage(imgContainer) {
    if (indexImg === 1) {
      indexImg = 5;
    }
    indexImg--;
    imgContainer.setAttribute("src", `../images/image-product-${indexImg}.jpg`);
    imgContainer.setAttribute("alt", `product ${indexImg}`);
  }
  // modal carrousel img
  const modalGallery = document.querySelector(".modal-galery__img");
  let heroProducts = document.querySelectorAll(".hero__pruducts > img");
  let heroPruductsGalery = document.querySelectorAll(
    ".hero__pruducts-galery > img"
  );
  const modalGaleryImg = document.querySelector(".modal-galery__img");

  if (e.target.matches(".modal-gallery__next > *")) {
    changeNextImage(modalGallery);
  }

  if (e.target.matches(".modal-gallery__previus > *")) {
    changePreviusImage(modalGallery);
  }

  //  cambiar imagenes pequeñas
  heroProducts = [...heroProducts];
  heroPruductsGalery = [...heroPruductsGalery];

  heroProducts.forEach((thumbnail) => {
    thumbnail.addEventListener("click", (e) => {
      e.stopPropagation();
      imgCarrousel.setAttribute(
        "src",
        `../images/image-product-${e.target.id}.jpg`
      );
      imgCarrousel.setAttribute("alt", `product ${e.target.id}`);
    });
  });
  // imagnes pequenas del modal img

  heroPruductsGalery.forEach((modalThumbnail) => {
    modalThumbnail.addEventListener("click", (e) => {
      e.stopPropagation();

      let idModal = e.target.id.slice(-1);

      modalGaleryImg.setAttribute(
        "src",
        `../images/image-product-${idModal}.jpg`
      );
      modalGaleryImg.setAttribute("alt", `product ${idModal}`);
    });
  });
});
