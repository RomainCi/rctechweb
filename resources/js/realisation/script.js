import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const eye = document.querySelectorAll("#eye");
const modal = document.getElementById("myModal");
const modalContainer = document.querySelector(".modal-content");
const close = document.querySelector(".close");
const carousel = document.querySelector(".carousel");
const body = document.querySelector(".antialiased");
const flou = document.querySelector(".flou");
const left = document.querySelector(".fa-angle-left");
const right = document.querySelector(".fa-angle-right");
const paragraph = document.createElement("p");
const div = document.createElement("div");

const images = [
    [
        "assets/realisation/burger0.jpeg",
        "assets/realisation/burger1.jpg",
        "assets/realisation/burger2.jpg",
    ],
    [
        "assets/realisation/ordinateur0.jpeg",
        "assets/realisation/ordinateur1.jpeg",
        "assets/realisation/ordinateur2.jpg",
    ],
];

let currentIndex = 0;
let index;
let scrollPosition = 0;

function getScrollbarWidth() {
    // Crée un élément invisible
    const outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.overflow = "scroll"; // Force un défilement
    outer.style.msOverflowStyle = "scrollbar"; // Nécessaire pour WinJS apps
    document.body.appendChild(outer);

    // Ajoute un élément intérieur et le mesure
    const inner = document.createElement("div");
    outer.appendChild(inner);
    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

    // Supprime les éléments
    outer.parentNode.removeChild(outer);

    return scrollbarWidth;
}

function updateModalPosition() {
    const windowHeight = window.innerHeight;
    const height = windowHeight / 100;
    const elementHeight = windowHeight - height * 8 - 40;
    const windowHeightNav = windowHeight + height * 8;
    const scrollY = window.scrollY || window.pageYOffset;

    const topPosition = (windowHeightNav - elementHeight) / 2 + scrollY;

    flou.style.display = "block";
    modal.style.display = "block";
    modal.style.top = topPosition + "px";
    modal.style.index = 999;
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Désactiver le défilement de la page en utilisant position fixed
    const scrollbarWidth = getScrollbarWidth();
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";
}

function closeModal() {
    modal.classList.remove("active");
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    window.scrollTo(0, scrollPosition);

    modal.classList.add("close");
    setTimeout(function () {
        paragraph.textContent = "";
        div.textContent = "";
        flou.style.display = "none";
        modal.style.display = "none";
        // body.style.overflow = "auto";
    }, 400);
    currentIndex = 0;
}

function changeImage(index, currentIndex) {
    div.innerHTML = `<img class="carousel-image" src="${images[index][currentIndex]}" alt="image">`;
    div.classList.add("carousel-item");
    carousel.appendChild(div);
    return index;
}

eye.forEach((e, i) => {
    e.addEventListener("click", (event) => {
        // paragraph.textContent = `Contenu du modal pour la carte ${i + 1}`;
        // carousel.appendChild(paragraph);
        index = changeImage(i, currentIndex);
        modal.classList.remove("close");
        modal.classList.add("active");
        updateModalPosition();
    });
});

close.addEventListener("click", closeModal);
flou.addEventListener("click", closeModal);

right.addEventListener("click", (event) => {
    currentIndex = (currentIndex + 1) % images[index].length;
    changeImage(index, currentIndex);
});

left.addEventListener("click", (event) => {
    currentIndex =
        (currentIndex - 1 + images[index].length) % images[index].length;
    changeImage(index, currentIndex);
});

///////////////animation scroll////////////////
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".container-rea",
        start: "top top",
        scrub: true,
        pin: ".container-rea",
        markers: false,
        end: "+=2150px 400px", // Adjust based on your content length and desired scroll length
    },
});

tl.to(".card-rea-1", { scale: 0.9 }, 0)
    .from(".card-rea-2", { y: 700 }, 1)
    .to(".card-rea-2", { scale: 0.9 }, 2)
    .from(".card-rea-3", { y: 700 }, 3)
    .to(".card-rea-3", { scale: 0.9 }, 4);

const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);
