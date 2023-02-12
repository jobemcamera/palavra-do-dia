import { sortearPalavra } from "./listaDePalavras.js";

let palavraFormada = [];
let listaLetras = [];
const palavraSorteada = sortearPalavra();
let ordem = 1;

function tentarPalavra() {
    
    const ordemDaPalavra = document.querySelectorAll(`[data-palavra="${ordem}"]`);
    console.log(`Ordem: ${ordem}`)


    ordemDaPalavra.forEach((letra, index) => {
    
        if (letra.value != "") {
            console.log(`index ${index} letra ${letra.value}`);
            listaLetras.push(letra.value); 
            
            // Letra só ficará com cor diferente SE for uma palavra de 5 letras
            if (listaLetras.length == 5) {
                mudaCorDaLetra(ordemDaPalavra);
                mudaParaProximaTentativa(ordem);
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
            console.log(letraTeste, indice)
            ordemDaPalavra[indice].classList.add('certo');
        } else if (palavraSorteada.includes(letraTeste)) {
            ordemDaPalavra[indice].classList.add('errado');
            console.log(letraTeste, indice)
        } else {
            ordemDaPalavra[indice].classList.add('ausente');
            console.log(letraTeste, indice)
        }
    });
}

function mudaParaProximaTentativa(ordem) {
    if((ordem + 1) <= 6) {
        document.querySelector(`[data-palavra="${ordem+1}"]`).focus();
    }
}

document.addEventListener("keypress", function(evento) {
    if (evento.key == 'Enter') {
        tentarPalavra();
    }
});
