document.addEventListener("DOMContentLoaded", (e) => {

    let boton = document.querySelector(".layout__menu-toggle");
    let botonXmark = document.querySelector(".layout__menu-toggle .fa-xmark");
    let botonBars = document.querySelector(".layout__menu-toggle .fa-bars");
    let aside = document.querySelector(".layout__aside");

    boton.addEventListener("click", e => {

        let visible = document.querySelector(".layout__aside--visible");

        if(!visible){
            aside.classList.add("layout__aside--visible");
            botonXmark.style.opacity = 1;
            botonBars.style.opacity = 0;
        }else{
            aside.classList.remove("layout__aside--visible");
            botonXmark.style.opacity = 0;
            botonBars.style.opacity = 1;
        }

    });

    window.addEventListener("resize", (e) => {

        let size = parseInt(document.body.clientWidth);

        if(size <= 1061){
            aside.classList.remove("layout__aside--visible");
            botonXmark.style.opacity = 0;
            botonBars.style.opacity = 1;
        }

    });

});