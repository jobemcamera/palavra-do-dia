import { sortearPalavra } from "./sortearPalavra.js";

let palavraFormada = [];
let listaLetras = [];
const palavraSorteada = sortearPalavra();
let ordem = 1;

function tentarPalavra() {
    
    const ordemDaPalavra = document.querySelectorAll(`[data-palavra="${ordem}"]`);
    console.log(`Ordem: ${ordem}`);

    ordemDaPalavra.forEach((letra, index) => {
        if (letra.value != "") {
            console.log(`index ${index} letra ${letra.value}`);
            listaLetras.push(letra.value); 
            
            if (listaLetras.length == 5) {
                mudaCorDaLetra(ordemDaPalavra);
                bloquearLiberarInput(ordemDaPalavra);
                mudaParaProximaTentativa();
            } 
                 
        } else {
           console.log(`index ${index} vazio`);
        }                   
    });

    palavraFormada = listaLetras.join('');
    console.log(`\n A palavra foramda é: ${palavraFormada}`);

    
    if (palavraFormada.length < 5) {
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

function mudaCorDaLetra(ordemDaPalavra) {
    listaLetras.forEach((letraTeste, indice) => {
        if (letraTeste == palavraSorteada[indice]) {
            ordemDaPalavra[indice].classList.add('certo');
        } else if (palavraSorteada.includes(letraTeste)) {
            ordemDaPalavra[indice].classList.add('errado');
        } else {
            ordemDaPalavra[indice].classList.add('ausente');
        }
    });
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
