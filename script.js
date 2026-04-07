// 1. Variáveis e Tipos de Dados
let nome = "Aprendiz"; // String
const idade = 25;       // Número (constante)
let logado = true;      // Booleano

// 2. Operações Básicas
let soma = 10 + 5;
let mensagem = "Olá, " + nome;

// 3. Estrutura Condicional (if/else)
if (idade >= 18) {
    console.log(mensagem + "! Você é maior de idade."); // Mostra no console do navegador
} else {
    console.log("Menor de idade.");
}

// 4. Estrutura de Repetição (Loop)
for (let i = 0; i < 3; i++) {
    console.log("Contagem: " + i);
}

// 5. Função Básica
function saudar(usuario) {
    return "Bem-vindo, " + usuario;
}
console.log(saudar(nome));
