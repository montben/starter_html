
const modeToggle = document.getElementById("mode-toggle");
const body = document.body;


function toggleMode() {
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light"); 
    } else {
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark"); 
    }
}


modeToggle.addEventListener("click", toggleMode);


const userPreference = localStorage.getItem("theme");
if (userPreference === "dark") {
    body.classList.add("dark-mode");
}
