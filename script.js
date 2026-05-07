let pontos = document.getElementById("pontos");
let buttonclicker = document.getElementById("buttonclicker")
let G = 0

buttonclicker.addEventListener("click", () => {
    let valor = parseInt(pontos.innerText);
    pontos.innerText = valor+1
})

while (true) {
   buttonclicker.style.transform = "rotate(Gdeg)";
}