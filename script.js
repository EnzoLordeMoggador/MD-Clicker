let emailL = document.getElementById("emailL");
let senhaL = document.getElementById("senhaL");
let pontos = document.getElementById("pontos");
let buttonclicker = document.getElementById("buttonclicker");
let PlayButton = document.getElementById("Login");
let PIDiv = document.querySelector(".PaginaInicial");
let DivGame = document.querySelector(".GameDiv");
let Cadastrese = document.getElementById("Cadastre-se");
let CadastrarDiv = document.getElementById("CadastrarDiv");
let Cadastrar = document.getElementById("Cadastrar");
let LoginDiv = document.getElementById("LoginDiv");
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
let priceRebirthUPG = document.querySelector(".priceRebirthUPG");

let user = null;
let ClickValue = 1;
let priceClick = 10;
let priceFoguetes = 200;
let priceFumacas = 500;
let priceOruam = 10000;
let priceRebirth = 100000;
let ClicksPerSecond = 0;
let ClicksCount = 0;
let BonusFumaca = 20;
let FumacaUpgrade = false;
let OruamActive = false;
let intervalCPS = null;

const { createClient } = supabase;
const supabaseClient = createClient(
  "https://cmkxscnpxbnoujdzsycy.supabase.co", 
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNta3hzY25weGJub3VqZHpzeWN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExODIwNzYsImV4cCI6MjA5Njc1ODA3Nn0.t_3MWqfpVsCOMrwGfZu5dDHMpl-dCR6GnwVLPHJZclA"
);

function atualizarUI() {
  CDN.textContent = ClicksCount.toString();
  priceOruamUPG.textContent = priceOruam.toFixed(1);
  priceClickUPG.textContent = priceClick.toFixed(1);
  priceFoguetesUPG.textContent = priceFoguetes.toFixed(1);
  priceFumacasUPG.textContent = priceFumacas.toFixed(1);
  priceRebirthUPG.textContent = priceRebirth.toFixed(1);
  SCV.textContent = ClickValue.toString();
  if (FumacaUpgrade) canhaoDnevoa.style.display = "flex";
  if (OruamActive) OruamPNG.style.display = "flex";
}
atualizarUI();

function Pulsar() {
  buttonclicker.style.width = "12vw";
  buttonclicker.style.height = "22vh";
  setTimeout(() => {
    buttonclicker.style.width = "18vw";
    buttonclicker.style.height = "28vh";
  }, 100);
  setTimeout(() => {
    buttonclicker.style.width = "15vw";
    buttonclicker.style.height = "25vh";
  }, 100);
}

function SoltarFumaca() {
  ClicksCount++;
  let valor = parseFloat(pontos.innerText);
  CDN.textContent = ClicksCount.toString();
  if (ClicksCount >= 10) {
    ClicksCount = 0;
    pontos.innerText = (valor + BonusFumaca).toFixed(1);
  }
}

function iniciarTimerCPS() {
  if (intervalCPS) clearInterval(intervalCPS);
  if (ClicksPerSecond > 0) {
    intervalCPS = setInterval(() => {
      let CPS = parseFloat(pontos.innerText);
      pontos.innerText = (CPS + ClicksPerSecond).toFixed(1);
      Pulsar();
    }, 1000);
  }
}

buttonclicker.addEventListener("click", () => {
  let valor = parseFloat(pontos.innerText);
  pontos.innerText = (valor + ClickValue).toFixed(1);
  if (FumacaUpgrade) SoltarFumaca();
  Pulsar();
});

clickupg.addEventListener("click", () => {
  let value = parseFloat(pontos.innerText);
  if (value >= priceClick) {
    pontos.innerText = (value - priceClick).toFixed(1);
    ClickValue += 1;
    priceClick *= 1.2;
    atualizarUI();
  }
});

Foguetes.addEventListener("click", () => {
  let valor = parseFloat(pontos.innerText);
  if (valor >= priceFoguetes) {
    pontos.innerText = (valor - priceFoguetes).toFixed(1);
    ClicksPerSecond += 1;
    priceFoguetes *= 1.15;
    atualizarUI();
    iniciarTimerCPS();
  }
});

