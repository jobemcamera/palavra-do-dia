import { ordem } from "./main.js"
// import { posicao } from "./main.js";

const inputDaLetra = document.querySelectorAll('.letra');
const botaoTecla = document.querySelectorAll("[data-tecla]");
// Carregar a página com o foco no primeiro Input
inputDaLetra[0].focus();

// Evento de keypress para impedir caracteres especiais
inputDaLetra.forEach((elemento) => {
    elemento.addEventListener("keypress", function(teclaPressionada) {
        if (!verificaCaracter(teclaPressionada)) {
            teclaPressionada.preventDefault();
        } else if (verificaCaracter(teclaPressionada)) { // mudar depois para só else
            elemento.addEventListener("keydown", function(teclaPressionada) {
                if (!caracteresFuncionais(teclaPressionada.key)) {
                    if (avancaLetra(elemento)) {
                        elemento.nextElementSibling.focus();
                    }
                }
                if (voltaLetra(teclaPressionada, elemento)) {
                    elemento.previousElementSibling.focus();
                }
            });
        } 
    });
});

// ------------------------ TECLADO VIRTUAL
export let posicaoDoInput = 0;
botaoTecla.forEach(teclaVirtural => {
    teclaVirtural.addEventListener("click", (evento) => {
        const letraDoTecladoVirtual = evento.target.dataset.tecla;
        console.log(letraDoTecladoVirtual)
        
        let ordemDaPalavra = document.querySelectorAll(`[data-palavra="${ordem}"]`);
        ordemDaPalavra.forEach(letra => {
            if (posicaoDoInput <= 4) {

                ordemDaPalavra[posicaoDoInput].value = letraDoTecladoVirtual;
                // console.log(`posicaoDoInput ${posicaoDoInput}`);
                // console.log(document.activeElement)
                if (avancaLetra(letra)) {
                    letra.nextElementSibling.focus();
                }
                console.log(`posicaoDoInput ${posicaoDoInput}`);
            } else {
                posicaoDoInput = 0;
            }
        });
        // if (posicaoDoInput <= 4) {
            posicaoDoInput += 1;
        // } else {
           // posicaoDoInput = 0;
        // }
    });
});
// ------------------------

// ARRUMAR ISSO AMANHA
// let ordemDaPalavra = document.querySelectorAll(`[data-palavra="${ordem}"]`);
// ordemDaPalavra.forEach((letra, indice) => {
//         let posicao = 0;
//         botaoTecla.forEach(teclaVirtural => {
//             teclaVirtural.addEventListener("click", (evento) => {
//                 const letraDoTecladoVirtual = evento.target.dataset.tecla;
//                 // console.log(letraDoTecladoVirtual);
//                 // console.log(document.activeElement)
                
//                 ordemDaPalavra[posicao].value = letraDoTecladoVirtual;
//                 console.log(`posicao ${posicao}`);
//                 // console.log(document.activeElement)
//                 if (avancaLetra(letra)) {
//                     letra.nextElementSibling.focus();
//                 }
//                 posicao += 1;
//                 console.log(`posicao ${posicao}`);
//             });
//         });
//     });



function voltaLetra(teclaPressionada, elemento) {
    return teclaPressionada.key == 'Backspace' && elemento.value == "" && elemento.previousElementSibling != null;
}

function avancaLetra(elemento) {
    return !elemento.value == '' && elemento.nextElementSibling != null;
}

function verificaCaracter(teclaPressionada) {
    const padrao = '[a-zA-Z]';
    const caracter = String.fromCharCode(teclaPressionada.keyCode);
    if (caracter.match(padrao)) {
        return true;
    }
}

function caracteresFuncionais(caracterFuncional) {
    const listaCaracteresFuncionais = ["Enter", "Backspace", "Tab", "Space"]
    if (listaCaracteresFuncionais.includes(caracterFuncional)) {
        return true;
    } else {
        return false;
    }
}