import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Splitting from "splitting";

function isLaptop() {
    return window.innerWidth >= 1101; // Vérifie si la largeur de la fenêtre est suffisante pour un laptop
}

if (isLaptop()) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".cards-2", { zIndex: 2 });
    gsap.set(".cards-1", { zIndex: 1 });
    gsap.set(".cards-3", { zIndex: 3 });
    gsap.set(".text-1", { zIndex: 1 });
    gsap.set(".text-2", { zIndex: 2 });
    gsap.set(".text-3", { zIndex: 3 });
    // gsap.set("#button-propos", { opacity: 0 });

    let selection = Splitting();

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".container-propos-1",
            start: "-10 top",
            markers: false,
            pin: ".propos",
            scrub: true,
            end: "+=2150px 400px", // Adjust based on your content length and desired scroll length
        },
    });
    tl.to(".cards-1", { scale: 0.9 }, 0)
        .to(".text-1", { scale: 0.9 }, 0)
        .from(".cards-2", { x: 800 }, 1)
        .from(".text-2", { x: -800 }, 1)
        .to(".cards-2", { scale: 0.9 }, 2)
        .to(".text-2", { scale: 0.9 }, 2)
        .from(".cards-3", { x: 800 }, 3)
        .from(".text-3", { x: -800 }, 3)
        .to(".cards-3", { scale: 0.9 }, 4)
        .to(".text-3", { scale: 0.9 }, 4);

    const time = gsap.timeline({
        scrollTrigger: {
            trigger: ".container-propos-2",
            start: "-55 top",
            markers: false,
            pin: ".propos-2",
            scrub: true,
            end: "+=2150px 400px", // Ajustez selon la longueur de votre contenu et le défilement désiré
        },
    });

    time.to(
        ".voile",
        {
            scaleY: 0, // Réduction de l'image
            transformOrigin: "bottom",
            duration: 40, // Même durée que l'animation du texte pour une synchronisation
        },
        0 // Commence en même temps que l'animation du texte
    ).to(".button-propos", { opacity: 1, scale: 1, duration: 8, delay: 40 }, 5);

    time.from(
        selection[0].chars,
        {
            opacity: 0,
            color: "rgb(13,13,13)",
            stagger: 0.05,
            delay: 40,
        },
        5
    ).from(".button-propos", { opacity: 0, scale: 0.7, duration: 5 }, 0);

    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 300);
    });

    gsap.ticker.lagSmoothing(0);
}