Fumacas.addEventListener("click", () => {
  let valor = parseFloat(pontos.innerText);
  if (valor >= priceFumacas) {
    pontos.innerText = (valor - priceFumacas).toFixed(1);
    ClicksCount = 0;
    FumacaUpgrade = true;
    priceFumacas *= 1.4;
    BonusFumaca *= 1.5;
    atualizarUI();
  }
});

Oruam.addEventListener("click", () => {
  let valor = parseFloat(pontos.innerText);
  if (valor >= priceOruam && OruamActive == false) {
    pontos.innerText = (valor - priceOruam).toFixed(1);
    OruamActive = true;
    ClickValue = ClickValue * 2;
    BonusFumaca = BonusFumaca * 2;
    ClicksPerSecond = ClicksPerSecond * 2;
    atualizarUI();
  }
});

Cadastrese.addEventListener("click", () => {
  PlayButton.style.display = "none";
  Cadastrese.style.display = "none";
  Cadastrar.style.display = "flex";
  LoginDiv.style.display = "none";
  CadastrarDiv.style.display = "inline-flex";
  backcad.style.display = "flex";
});

backcad.addEventListener("click", () => {
  PlayButton.style.display = "block";
  Cadastrese.style.display = "block";
  Cadastrar.style.display = "none";
  LoginDiv.style.display = "block";
  CadastrarDiv.style.display = "none";
  backcad.style.display = "none";
});

Config.addEventListener("mouseenter", () => document.body.classList.add("configAberto"));
Config.addEventListener("mouseleave", () => document.body.classList.remove("configAberto"));

PlayButton.addEventListener("click", async () => {
  if (emailL.value === "" || senhaL.value === "") {
    alert("Coloque os dados de login!");
    return;
  }

  try {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: emailL.value,
      password: senhaL.value
    });

    if (error || !data.user) {
      alert("E-mail ou senha incorretos!");
      return;
    }

    user = data.user.id; // agora é o uuid do Supabase Auth
    const nome = data.user.user_metadata?.nome || "Jogador";
    alert(`Pegue md coins a rodo, ${nome}!`);

    const { data: leaderData } = await supabaseClient
      .from("leader")
      .select("*")
      .eq("login_id", user);

    if (leaderData && leaderData.length > 0) {
      const l = leaderData[0];
      pontos.innerText = l.points || 0;
      ClickValue = l.click_value || 1;
      priceClick = l.price_click || 10;
      priceFoguetes = l.price_foguetes || 200;
      priceFumacas = l.price_fumacas || 500;
      priceOruam = l.price_oruam || 10000;
      ClicksPerSecond = l.cps || 0;
      BonusFumaca = l.bonus_fumaca || 20;
      FumacaUpgrade = l.fumaca_upgrade || false;
      OruamActive = l.oruam_active || false;

      atualizarUI();
      iniciarTimerCPS();
    } else {
      pontos.innerText = 0;
      atualizarUI();
    }

    PIDiv.style.display = "none";
    DivGame.style.display = "flex";
  } catch (err) {
    console.error(err);
    alert("Erro ao tentar realizar login.");
  }
});

async function buscarRanking() {
  // 1. Busca os líderes ordenados por pontos
  const { data: leaderData, error: leaderError } = await supabaseClient
    .from("leader")
    .select("login_id, points")
    .order("points", { ascending: false })
    .limit(10);

  if (leaderError || !leaderData) {
    console.error("Erro ao carregar ranking:", leaderError?.message);
    return [];
  }

  // 2. Busca os nomes de todos os usuários retornados
  const userIds = leaderData.map(item => item.login_id);
  const { data: profilesData } = await supabaseClient
    .from("profiles")
    .select("id, nome")
    .in("id", userIds);

  // 3. Mapeia os nomes com os pontos
  const profilesMap = (profilesData || []).reduce((acc, profile) => {
    acc[profile.id] = profile.nome;
    return acc;
  }, {});

  return leaderData.map((item, index) => ({
    posicao: index + 1,
    nome: profilesMap[item.login_id] || "Jogador",
    pontos: item.points
  }));
}

