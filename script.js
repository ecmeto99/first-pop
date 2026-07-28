console.log("First Pop is ready! 🍿");

const beginButton = document.getElementById("beginButton");
const card = document.getElementById("card");
const logo = document.getElementById("logo");

beginButton.addEventListener("click", () => {

    logo.classList.add("wiggle");

    setTimeout(() => {
        card.classList.add("fade-out");
    }, 500);

});