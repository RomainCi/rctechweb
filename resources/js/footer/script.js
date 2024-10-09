const insta = document.querySelector(".fa-instagram");

insta.addEventListener("click", (e) => {
    console.log("he");
    e.preventDefault();
    window.open("https://www.instagram.com/rctechweb/", "_blank");
});
