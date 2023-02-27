import { listaDePalavrasSemAcento } from "./listaDePalavras.js";
import { sortearPalavra } from "./sortearPalavra.js";

let palavraFormada = [];
let listaLetras = [];
let ordem = 1;
const palavraSorteada = sortearPalavra();
const tecladoBotao = document.querySelectorAll('[data-tecla]');
const mensagemDeRetorno = document.querySelector('.palavra__retorno--mensagem');

function tentarPalavra() {
    mensagemDeRetornoPadrao('');
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
        console.log(listaDePalavrasSemAcento.includes(listaLetras.join('')))
        console.log(palavraFormada)
        palavraFormada = [];
        listaLetras = [];
        mensagemDeRetornoPadrao("Palavra inválida.");
        return;
    } else {
        if (palavraFormada == palavraSorteada) {
            console.log('Você acertou!');
            switch (ordem) {
                case 1:
                    mensagemDeRetornoPadrao("Extraordinário!!!");
                    break;
                case 2:
                    mensagemDeRetornoPadrao("Fantástico!!!");
                    break;
                case 3:
                    mensagemDeRetornoPadrao("Genial!");
                    break;
                case 4:
                    mensagemDeRetornoPadrao("Impressionante!");
                    break;
                case 5:
                    mensagemDeRetornoPadrao("Bacana.");
                    break;
                case 6:
                    mensagemDeRetornoPadrao("Ufa...");
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
        mensagemDeRetornoPadrao(`A palavra era: ${palavraSorteada}`);
    }
}

function mudaCorDaLetraDoInput(ordemDaPalavra) {
    listaLetras.forEach((letraTeste, indice) => {
        if (letraTeste == palavraSorteada[indice]) {
            ordemDaPalavra[indice].classList.add("certo");
            mudaCorDaLetraDoTeclado(letraTeste, "certo"); 
        } else if (palavraSorteada.includes(letraTeste)) {
            ordemDaPalavra[indice].classList.add("errado");
            mudaCorDaLetraDoTeclado(letraTeste, "errado");
        } else {
            ordemDaPalavra[indice].classList.add("ausente");
            mudaCorDaLetraDoTeclado(letraTeste, "ausente");
        }
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

document.addEventListener("keypress", function(evento) {
    if (evento.key == 'Enter') {
        tentarPalavra();
    }
});
