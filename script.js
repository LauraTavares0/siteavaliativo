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
            <img src="${p.imagem}">
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
  {
    pergunta: "Como você se imagina?",
    respostas: [
      { texto: "Criando tecnologia", tipo: "ia" },
      { texto: "Trabalhando ao ar livre", tipo: "ambiente" },
      { texto: "Garantindo segurança", tipo: "seguranca" }
    ]
  },
  {
    pergunta: "Qual área prefere?",
    respostas: [
      { texto: "TI", tipo: "ia" },
      { texto: "Biologia", tipo: "ambiente" },
      { texto: "Polícia", tipo: "seguranca" }
    ]
  }
]; 

function carregarPergunta() {
    const perguntaEl = document.getElementById("pergunta");
    const botoesEl = document.getElementById("botoes");

    if (!perguntaEl || !botoesEl) return;

    perguntaEl.innerText = quiz[perguntaAtual].pergunta;

    botoesEl.innerHTML = "";

    quiz[perguntaAtual].respostas.forEach(resposta => {
        const botao = document.createElement("button");
        botao.innerText = resposta.texto;
        botao.onclick = () => responder(resposta.tipo);
        botoesEl.appendChild(botao);
    });
}

function mostrarResultado() {
    const resultado = document.getElementById("resultado");

    if (pontos.ia > pontos.ambiente && pontos.ia > pontos.seguranca) {
        resultado.innerText = "Você deveria seguir na área de TI ";
    } else if (pontos.ambiente > pontos.seguranca) {
        resultado.innerText = "Você deveria seguir na área ambiental ";
    } else {
        resultado.innerText = "Você deveria seguir na área de segurança ";
    }
}

carregarPergunta();
