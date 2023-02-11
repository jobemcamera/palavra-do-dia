import { sortearPalavra } from "./listaDePalavras.js";

let palavraFormada = [];
let listaLetras = [];
const palavraSorteada = sortearPalavra();
let ordem = 1;

function ordemDaTentativaDaPalavra() {
    
    const ordemDaPalavra = document.querySelectorAll(`[data-palavra="${ordem}"]`);
    ordemDaPalavra.forEach((letra, index) => {
        if (!letra.value == "") {
            console.log(`index ${index} letra ${letra.value}`);
            listaLetras.push(letra.value);
            if (listaLetras[index] == palavraSorteada[index]) {
                ordemDaPalavra[index].classList.add('certo');
            } else if (palavraSorteada.includes(listaLetras[index])) {
                ordemDaPalavra[index].classList.add('errado');
            } else {
                ordemDaPalavra[index].classList.add('ausente');
            }
        } else {
            console.log(`index ${index} vazio`);
        }
                    
    });

    palavraFormada = listaLetras.join('');
    console.log(`\n A palavra foramda é: ${palavraFormada}`);

    if (palavraFormada == palavraSorteada) {
        console.log('Você acertou!');
    } else {
        console.log('Você errou!');
    }     

    palavraFormada = [];
    listaLetras = [];
    ordem += 1;
}

document.addEventListener("keypress", function(evento) {
    if (evento.key == 'Enter') {
        ordemDaTentativaDaPalavra();
    }
});
