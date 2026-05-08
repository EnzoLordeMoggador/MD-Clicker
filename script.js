let pontos = document.getElementById("pontos");
let buttonclicker = document.getElementById("buttonclicker");
let PlayButton = document.getElementById("Login");
let PIDiv = document.querySelector(".PaginaInicial");
let DivGame = document.querySelector(".GameDiv");
let Cadastrar = document.querySelector(".Cadastrar")
let G = null;

buttonclicker.addEventListener("click", () => {
    let valor = parseInt(pontos.innerText);
    pontos.innerText = valor+1
    if (G === null) {
        G = 0;
        Cl();
    }
})

function Cl() {
        G += 1
        buttonclicker.style.transform = `rotate(${G}deg)`;
        requestAnimationFrame(Cl);
}
PlayButton.addEventListener("click", () => {
    PIDiv.style.display = "none"
    DivGame.style.display = "flex"
})