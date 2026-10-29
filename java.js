const btn = document.getElementById("btn");
const message = document.getElementById("message");

btn.addEventListener("click", function() {
    message.textContent = "Bienvenue ! Le site fonctionne.";
});