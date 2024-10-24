let blob = document.querySelector("#blob");
const hamburger = document.querySelector(".nav-hamburger");
const navMenu = document.querySelector(".nav-menu");
const navbar = document.querySelector(".navbar");
const main = document.querySelector(".main");
let navLink = document.querySelectorAll(".nav-link");

navbarClick();

// let interval = null;

// document.querySelector(".title-hero-banner").onmouseover = (event) => {
//     let iteration = 0;

//     // Initialiser la variable interval si elle n'est pas déjà déclarée
//     if (typeof interval !== "undefined") {
//         clearInterval(interval);
//     }

//     if (!event.target.dataset.value) {
//         console.error(
//             "L'attribut data-value n'est pas défini sur l'élément cible."
//         );
//         return;
//     }

//     const targetText = event.target.dataset.value;

//     interval = setInterval(() => {
//         event.target.innerText = event.target.innerText
//             .split("")
//             .map((letter, index) => {
//                 if (letter === " ") {
//                     return " "; // Ne change pas les espaces
//                 } else if (index < iteration) {
//                     return targetText[index];
//                 }

//                 return letters[Math.floor(Math.random() * 26)];
//             })
//             .join("");

//         if (iteration >= targetText.length) {
//             clearInterval(interval);
//         }

//         iteration += 1 / 3;
//     }, 30);
// };

hamburger.addEventListener("click", function (e) {
    console.log("holle dazda");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navbar.classList.toggle("active");
});

function navbarClick() {
    navLink.forEach((e) => {
        e.addEventListener("click", function (event) {
            event.preventDefault();
            // Récupérer l'ancre de l'URL
            let anchor = e.href.split("#")[1];
            console.log("nav",anchor)
            // Vérifier si l'ancre existe dans le document
            let targetElement = document.getElementById(anchor);
            // Si l'ancre existe, aller directement à l'élément
            if (targetElement) {
                // Calculer la position avec un offset personnalisé
                let offset = 70; // Ajuster selon les besoins
                let topPosition =
                    targetElement.getBoundingClientRect().top +
                    window.pageYOffset -
                    offset;

                // Aller directement à la position de l'élément sans afficher de défilement
                window.scrollTo(0, topPosition); // Aller directement à l'endroit calculé

                // Modifier l'URL sans ajouter d'entrée dans l'historique du navigateur
                history.replaceState(null, null, `#${anchor}`);
                hamburger.classList.toggle("active");
                navMenu.classList.toggle("active");
                navbar.classList.toggle("active");
            }else{
                window.location.href = "https://www.rc-dev.pro/"
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
    document.getElementById("progressBar").style.height = scrolled + "%";
}
