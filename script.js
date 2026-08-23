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
let priceOruamUPG = document.querySelector(".priceOruamUPG");
let Config = document.querySelector(".Config");
let SCV = document.querySelector(".SCV");
let Foguetes = document.querySelector(".Foguetes");
let Fumacas = document.querySelector(".Fumacas");
let OruamPNG = document.querySelector(".OruamPNG");
let Oruam = document.querySelector(".Oruam");

let CDN = document.querySelector(".CDN");
let canhaoDnevoa = document.querySelector(".canhaoDnevoa");
let ClickValue = 1;
let priceClick = 10;
let priceFoguetes = 200;
let priceFumacas = 500;
let priceOruam = 10000;
let click1 = false;
let ClicksPerSecond = 0;
let ClicksCount = 0;
let BonusFumaca = 20;
let FumacaUpgrade = false;



CDN.textContent = ClicksCount.toString();
priceOruamUPG.textContent = priceOruam.toString();
priceClickUPG.textContent = priceClick.toString();
priceFoguetesUPG.textContent = priceFoguetes.toString();
priceFumacasUPG.textContent = priceFumacas.toString();
SCV.textContent = ClickValue.toString(); 
buttonclicker.addEventListener("click", () => {
    
    let valor = parseFloat(pontos.innerText);
    let valormoreclickvalue = valor+ClickValue
    pontos.innerText = valormoreclickvalue.toFixed(1);


})
buttonclicker.addEventListener("click", () => {
  if (FumacaUpgrade == true){
    SoltarFumaca();
  }
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
  buttonclicker.style.width = "13vw";
  buttonclicker.style.height = "23vh";
  setTimeout(() => {
    buttonclicker.style.width = "17vw";
    buttonclicker.style.height = "27vh";
  }, 100);
  setTimeout(() => {
    buttonclicker.style.width = "15vw";
    buttonclicker.style.height = "25vh";
  }, 100);
}

clickupg.addEventListener("click", () => {
  let value = parseInt(pontos.innerText)
    if (value >= priceClick){
      let valuemPrice = value - priceClick;
      pontos.innerText = valuemPrice.toFixed(1)
      ClickValue = ClickValue+1;
      
      SCV.textContent = ClickValue.toString();
      priceClick = priceClick*1.2;
      priceClickUPG.textContent = priceClick.toFixed(1).toString();
      
    }
  
})
Foguetes.addEventListener("click", () => {
  let valor = parseFloat(pontos.innerText)
  if (valor >= priceFoguetes) {
    let valuempricef = valor - priceFoguetes;
    pontos.innerText = valuempricef.toFixed(1);
    ClicksPerSecond = ClicksPerSecond + 1;
    priceFoguetes = priceFoguetes*1.15;
    priceFoguetesUPG.textContent = priceFoguetes.toFixed(1).toString();
    setInterval(() => {
      let CPS = parseFloat(pontos.innerText);
      pontos.innerText = CPS+ClicksPerSecond;
      Pulsar();
    }, 1000);

  }})
Fumacas.addEventListener("click", () => {
 let valor = parseFloat(pontos.innerText)
 if (valor >= priceFumacas) {
    let valuempricef = valor - priceFumacas;
    pontos.innerText = valuempricef.toFixed(1);
    ClicksCount = 0;
    FumacaUpgrade = true;
    priceFumacas = priceFumacas * 1.4;
    
    priceFumacasUPG.textContent = priceFumacas.toFixed(1).toString();
    BonusFumaca = BonusFumaca*1.5;
    canhaoDnevoa.style.display = "flex";
  }})
function SoltarFumaca() {
  ClicksCount = ClicksCount + 1;
  let valor = parseFloat(pontos.innerText)
  CDN.textContent = ClicksCount.toString();
    if (ClicksCount == 10) {
      ClicksCount = 0;
      pontos.innerText = valor + BonusFumaca;
    }
  }
Oruam.addEventListener("click", () => {
  let valor = parseFloat(pontos.innerText)
  if (valor >= priceOruam) {
    let valuempricef = valor - priceOruam;
    pontos.innerText = valuempricef.toFixed(1);
    OruamPNG.style.display = "flex";
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


const overlay = document.getElementById('modal-overlay');
const gameContent = document.querySelector('.game-container'); // ajuste pro seletor real do seu jogo

document.getElementById('btn-guest').addEventListener('click', () => {
  overlay.style.display = 'none';
  gameContent.classList.remove('game-blocked');
  // aqui você inicia o jogo em modo convidado
});

document.getElementById('btn-login').addEventListener('click', () => {
  // aqui você abre seu formulário de login/cadastro
  // pode trocar o conteúdo do .modal-box por um form, por exemplo
  overlay.style.display = 'none';
  PIDiv.style.display = "flex"
  DivGame.style.display = "none"
});