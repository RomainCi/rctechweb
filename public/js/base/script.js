let blob = document.querySelector("#blob");
const hamburger = document.querySelector(".nav-hamburger");
const navMenu = document.querySelector(".nav-menu");
const navbar = document.querySelector(".navbar");
const main = document.querySelector(".main");
let navLink = document.querySelectorAll(".nav-link");

navbarClick();

/* -- Text effect -- */

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector(".title-hero-banner").onmouseover = (event) => {
    let iteration = 0;

    // Initialiser la variable interval si elle n'est pas déjà déclarée
    if (typeof interval !== "undefined") {
        clearInterval(interval);
    }

    if (!event.target.dataset.value) {
        console.error(
            "L'attribut data-value n'est pas défini sur l'élément cible."
        );
        return;
    }

    const targetText = event.target.dataset.value;

    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if (letter === " ") {
                    return " "; // Ne change pas les espaces
                } else if (index < iteration) {
                    return targetText[index];
                }

                return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

        if (iteration >= targetText.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 30);
};

hamburger.addEventListener("click", function (e) {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navbar.classList.toggle("active");
});

document.addEventListener("pointermove", function (event) {
    const { clientX, clientY } = event;
    blob.animate(
        {
            left: `${clientX}px`,
            top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
    );
});

window.addEventListener("touchmove", function (event) {
    // Obtenez les coordonnées X et Y du premier toucher
    event.preventDefault();
    const touch = event.touches[0]; // Utilisez touches[0] pour le premier toucher
    const clientX = touch.clientX;
    const clientY = touch.clientY;

    // Par exemple, vous pouvez utiliser ces coordonnées pour animer un élément
    blob.animate(
        {
            left: `${clientX}px`,
            top: `${clientY}px`,
        },
        { duration: 3000 }
    );
});

function navbarClick() {
    navLink.forEach((e) => {
        e.addEventListener("click", function (event) {
            event.preventDefault();
            // Récupérer l'ancre de l'URL
            let anchor = e.href.split("#")[1];
            // Vérifier si l'ancre existe dans le document
            let targetElement = document.getElementById(anchor);
            // Si l'ancre existe, faire défiler la page jusqu'à cet élément
            if (targetElement) {
                let topService = targetElement.offsetTop - 80;
                window.scrollTo({ top: topService, behavior: "smooth" });
                // Modifier l'URL sans ajouter d'entrée dans l'historique du navigateur
                history.replaceState(null, null, anchor);
            }
        });
    });
}
window.onscroll = function () {
    updateProgressBar();
};

function updateProgressBar() {
    var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
    var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}
