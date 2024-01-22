const eye = document.querySelectorAll("#eye");
const modal = document.getElementById("myModal");
const modalContent = document.getElementById("modalContent");
console.log(eye);

eye.forEach((e, i) => {
    e.addEventListener("click", (event) => {
        console.log("b", i);
        modal.style.display = "block";

        // Mettez le contenu spécifique du modal ici (en fonction de la carte cliquée)
        modalContent.innerHTML = `Contenu du modal pour la carte ${i + 1}`;
    });
});