async function salvarMoedas() {
  if (!user) return;

  const dadosJogo = {
    login_id: user,
    points: Math.floor(parseFloat(pontos.innerText) || 0),
    click_value: Math.floor(ClickValue),
    price_click: Math.floor(priceClick),
    price_foguetes: Math.floor(priceFoguetes),
    price_fumacas: Math.floor(priceFumacas),
    price_oruam: Math.floor(priceOruam),
    cps: Math.floor(ClicksPerSecond),
    bonus_fumaca: Math.floor(BonusFumaca),
    fumaca_upgrade: FumacaUpgrade,
    oruam_active: OruamActive
  };

  const { data, error } = await supabaseClient
    .from("leader")
    .upsert(dadosJogo, { onConflict: "login_id" });

  if (error) {
    console.error("Erro ao salvar no Supabase:", error.message);
  } else {
    console.log("Progresso salvo com sucesso!");
  }
}

setInterval(() => {
  if (user) salvarMoedas();
}, 10000);

Cadastrar.addEventListener("click", async () => {
  if (userc.value === "" || emailc.value === "" || senhac.value === "") {
    alert("Preencha todos os dados!");
    return;
  }

  // 1. Criar o usuário no Auth
  const { data, error } = await supabaseClient.auth.signUp({
    email: emailc.value,
    password: senhac.value,
    options: { data: { nome: userc.value } }
  });

  if (error) {
    alert("Erro ao cadastrar: " + error.message);
    return;
  }

  // 2. Criar a linha na tabela 'profiles' para vincular o nome
  if (data.user) {
    const { error: profileError } = await supabaseClient
      .from("profiles")
      .insert([{ id: data.user.id, nome: userc.value }]);

    if (profileError) {
      console.error("Erro ao salvar perfil:", profileError.message);
    }
  }

  alert("Cadastrado com sucesso!");
  userc.value = "";
  emailc.value = "";
  senhac.value = "";
  backcad.click();
});

let RankingBtn = document.getElementById("RankingBtn");
let RankingOverlay = document.getElementById("RankingOverlay");
let RankingClose = document.getElementById("RankingClose");
let RankingLista = document.getElementById("RankingLista");

RankingBtn.addEventListener("click", async () => {
  RankingOverlay.classList.add("aberto");
  RankingLista.innerHTML = `<p class="ranking-vazio">Carregando ranking...</p>`;

  const dados = await buscarRanking();
  renderizarRanking(dados);
});

RankingClose.addEventListener("click", () => {
  RankingOverlay.classList.remove("aberto");
});

RankingOverlay.addEventListener("click", (e) => {
  if (e.target === RankingOverlay) {
    RankingOverlay.classList.remove("aberto");
  }
});

function renderizarRanking(dados) {
  if (!Array.isArray(dados) || dados.length === 0) {
    RankingLista.innerHTML = `<p class="ranking-vazio">Ninguém no ranking ainda.</p>`;
    return;
  }

  RankingLista.innerHTML = dados.map((item) => {
    const classeTop = item.posicao === 1 ? "top1" : item.posicao === 2 ? "top2" : item.posicao === 3 ? "top3" : "";
    return `
      <div class="ranking-item ${classeTop}">
        <span class="posicao">${item.posicao}º</span>
        <span class="nome">${item.nome}</span>
        <span class="pontos">${item.pontos}</span>
      </div>
    `;
  }).join("");
}


const overlay = document.getElementById('modal-overlay');

document.getElementById('btn-guest').addEventListener('click', () => {
  overlay.style.display = 'none';
  PIDiv.style.display = 'none';
  DivGame.style.display = 'flex';
});

document.getElementById('btn-login').addEventListener('click', () => {
  overlay.style.display = 'none';
  PIDiv.style.display = 'flex';
  DivGame.style.display = 'none';
});
