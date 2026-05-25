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
let upgradebtn = document.querySelector(".upgradesbtn")
let backcad = document.getElementById("backcad");
let userc = document.getElementById("userC");
let emailc = document.getElementById("emailC");
let senhac = document.getElementById("senhaC");

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
    backcad.style.display = "flex"
})

upgradebtn.addEventListener("click", () => {
    upgradebtn.style.fontSize = "0vh";
    upgradebtn.style.height = "95vh";
    upgradebtn.style.marginBottom = "90vh";
    upgradebtn.style.marginTop = "-31vh";
    upgradebtn.style.borderRadius = "2vh";
})

backcad.addEventListener("click", () =>{
    PlayButton.style.display = "block";
    Cadastrese.style.display = "block";
    Cadastrar.style.display = "none";
    LoginDiv.style.display = "block";
    CadastrarDiv.style.display = "none";
    backcad.style.display = "none"
})

Cadastrar.addEventListener("click", () =>{
    if (userc.value == "" || emailc.value == "" || senhac.value == ""){
        alert("Coloque Todos os Dados para Poder Cadastrar")
        let userc = document.getElementById("userC").value = ""
        let emailc = document.getElementById("emailC").value = ""
        let senhac = document.getElementById("senhaC").value = ""
        return;
      }

})