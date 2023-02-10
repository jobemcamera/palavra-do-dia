import { sortearPalavra } from "./listaDePalavras.js";
//import { listaDePalavras } from "./listaDePalavras.js";

const letraDigitada = document.querySelectorAll('.primeira-palavra');
let palavraFormada = [];
let listaLetras = [];
const palavraSorteada = sortearPalavra();

// Evento de keypress do botão ENTER
document.addEventListener("keypress", function(evento) {
    if (evento.key == 'Enter') {
        letraDigitada.forEach((letra, index) => {
            if (!letra.value == "") {
                console.log(`index ${index} letra ${letra.value}`);
                listaLetras.push(letra.value);
                if (listaLetras[index] == palavraSorteada[index]) {
                    letraDigitada[index].classList.add('certo');
                } else if (palavraSorteada.includes(listaLetras[index])) {
                    letraDigitada[index].classList.add('errado');
                } else {
                    letraDigitada[index].classList.add('ausente');
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
    }
    palavraFormada = [];
    listaLetras = [];
});

