document.addEventListener("DOMContentLoaded", () => {
    let switcher = document.querySelector(".switcher__btn");
    let light = document.querySelector(".switcher__icon-light");
    let dark = document.querySelector(".switcher__icon-dark");

    // Verificar si hay un tema guardado en localStorage
    let savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        enableDarkMode();
    } else {
        enableLightMode();
    }

    switcher.addEventListener("click", () => {
        let theme_dark = document.querySelector("#theme-dark");

        if (theme_dark) {
            enableLightMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        let head = document.head;

        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "./assets/css/dark.css";
        link.id = "theme-dark";

        head.appendChild(link);
        dark.style.display = "block";
        light.style.display = "none";

        // Guardar el tema en localStorage
        localStorage.setItem("theme", "dark");
    }

    function enableLightMode() {
        let theme_dark = document.querySelector("#theme-dark");

        if (theme_dark) {
            theme_dark.remove();
        }

        dark.style.display = "none";
        light.style.display = "block";

        // Guardar el tema en localStorage
        localStorage.setItem("theme", "light");
    }
});
