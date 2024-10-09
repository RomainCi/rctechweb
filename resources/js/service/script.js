import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
const lenis = new Lenis();

gsap.ticker.add((time) => {
    lenis.raf(time * 300);
});

gsap.ticker.lagSmoothing(0);
// Gérer le clic sur le bouton
let buttons = document.querySelectorAll(".contact-button");

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

function isLaptop() {
    return window.innerWidth >= 1101; // Vérifie si la largeur de la fenêtre est suffisante pour un laptop
}
if (isLaptop()) {
    // gsap.registerPlugin(ScrollTrigger);

    var cards = gsap.utils.toArray(".creative-pro");
    var radius = 720;

    gsap.set(cards, {
        rotationY: (i) => (i * 360) / cards.length,
        transformOrigin: "50% 50% " + -radius + "px",
        z: -radius,
        rotateY: 0,
        rotateX: 0,
    });

    cards.forEach((card, i) => {});
    gsap.to(cards, {
        scrollTrigger: {
            trigger: cards,
            start: "-130 top",
            end: "+=4000px 50%",
            scrub: true,
            pin: "#service",
            markers: false,
            onUpdate: updateScale,
        },
        rotationY: "+=360",
        ease: "none",
        duration: 0.5,
    });

    function updateScale() {
        cards.forEach((card) => {
            const rotationY = gsap.getProperty(card, "rotationY") % 360;
            const normalizedRotation = Math.abs(
                rotationY > 180 ? 360 - rotationY : rotationY
            );
            const scale = gsap.utils.mapRange(
                0,
                90,
                1,
                0.7,
                normalizedRotation
            );

            gsap.set(card, {
                scale: scale,
                // opacity: opacity,
            });
        });
    }
} else {
    console.log("hello");
}
