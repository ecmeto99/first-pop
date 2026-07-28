console.log("First Pop is ready! 🍿");

const beginButton = document.getElementById("beginButton");
const card = document.getElementById("card");
const logo = document.getElementById("logo");
const landingPage = document.getElementById("landing-page");
const dashboard = document.getElementById("dashboard");

beginButton.addEventListener("click", () => {

    logo.classList.add("wiggle");

    setTimeout(() => {

    // Hide birthday page
    landingPage.style.display = "none";

    // Show loading screen
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.classList.remove("hidden");
    
    const kernel = document.getElementById("loading-kernel");
        kernel.classList.add("pop");

    // After 2.5 seconds, hide loading screen
    setTimeout(() => {

        loadingScreen.classList.add("hidden");
        
        dashboard.classList.remove("hidden");
        dashboard.classList.add("fade-in");

    }, 2500);

}, 1200);

});