document.addEventListener("DOMContentLoaded", () => {

    let btns = document.querySelectorAll(".portfolio__option");
    let items = document.querySelectorAll(".gallery__item");

    btns.forEach((btn, index) => {

        btn.addEventListener("click", () => {

            // Manejo de los botones activos
            btns.forEach((btn, i) => {
                if (i != index) {
                    btn.classList.remove("portfolio__option--active");
                } else {
                    btn.classList.add("portfolio__option--active");
                }
            });

            // Mostrar/Ocultar los elementos de la galería
            items.forEach((item, i) => {
                if (item.id === btn.id) {
                    // Si el id del item es igual al id del btn, mostrar el item
                    item.classList.add("gallery__item--show");
                    item.classList.remove("gallery__item--hidden");
                } else if ("todo" === btn.id) {
                    item.classList.add("gallery__item--show");
                    item.classList.remove("gallery__item--hidden");
                } else {
                    // Si el id del item no es igual al id del btn, ocultar el item
                    item.classList.add("gallery__item--hidden");
                    item.classList.remove("gallery__item--show");
                }
            });

        });

    });

});
