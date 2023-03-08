import { listaDePalavrasSemAcento } from "./listaDePalavras.js";
import { sortearPalavra } from "./sortearPalavra.js";

let palavraFormada = [];
let listaLetras = [];
export let ordem = 1;
let palavraSorteada = sortearPalavra();  
const tecladoBotao = document.querySelectorAll("[data-tecla]");
const mensagemDeRetorno = document.querySelector(".palavra__retorno--mensagem");
const botaoJogarNovamente = document.querySelector("[data-jogar]");

function tentarPalavra() {
    mensagemDeRetornoPadrao("");
    mensagemDeRetorno.style.backgroundColor = "transparent";
    const ordemDaPalavra = document.querySelectorAll(`[data-palavra="${ordem}"]`);
    console.log(`Ordem: ${ordem}`);

    ordemDaPalavra.forEach((letra, index) => {
        if (letra.value != "") {
            console.log(`index ${index} letra ${letra.value}`);
            listaLetras.push(letra.value); 
            
            if (listaLetras.length == 5 && listaDePalavrasSemAcento.includes(listaLetras.join(''))) {
                mudaCorDaLetraDoInput(ordemDaPalavra);
                bloquearLiberarInput(ordemDaPalavra);
                mudaParaProximaTentativa();
            } 
                 
        } else {
           console.log(`index ${index} vazio`);
        }                   
    });

    palavraFormada = listaLetras.join('');
    console.log(`\n A palavra foramda é: ${palavraFormada}`);

    
    if (palavraFormada.length < 5 || (listaDePalavrasSemAcento.includes(listaLetras.join('')) == false)) {
        console.log(palavraFormada)

        palavraFormada = [];
        listaLetras = [];
        mensagemDeRetornoPadrao("Palavra inválida.");
    } else {
        if (palavraFormada == palavraSorteada[0]) {
            console.log('Você acertou!');
            switch (ordem) {
                case 1:
                    mensagemDeRetornoPadrao("Extraordinário!!!");
                    preencheInputsComPalavraComAcentos();
                    jogarNovamente("desbloquear");
                    break;
                case 2:
                    mensagemDeRetornoPadrao("Fantástico!!!");
                    preencheInputsComPalavraComAcentos();
                    jogarNovamente("desbloquear");
                    break;
                case 3:
                    mensagemDeRetornoPadrao("Genial!");
                    preencheInputsComPalavraComAcentos();
                    jogarNovamente("desbloquear");
                    break;
                case 4:
                    mensagemDeRetornoPadrao("Impressionante!");
                    preencheInputsComPalavraComAcentos();
                    jogarNovamente("desbloquear");
                    break;
                case 5:
                    mensagemDeRetornoPadrao("Bacana.");
                    preencheInputsComPalavraComAcentos();
                    jogarNovamente("desbloquear");
                    break;
                case 6:
                    mensagemDeRetornoPadrao("Ufa...");
                    preencheInputsComPalavraComAcentos();
                    jogarNovamente("desbloquear");
                    ordem = 5;
                    break;
                    default:
            }
        } 
        
        ordem += 1;
        palavraFormada = [];
        listaLetras = [];
    }  

    if (ordem > 6) {
        mensagemDeRetornoPadrao(`A palavra era: ${palavraSorteada[1].toUpperCase()}`); // imprime a palavra com acento
        jogarNovamente("desbloquear");
    }
}

// Botão NOVO JOGO ativo
botaoJogarNovamente.addEventListener("click", () => {
    ordem = 1;
    mensagemDeRetornoPadrao("");
    mensagemDeRetorno.style.backgroundColor = "transparent"; 
    palavraSorteada = sortearPalavra();
    jogarNovamente("bloquear");
    novoJogo();
});

function mudaCorDaLetraDoInput(ordemDaPalavra) {
    listaLetras.forEach((letraTeste, indice) => {
        if (letraTeste == palavraSorteada[0][indice]) {
            ordemDaPalavra[indice].classList.add("certo");
            mudaCorDaLetraDoTeclado(letraTeste, "certo"); 
        } else if (palavraSorteada[0].includes(letraTeste)) {
            ordemDaPalavra[indice].classList.add("errado");
            mudaCorDaLetraDoTeclado(letraTeste, "errado");
        } else {
            ordemDaPalavra[indice].classList.add("ausente");
            mudaCorDaLetraDoTeclado(letraTeste, "ausente");
        }
    });
}

function preencheInputsComPalavraComAcentos() {
    document.querySelectorAll(`[data-palavra="${ordem}"]`).forEach((letra, posicao) => {
        letra.value = palavraSorteada[1][posicao];
    });
}

function mudaCorDaLetraDoTeclado(letraTeste, condicao) {
    if (condicao == "certo") {
        tecladoBotao.forEach(tecla => {
                if (tecla.dataset.tecla == letraTeste) {
                    tecla.classList.remove("errado");
                    tecla.classList.add("certo");
                } else if (tecla.dataset.tecla == letraTeste && tecla.classList.contains("errado")) {
                    tecla.classList.remove("errado");
                    tecla.classList.add("certo");
                }
            });
    } else if (condicao == "errado") {
        tecladoBotao.forEach(tecla => {
            if (tecla.dataset.tecla == letraTeste && tecla.classList.contains("certo") == false) {
                tecla.classList.add("errado");
            } 
        });
    } else if (condicao == "ausente") {
        tecladoBotao.forEach(tecla => {
            if (tecla.dataset.tecla == letraTeste) {
                tecla.classList.add("ausente");
            }
        });
    }
}

function mudaParaProximaTentativa() {
    if((ordem + 1) <= 6) {
        document.querySelector(`[data-palavra="${ordem+1}"]`).focus();
    }
}

function bloquearLiberarInput(ordemDaPalavra) {
    ordemDaPalavra.forEach((letraDaTentativaAnterior => {
        letraDaTentativaAnterior.disabled = "true"; 
    }));
    document.querySelectorAll(`[data-palavra="${ordem+1}"]`).forEach(letraDaProximaTentativa => {
        letraDaProximaTentativa.removeAttribute("disabled");
        letraDaProximaTentativa.classList.remove("bloqueado");
    });
}

function mensagemDeRetornoPadrao(texto) {
    mensagemDeRetorno.innerText = texto;
    mensagemDeRetorno.style.backgroundColor = "#367cec";
}

function jogarNovamente(acao) {
    if (acao == "bloquear") {
        botaoJogarNovamente.setAttribute("disabled", "disabled");
        botaoJogarNovamente.classList.add("bloqueado");
        botaoJogarNovamente.style.cursor = "default";
    } else if (acao == "desbloquear") {
        botaoJogarNovamente.removeAttribute("disabled");
        botaoJogarNovamente.classList.remove("bloqueado");
        botaoJogarNovamente.style.cursor = "pointer";
    }
}

function novoJogo() {
    document.querySelectorAll("[data-palavra]").forEach((letra, posicao) => {
        letra.value = "";
        letra.classList.remove("certo");
        letra.classList.remove("errado");
        letra.classList.remove("ausente");
        if (posicao <= 4) {
            letra.removeAttribute("disabled");
        } else {
            letra.classList.add("bloqueado");
            letra.setAttribute("disabled", "disabled");
        }
    });

    tecladoBotao.forEach(tecla => {
        tecla.classList.remove("certo");
        tecla.classList.remove("errado");
        tecla.classList.remove("ausente");
    });
}

// Evento da tecla ENTER
document.addEventListener("keypress", function(evento) {
    if (evento.key == 'Enter') {
        tentarPalavra();
    }
});
