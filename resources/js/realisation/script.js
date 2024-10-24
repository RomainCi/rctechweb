import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let buttons = document.querySelectorAll(".button-contact");

buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        event.preventDefault(); // Empêche le comportement par défaut du bouton
        let url = new URL(window.location);
        console.log(url);
        url.search = "";
        url = url.origin + url.pathname + url.search + "?param=#contact";
        console.log(url);
        // Remettre l'URL d'origine sans recharger la page
        window.history.pushState("", document.title, window.location.pathname);
        window.location.href = url;
    });
});

const indoor = document.querySelector(".indoor");
const boba = document.querySelector(".boba");

indoor.addEventListener("click", (e) => {
    e.preventDefault();
    window.open("https://indoor-sante.fr/", "_blank");
});

boba.addEventListener("click", (e) => {
    e.preventDefault();
    window.open("https://boba-shop.fr/", "_blank");
});

function isLaptop() {
    return window.innerWidth >= 1101; // Vérifie si la largeur de la fenêtre est suffisante pour un laptop
}

if (isLaptop()) {
    const cardLaptop = document.querySelector(".card-laptop");
    const rotation = gsap.getProperty(".screen", "rotateX");

    gsap.registerPlugin(ScrollTrigger);
    const time = gsap.timeline({
        scrollTrigger: {
            trigger: ".card-laptop",
            start: "-120 top",
            end: "+=4150px",
            scrub: true,
            markers: false,
            pin: ".container-realisation",
            onUpdate: updateVisibility, // Appelle updateVisibility à chaque mise à jour du défilement
        },
    });

    // Animation de la rotation de .screen
    time.to(
        ".screen",
        {
            rotateX: 0,
            duration: 1.5,
        },
        1
    )
        .to(
            ".screen-color",
            {
                rotateX: 0,
                duration: 1.5,
            },
            1
        )
        .to(
            ".screen1",
            {
                rotateX: 0,
                duration: 1.5,
            },
            1
        )
        .to(".card-laptop", { scale: 0.95 }, 2)
        .from(".card-tablet", { y: 1000 }, 3)
        .to(".card-tablet", { scale: 0.91 }, 4)
        .from(".card-computeur", { y: 1000 }, 5)
        .to(".card-computeur", { scale: 0.87 }, 6);

    // Variable pour suivre l'état du survol de la souris
    let isMouseOver = false;

    // Événement pour détecter lorsque la souris entre dans l'élément
    cardLaptop.addEventListener("mouseenter", () => {
        isMouseOver = true;
        updateVisibility(); // Force la mise à jour de la visibilité immédiatement lors du survol
    });

    // Événement pour détecter lorsque la souris quitte l'élément
    cardLaptop.addEventListener("mouseleave", () => {
        isMouseOver = false;
        // Lorsque la souris quitte l'élément, assure que le clavier ouvert est visible
        gsap.to(".keyboard-open", { opacity: 1, duration: 0.3 });
        gsap.to(".keyboard-color", { opacity: 0, duration: 0.3 });
        gsap.to(".screen", { opacity: 1, duration: 0.3 });
        gsap.to(".screen-color", { opacity: 0, duration: 0.3 });
        gsap.to(".screen1", { opacity: 0, duration: 0.3 });
    });

    // Fonction pour mettre à jour la visibilité des éléments en fonction de la rotation de l'écran et du survol
    function updateVisibility() {
        const rotation = gsap.getProperty(".screen", "rotateX");

        // Affiche l'écran fermé si l'angle est de -85 degrés
        if (rotation <= -85) {
            gsap.to(".screen-close", { opacity: 1, duration: 0.3 });
            gsap.to(".screen", { opacity: 0, duration: 0.3 });
        } else {
            gsap.to(".screen-close", { opacity: 0, duration: 0.3 });
            gsap.to(".screen", { opacity: 1, duration: 0.3 });
        }

        if (rotation === -90) {
            gsap.set(".screen", { opacity: 0 });
        }
        // Animation du clavier en fonction de la rotation
        if (rotation <= -70) {
            gsap.set(".keyboard-close", {
                scaleY: 1,
                opacity: 1,
            });
            gsap.set(".keyboard-open", {
                scaleY: 0,
                opacity: 0,
            });
        } else {
            gsap.set(".keyboard-open", {
                scaleY: 1,
                opacity: 1,
            });
            gsap.set(".keyboard-close", {
                scaleY: 0,
                opacity: 0,
            });
        }

        // Mise à jour de la visibilité du clavier coloré en fonction du survol et de la rotation
        if (isMouseOver) {
            if (rotation > -30) {
                gsap.to(".keyboard-color", { opacity: 1, duration: 0.3 });
                gsap.to(".screen-color", { opacity: 1, duration: 0.3 });
                gsap.to(".screen1", { opacity: 1, duration: 0.3 });
            } else {
                gsap.to(".keyboard-color", { opacity: 0, duration: 0.3 });
                gsap.to(".screen-color", { opacity: 0, duration: 0.3 });
                gsap.to(".screen1", { opacity: 0, duration: 0.3 });
            }
        }
    }

    // Assure que Lenis et ScrollTrigger fonctionnent ensemble
    const lenis = new Lenis();
    lenis.on("scroll", () => {
        ScrollTrigger.update();
    });
} 