const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você imagina sua vida sem a IA?",
        alternativas: ["SIM","NÃO"],
    },

{
   enunciado: "Você já utilizou a IA como ferramenta de estudo ou apenas para resolver as tarefas?",
   alternativas: ["SIM","NÃO"],
},

{
    enunciado: "A IA te assusta em algum aspecto? Como na criação de imagens/vídeos?",
   alternativas: ["SIM","NÃO"],
},

{
    enunciado: "Você acha que a IA pode se tornar uma ameaça para a humanidade?",
   alternativas: ["SIM","NÃO"],
},

{
    enunciado: "Você acredita que a  IA está deixando as pessoas mais dependentes da tecnologia?",
   alternativas: ["SIM","NÃO"],
},

{
    enunciado: "Você já preferiu conversar com uma IA do que com uma pessoa/amigo?",
   alternativas: ["SIM","NÃO"],
},
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaatual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();