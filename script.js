let emailL = document.getElementById("emailL");
let senhaL = document.getElementById("senhaL");
let pontos = document.getElementById("pontos");
let buttonclicker = document.getElementById("buttonclicker");
let PlayButton = document.getElementById("Login");
let PIDiv = document.querySelector(".PaginaInicial");
let DivGame = document.querySelector(".GameDiv");
let Cadastrese = document.getElementById("Cadastre-se");
let CadastrarDiv = document.getElementById("CadastrarDiv");
let Cadastrar = document.getElementById("Cadastrar")
let LoginDiv = document.getElementById("LoginDiv");
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
    
    if (emailL.value == "" || senhaL.value == ""){
      alert("Coloque os Dados Do Login")
      return;
    }

    PIDiv.style.display = "none"
    DivGame.style.display = "flex"
})
Cadastrese.addEventListener("click", () => {
    PlayButton.style.display = "none";
    Cadastrese.style.display = "none";
    Cadastrar.style.display = "flex";
    LoginDiv.style.display = "none";
    CadastrarDiv.style.display = "inline-flex";
})
