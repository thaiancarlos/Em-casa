document.addEventListener("DOMContentLoaded", function () {
    const subtext = document.getElementById("subtext");
    const intro = document.querySelector(".intro");
    const mainContent = document.querySelector(".main-content");

    // Aguarda o efeito de digitação
    setTimeout(() => {
        subtext.classList.add("visible");
    }, 2500);

    // Transição para conteúdo principal
    setTimeout(() => {
        intro.style.opacity = 0;
        setTimeout(() => {
            intro.classList.add("hidden");
            mainContent.classList.remove("hidden");
        }, 1000);
    }, 4500);
});