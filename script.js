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
let priceFoguetesUPG = document.querySelector(".priceFoguetesUPG");
let priceFumacasUPG = document.querySelector(".priceFumacasUPG");
let Config = document.querySelector(".Config");
let SCV = document.querySelector(".SCV");
let Foguetes = document.querySelector(".Foguetes");
let ClickValue = 1;
let priceClick = 10;
let priceFoguetes = 500;
let priceFumacas = 2000;
let click1 = false;
let ClicksPerSecond = 0;

priceClickUPG.textContent = priceClick.toString();
priceFoguetesUPG.textContent = priceFoguetes.toString();
priceFumacasUPG.textContent = priceFumacas.toString();
SCV.textContent = ClickValue.toString(); 
buttonclicker.addEventListener("click", () => {
    let valor = parseFloat(pontos.innerText);
    pontos.innerText = valor+ClickValue;
})
buttonclicker.addEventListener("click", () => {
    Pulsar();
})


Cadastrese.addEventListener("click", () => {
    PlayButton.style.display = "none";
    Cadastrese.style.display = "none";
    Cadastrar.style.display = "flex";
    LoginDiv.style.display = "none";
    CadastrarDiv.style.display = "inline-flex";
    backcad.style.display = "flex"
})
function Pulsar () {
  buttonclicker.style.width = "33vw";
  buttonclicker.style.height = "76vh";
  setTimeout(() => {
    buttonclicker.style.width = "37vw";
    buttonclicker.style.height = "74vh";
  }, 100);
  setTimeout(() => {
    buttonclicker.style.width = "35vw";
    buttonclicker.style.height = "70vh";
  }, 100);
}

clickupg.addEventListener("click", () => {
  let value = parseFloat(pontos.innerText)
    if (value >= priceClick){
      pontos.innerText = value - priceClick;
      ClickValue = ClickValue+0.5;
      SCV.textContent = ClickValue.toString();
      priceClick = priceClick*2;
      priceClickUPG.textContent = priceClick.toString();
    }
  
})
Foguetes.addEventListener("click", () => {
  let valor = parseFloat(pontos.innerText)
  if (valor >= priceFoguetes) {
    pontos.innerText = valor - priceFoguetes;
    ClicksPerSecond = ClicksPerSecond + 1;
    priceFoguetes = priceFoguetes*2;
    priceFoguetesUPG.textContent = priceFoguetes.toString();
    setInterval(() => {
      let CPS = parseFloat(pontos.innerText);
      pontos.innerText = CPS+ClicksPerSecond;
      Pulsar();
    }, 1000);

  }})
  

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

Config.addEventListener("mouseenter", () => {
  document.body.classList.add("configAberto");
})
Config.addEventListener("mouseleave", () => {
  document.body.classList.remove("configAberto");
})



// CODIGO DO BANCO DE DADOS
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
