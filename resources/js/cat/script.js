import lottie from "lottie-web";

const catLottie = document.getElementById("lottie-container");
let catRect = catLottie.getBoundingClientRect();
const height = catRect.height;
const width = catRect.width;

function isLaptop() {
    return window.innerWidth >= 1101; // Vérifie si la largeur de la fenêtre est suffisante pour un laptop
}

if (isLaptop()) {
    const animation = lottie.loadAnimation({
        container: catLottie, // Le conteneur pour l'animation
        renderer: "svg", // Le type de rendu: 'svg', 'canvas', ou 'html'
        loop: true, // Répéter l'animation
        autoplay: true, // Démarrer l'animation automatiquement
        path: "https://lottie.host/61868ad3-d7c1-4c8c-89a5-7c254b089f80/bNrXlABgjg.json",
        // path: "https://lottie.host/ffef56d3-0331-471b-af09-525e9fe945e6/iAILnT7f0Q.json", // URL vers le fichier JSON de l'animation
    });

    const catPos = {
        x: 0,
        y: 0,
    };

    const mouse = {
        x: 0,
        y: 0,
    };

    document.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    function lerp(a, b, t) {
        return (1 - t) * a + t * b;
    }

    let flipIt = false;
    const raf = () => {
        catRect = catLottie.getBoundingClientRect();
        flipIt = catRect.x + width / 2 > mouse.x;
        catPos.x = lerp(catPos.x, mouse.x + width * (flipIt ? 0 : -1), 0.03);
        catPos.y = lerp(catPos.y, mouse.y, 0.03);

        const angle = Math.atan(
            (catRect.y + catRect.height / 2 - mouse.y) /
                (catRect.x + catRect.width / 2 - mouse.x)
        );

        const distance = Math.sqrt(
            Math.pow(mouse.x - (catRect.x + width * (flipIt ? 0 : 1)), 2) +
                Math.pow(mouse.y - (catRect.y + catRect.height / 2), 2)
        );

        const animationSpeed = Math.min(Math.max(distance / 100, 0.5), 2.0);
        animation.setSpeed(animationSpeed);

        catLottie.style.transform = `translate3d(${catPos.x}px,${
            catPos.y - height / 2
        }px,0) rotate(${angle}rad) scaleX(${flipIt ? "1" : "-1"})`;
        catLottie.style.opacity = distance / 100 + "";
        requestAnimationFrame(raf);
    };

    raf();
}
