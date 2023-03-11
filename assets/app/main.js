import { listaDePalavrasSemAcento } from "./listaDePalavras.js";
import { sortearPalavra } from "./sortearPalavra.js";
import { zeraPosicaoDoInput } from "./teclado.js";
import { atualizaPlacarDeTentativas } from "./modal.js";
import { abreModalEstatisticas } from "./modal.js";

let palavraFormada = [];
let listaLetras = [];
export let ordem = 1;
export let desempenho = [0,0,0,0,0,0,0,0,0,0]; // 1, 2, 3, 4, 5, 6, 0, sequencia de vitorias, ,maior sequencia;
nsole.log(desempenhoDeJogos.vitorias)
export let numeroDeJogos = 0;
let palavraSorteada = sortearPalavra();  
const tecladoBotao = document.querySelectorAll("[data-tecla]");
const botaoJogarNovamente = document.querySelector("[data-jogar]");
const mensagemDeRetorno = document.querySelector(".palavra__retorno--mensagem");

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
                    bloquearInputs(ordem);
                    desempenho[0] ++;
                    desempenho[7] ++;
                    desempenho[8] = Math.max(desempenho[8], desempenho[7]);
                    numeroDeJogos ++;
                    atualizaPlacarDeTentativas();
                    setTimeout(abreModalEstatisticas, 1000); 
                    break;
                case 2:
                    mensagemDeRetornoPadrao("Fantástico!!!");
                    preencheInputsComPalavraComAcentos();
                    jogarNovamente("desbloquear");
                    bloquearInputs(ordem);
                    desempenho[1] ++;
                    desempenho[7] ++;
                    desempenho[8] = Math.max(desempenho[8], desempenho[7]);
                    numeroDeJogos ++;
                    atualizaPlacarDeTentativas();
                    setTimeout(abreModalEstatisticas, 1000); 
                    break;
                case 3:
                    mensagemDeRetornoPadrao("Genial!");
                    preencheInputsComPalavraComAcentos();
                    jogarNovamente("desbloquear");
                    bloquearInputs(ordem);
                    desempenho[2] ++;
                    desempenho[7] ++;
                    desempenho[8] = Math.max(desempenho[8], desempenho[7]);
                    numeroDeJogos ++;
                    atualizaPlacarDeTentativas();
                    setTimeout(abreModalEstatisticas, 1000); 
                    break;
                case 4:
                    mensagemDeRetornoPadrao("Impressionante!");
                    preencheInputsComPalavraComAcentos();
                    jogarNovamente("desbloquear");
                    bloquearInputs(ordem);
                    desempenho[3] ++;
                    desempenho[7] ++;
                    desempenho[8] = Math.max(desempenho[8], desempenho[7]);
                    numeroDeJogos ++;
                    atualizaPlacarDeTentativas();
                    setTimeout(abreModalEstatisticas, 1000); 
                    break;
                case 5:
                    mensagemDeRetornoPadrao("Bacana.");
                    preencheInputsComPalavraComAcentos();
                    jogarNovamente("desbloquear");
                    bloquearInputs(ordem);
                    desempenho[4] ++;
                    desempenho[7] ++;
                    desempenho[8] = Math.max(desempenho[8], desempenho[7]);
                    numeroDeJogos ++;
                    atualizaPlacarDeTentativas();
                    setTimeout(abreModalEstatisticas, 1000); 
                    break;
                case 6:
                    mensagemDeRetornoPadrao("Ufa...");
                    preencheInputsComPalavraComAcentos();
                    jogarNovamente("desbloquear");
                    desempenho[5] ++;
                    desempenho[7] ++;
                    desempenho[8] = Math.max(desempenho[8], desempenho[7]);
                    numeroDeJogos ++;
                    atualizaPlacarDeTentativas();
                    setTimeout(abreModalEstatisticas, 1000); 
                    ordem = 5;
                    break;
                    default:
            }
        } 
        
        ordem ++;
        palavraFormada = [];
        listaLetras = [];
        zeraPosicaoDoInput();
    }  

    if (ordem > 6) {
        mensagemDeRetornoPadrao(`A palavra era: ${palavraSorteada[1].toUpperCase()}`); // imprime a palavra com acento
        jogarNovamente("desbloquear");
        desempenho[6] ++; // derrota
        
        console.log(Math.max(desempenho[8], desempenho[7]))
        desempenho[7] = 0;
        numeroDeJogos ++;
        atualizaPlacarDeTentativas();
        setTimeout(abreModalEstatisticas, 1000); 
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

function bloquearInputs(ordem) {
    document.querySelectorAll(`[data-palavra="${ordem+1}"]`).forEach(campo => {
        campo.setAttribute("disabled", "disabled");
        campo.classList.add("bloqueado");
    });
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

// Evento da tecla ENTER do teclado físico
document.addEventListener("keypress", function(evento) {
    if (evento.key == 'Enter') {
        tentarPalavra();
    }
});

if (window.innerWidth < 768)  {
    // Evento da tecla ENTER do teclado virtual
    document.querySelector("[data-tecla-especial=enviar]").addEventListener("click", tentarPalavra);
}
