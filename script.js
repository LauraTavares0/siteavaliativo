const profissoes = [
{
    nome: "Especialista em IA",
    imagem:"https://conteudo.imguol.com.br/c/noticias/80/2023/03/06/homem-conversa-com-inteligencia-artificial-1678120125631_v2_900x506.png" ,
    descricao: "Cria inteligências artificiais.",
    curiosidade: "Alta demanda no futuro."
},
{
    nome: "Engenheiro Ambiental",
    imagem: "https://via.placeholder.com/150",
    descricao: "Protege o meio ambiente.",
    curiosidade: "Essencial para o planeta."
},
{
    nome: "Cibersegurança",
    imagem: "https://via.placeholder.com/150",
    descricao: "Protege sistemas.",
    curiosidade: "Muito valorizado."
}
];

// MOSTRAR PROFISSÕES
if (document.getElementById("lista")) {
    let lista = document.getElementById("lista");

    profissoes.forEach((p, i) => {
        lista.innerHTML += `
        <div class="card">
            <h3>${p.nome}</h3>
            <img src="${p.imagem}" alt="${p.nome}" width="150">
            <br>
            <button onclick="verDetalhes(${i})">Escolher</button>
        </div>
        `;
    });
}

// IR PARA DETALHES
function verDetalhes(i) {
    localStorage.setItem("profissao", i);
    window.location.href = "detalhes.html";
}

// CARREGAR DETALHES
if (document.getElementById("nome")) {
    let i = localStorage.getItem("profissao");
    let p = profissoes[i];

    document.getElementById("nome").innerText = p.nome;
    document.getElementById("imagem").src = p.imagem;
    document.getElementById("descricao").innerText = p.descricao;
    document.getElementById("curiosidade").innerText = p.curiosidade;
}

// IR QUIZ
function irQuiz() {
    window.location.href = "quiz.html";
}

// QUIZ
let perguntaAtual = 0;

let pontos = {
    ia: 0,
    ambiente: 0,
    seguranca: 0
};

const quiz = [
  {
    pergunta: "O que você gosta mais?",
    respostas: [
      { texto: "Programar", tipo: "ia" },
      { texto: "Cuidar da natureza", tipo: "ambiente" },
      { texto: "Proteger pessoas", tipo: "seguranca" }
    ]
  },

  carregarPergunta(),
  {
    pergunta: "Como você se imagina?",
    respostas: [
      { texto: "Criando tecnologia", tipo: "ia" },
      { texto: "Trabalhando ao ar livre", tipo: "ambiente" },
      { texto: "Garantindo segurança", tipo: "seguranca" }
    ]
  },

  carregarPergunta(),
  {
    pergunta: "Qual área prefere?",
    respostas: [
      { texto: "TI", tipo: "ia" },
      { texto: "Biologia", tipo: "ambiente" },
      { texto: "Polícia", tipo: "seguranca" }
    ]
  }
]; 

carregarPergunta();

function carregarPergunta() {
    if (document.getElementById("pergunta")) {
        document.getElementById("pergunta").innerText = perguntas[perguntaAtual];
    }
}

function responder(tipo) {
    pontos[tipo]++;
    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
        carregarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    let maior = Object.keys(pontos).reduce((a, b) => pontos[a] > pontos[b] ? a : b);

    let resultado = document.getElementById("resultado");

    if (maior === "ia") {
        resultado.innerText = "🤖 Especialista em IA!";
    }
    if (maior === "ambiente") {
        resultado.innerText = "🌱 Engenheiro Ambiental!";
    }
    if (maior === "seguranca") {
        resultado.innerText = "🛡️ Cibersegurança!";
    }
}

carregarPergunta();
