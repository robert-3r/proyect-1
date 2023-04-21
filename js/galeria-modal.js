(function () {
  const d = document;

  const $modalGaleriContainer = d.querySelector(".modal-galery__container");
  const $bagroundModal = d.querySelector(".baground__modal");

  const eventoModal = () => {
    d.addEventListener("click", (e) => {
      if (window.matchMedia("(min-width: 501px)").matches) {
        if (e.target.matches(".imagen__1")) {
          $modalGaleriContainer.style.display = "block";
          $bagroundModal.style.display = "block";
        }
        if (e.target.matches(".baground__modal")) {
          $modalGaleriContainer.style.display = "none";
          $bagroundModal.style.display = "none";
        }
        if (e.target.matches(".modal-galery__close")) {
          $modalGaleriContainer.style.display = "none";
          $bagroundModal.style.display = "none";
        }
      }
    });
  };

  eventoModal();
})();
