const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você tem um futuro inteiro pela frente, mas para fazer suas próprias escolhas, precisa de segurança financeira. Qual sua visão sobre isso?",
        alternativas:[    
        {
                texto: "Vou depender dos meus pais para sempre",
                afirmacao: "afirmacao"
            },
            {
                texto: "Quero conquistar minha liberdade financeira!",
                afirmacao: "afirmacao"
            }           
            
        ]
    },
    {
        enunciado: "Primeiramente, você deve estar disposto a reservar um pouco do seu dinheiro para investir.É necessário pensar no futuro. Quantos % da sua renda mensal você pretende separar para investir?",
        alternativas: [
            {
                texto:"Consigo reservar 30% da minha renda mensal para investimentos",
                afirmacao:"afirmacao"
            },
            {
                texto: "Consigo reservar no máximo 10% da minha renda. Mas me comprometo a sempre investir mais se conseguir.",
                afirmacao:"afirmacao"
            }
        ]
    },
    {
        enunciado: "Para invetirmos, temos a opção de sermos investidores mais conservadores ou mais arrojados. Os conservadores preferem investir em renda fixa e os arrojados em renda variável. Qual você prefere?",
        alternativas: [
            {
                texto:"Prefiro investir em renda fixa, pois gosto de ter mais segurança e previsibilidade nos investimentos.",
                afirmacao:"afirmacao"
            },
            {
                texto:"Meu perfil é mais arrojado, e não me importo em correr riscos em prol de uma maior rentabilidade.",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado: "De acordo com o seu perfil de investidor, escolha os tipos de investimento que você prefere investir.",
        alternativas: [
            {
                texto:"Quero investir em ações, fundos imobiliários e BDRs. Aceito o maior risco e a imprevisibilidade para aumentar meus resultados",
                afirmacao:"afirmacao"
            },
            {
                texto:"Prefiro investir em Títulos do tesouro direto, em CDBs e em LCAs e LCIs. Escolho a previsibilidade e segurança.",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado: " E pronto, agora tenha paciência e você verá seus resultados crescerem com o tempo. Lembre-se de manter constância e nunca deixar de investir todos os meses.",
        alternativas: [
            {
                texto: "Vou me comprometer a investir todo mês e com paciência esperar meus resultados.",
                afirmacao:"afirmacao"
            },
            {
                texto: "Não vou me comprometer a investir todo mês, mas vou tentar investir sempre que possível, mas vou ter em mente que os resultados podem demorar um pouco mais.",
                afirmacao:"afirmacao"
            }
            
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2027...";
    textoResultado.textContent = Eu serei um investidor de sucesso.;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();