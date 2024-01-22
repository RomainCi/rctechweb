let blob = document.querySelector('#blob');
const hamburger = document.querySelector('.nav-hamburger');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');
const main = document.querySelector('.main');

/* -- Text effect -- */

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector(".title-hero-banner").onmouseover = event => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if (letter === " ") {
                    return " "; // Ne change pas les espaces
                } else if (index < iteration) {
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

        if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1/3;
    }, 30);
}


// document.querySelector('.title-hero-banner').onmouseover = event => {
//     let iterations = 0;
//     const interval = setInterval(() => {
//         event.target.innerText = event.target.innerText.split("")
//             .map((letter, index) => {
//                 if (index < iterations) {
//                     return event.target.dataset.value[index]
//                 }
//                 return letters[Math.floor(Math.random() * 26)]
//             })
//             .join("");
//         if (iterations >= 9) clearInterval(interval);
//         iterations += 1;
//     }, 30)
// }
hamburger.addEventListener('click', function (e) {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active',);
    // navMenu.classList.toggle("blur");
    // main.classList.toggle("blur");
    navbar.classList.toggle('active');
})


document.addEventListener('pointermove', function (event) {
    const {clientX, clientY} = event;
    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, {duration: 3000, fill: "forwards"})

});


window.addEventListener('touchmove', function (event) {
    // Obtenez les coordonnées X et Y du premier toucher
    event.preventDefault();
    const touch = event.touches[0]; // Utilisez touches[0] pour le premier toucher
    const clientX = touch.clientX;
    const clientY = touch.clientY;

    // Effectuez votre animation ou vos actions ici avec clientX et clientY
    console.log("Coordonnées X : " + clientX + ", Coordonnées Y : " + clientY);

    // Par exemple, vous pouvez utiliser ces coordonnées pour animer un élément
    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, {duration: 3000});
});
