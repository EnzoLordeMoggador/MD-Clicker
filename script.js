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
let clickupg = document.querySelector(".Click");
let priceClickUPG = document.querySelector(".priceClickUPG");
let Config = document.querySelector(".Config");
let ClickValue = 1;
let price = 10
let G = null;
let click1 = false

priceClickUPG.textContent = price.toString();

buttonclicker.addEventListener("click", () => {
    let valor = parseFloat(pontos.innerText);
    pontos.innerText = valor+ClickValue;
    if (G === null) {
        G = 0;
        Cl();
    }
})
buttonclicker.addEventListener("click", () => {
    buttonclicker.style.width = "13vw";
    buttonclicker.style.height = "26vh";
    setTimeout(() => {
      buttonclicker.style.width = "17vw";
      buttonclicker.style.height = "34vh";
    }, 100);
    setTimeout(() => {
      buttonclicker.style.width = "15vw";
      buttonclicker.style.height = "30vh";
    }, 100);
})

function Cl() {
        G += 1
        buttonclicker.style.transform = `rotate(${G}deg)`;
        requestAnimationFrame(Cl);
}

Cadastrese.addEventListener("click", () => {
    PlayButton.style.display = "none";
    Cadastrese.style.display = "none";
    Cadastrar.style.display = "flex";
    LoginDiv.style.display = "none";
    CadastrarDiv.style.display = "inline-flex";
    backcad.style.display = "flex"
})

clickupg.addEventListener("click", () => {
  let value = parseFloat(pontos.innerText)
    if (value >= price){
      pontos.innerText = value - price;
      ClickValue = ClickValue+0.5;
      price = price*2;
      priceClickUPG.textContent = price.toString();
    }
  
})




backcad.addEventListener("click", () =>{
    PlayButton.style.display = "block";
    Cadastrese.style.display = "block";
    Cadastrar.style.display = "none";
    LoginDiv.style.display = "block";
    CadastrarDiv.style.display = "none";
    backcad.style.display = "none"
})


PlayButton.addEventListener("click", () => {
    
    if (emailL.value == "" || senhaL.value == ""){
      alert("Coloque os Dados Do Login")

      emailL = document.getElementById("emailL").value = "";
      senhaL = document.getElementById("senhaL").value = "";
      return;
    }

    PIDiv.style.display = "none"
    DivGame.style.display = "flex"
})
Cadastrar.addEventListener("click", async () =>{
    if (userc.value == "" || emailc.value == "" || senhac.value == ""){
        alert("Coloque Todos os Dados para Poder Cadastrar");
        userc.value = "";
        emailc.value = "";
        senhac.value = "";
        return;
      }

      const dadosC = {
        nome: userc.value,
        email: emailc.value,
        senha: senhac.value,
      }
      try { 
      const response = await fetch("http://localhost:3000/cadastrar", {
        method: "post",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(dadosC)
      })

      const result = await response.json()
      alert(result.mensagem)

      if(response.ok){
        userc.value = "";
        emailc.value = "";
        senhac.value = "";

        backcad.click()
      }
    } catch (err){
        console.error("erro ao conectar", err)
        alert("deu red")
    }
})
Config.addEventListener("mouseenter", () => {
    document.body.classList.add("configAberto");
})
Config.addEventListener("mouseleave", () => {
    document.body.classList.remove("configAberto");
})