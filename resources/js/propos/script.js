import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Splitting from "splitting";

gsap.registerPlugin(ScrollTrigger);

gsap.set(".cards-2", { zIndex: 2 });
gsap.set(".cards-1", { zIndex: 1 });
gsap.set(".cards-3", { zIndex: 3 });
gsap.set(".text-1", { zIndex: 1 });
gsap.set(".text-2", { zIndex: 2 });
gsap.set(".text-3", { zIndex: 3 });

let selection = Splitting();
console.log(selection);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".container-propos-1",
        start: "55 top",
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
// .to(".text", { y: -500 }, 5)
// .to(".cards", { y: -500 }, 5);

const time = gsap.timeline({
    scrollTrigger: {
        trigger: ".container-propos-2",
        start: "-55 top",
        markers: true,
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
);

time.from(
    selection[0].chars,
    {
        opacity: 0,
        color: "rgb(13,13,13)",
        stagger: 0.05,
        delay: 40,
    },
    5 // Commence en même temps que l'animation de l'image
);

const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 300);
});

gsap.ticker.lagSmoothing(0);
