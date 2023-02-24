import { listaDePalavrasSemAcento } from "./listaDePalavras.js";
import { sortearPalavra } from "./sortearPalavra.js";

let palavraFormada = [];
let listaLetras = [];
const palavraSorteada = sortearPalavra();
let ordem = 1;
const tecladoBotao = document.querySelectorAll('[data-tecla]');

function tentarPalavra() {
    
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
        return;
    } else {
        ordem += 1;
        if (palavraFormada == palavraSorteada) {
            console.log('Você acertou!');
        } else {
            console.log('Você errou!');
        }
        palavraFormada = [];
        listaLetras = [];
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

document.addEventListener("keypress", function(evento) {
    if (evento.key == 'Enter') {
        tentarPalavra();
    }
});
