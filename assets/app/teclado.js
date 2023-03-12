import { ordem } from "./main.js"
import { avancaLetra } from "./caracteres.js";

const botaoTecla = document.querySelectorAll("[data-tecla]");
const botaoApagar = document.querySelector("[data-tecla-especial=apagar]");
let posicaoDoInput = 0;

// Só libera o telcado virtual para versão Mobile/Tablet.
if (window.innerWidth < 768) {
    // Teste para impedir que o teclado do celular seja aberto quando o foco estiver no input
    let ordemDaPalavra = document.querySelectorAll(`[data-palavra]`);
        ordemDaPalavra.forEach(letra => {
            letra.addEventListener("focus", () => {
                console.log("foco")
                letra.blur();
        });
    });

    botaoTecla.forEach(teclaVirtural => {
        teclaVirtural.addEventListener("click", (evento) => {
            const letraDoTecladoVirtual = evento.target.dataset.tecla;
            
            let ordemDaPalavra = document.querySelectorAll(`[data-palavra="${ordem}"]`);
            ordemDaPalavra.forEach(letra => {
                
                if (posicaoDoInput <= 4) {
                    ordemDaPalavra[posicaoDoInput].value = letraDoTecladoVirtual;
                    if (avancaLetra(letra)) {
                        letra.nextElementSibling.focus();
                    }
                } else {
                    posicaoDoInput = 0;
                }  
            });
            posicaoDoInput += 1;
            if(posicaoDoInput == 5) {
                posicaoDoInput = 4;
            }
        });
    });
    
    botaoApagar.addEventListener("click", () => {
        let ordemDaPalavra = document.querySelectorAll(`[data-palavra="${ordem}"]`);
    
        if (ordemDaPalavra[posicaoDoInput].value == "") {   
            if (posicaoDoInput > 0 && posicaoDoInput <= 4) {
                ordemDaPalavra[posicaoDoInput].previousElementSibling.focus();
                ordemDaPalavra[posicaoDoInput-1].value = "";
                posicaoDoInput -= 1;
            } else {
                ordemDaPalavra[posicaoDoInput].value = "";
                ordemDaPalavra[posicaoDoInput].focus();
                posicaoDoInput = 0;
            }
        } else if (ordemDaPalavra[posicaoDoInput].value != "" && posicaoDoInput == 4) {
            ordemDaPalavra[posicaoDoInput].value = "";
            ordemDaPalavra[posicaoDoInput].focus();
        }                  
    });
    
    // Função necessária para zerar o contador (main.js) quando a palavra for válida.
}
export function zeraPosicaoDoInput() {
    posicaoDoInput = 0;
}