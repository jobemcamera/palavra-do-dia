// import { desempenho } from "./main.js";
// import { numeroDeJogos } from "./main.js";

// -------------------------- MODAL DÚVIDAS --------------------------

const abrirModalDuvidas = document.querySelector("#botao-modal-duvidas");
const modalDuvidas = document.querySelector("#modal-duvidas");
const opacidade = document.querySelector("#opacidade");
const fecharModalDuvidas = document.querySelector("#botao-fechar-duvidas");

[abrirModalDuvidas, fecharModalDuvidas].forEach(elemento => {
    elemento.addEventListener("click", abreModalDuvidas);
});

function abreModalDuvidas() {
    modalDuvidas.classList.toggle("escondido");
    opacidade.classList.toggle("escondido");
}

// ------------------------ MODAL ESTATÍSTICAS ------------------------

const abrirModalEstatisticas = document.querySelector("#botao-modal-estatisticas");
const modalEstatisticas = document.querySelector("#modal-estatisticas");
const fecharModalEstatisticas = document.querySelector("#botao-fechar-estatisticas");

[abrirModalEstatisticas, fecharModalEstatisticas].forEach(elemento => {
    elemento.addEventListener("click", abreModalEstatisticas);
});

export function abreModalEstatisticas() {
    modalEstatisticas.classList.toggle("escondido");
    opacidade.classList.toggle("escondido");
}

// ----------------- ESTATÍSTICAS / DESEMPENHO -----------------------
// ----------------------- LOCALSTORAGE ------------------------------
const barraEstatisticas = document.querySelectorAll("[data-estatisticas]");
const barraDesempenho = document.querySelectorAll("[data-desempenho]");
let tamanhoDaBarra = 0;
let recebeBanco = [];
export let desempenho = {
    vitorias: [0,0,0,0,0,0],
    numeroDeVitorias: [0],
    derrotas: [0],
    numeroDeJogos: [0],
    sequenciaDeVitorias: [0],
    maiorSequencia: [0]
}

if (localStorage.hasOwnProperty("Desempenho")) { // Se existe banco, pegar os valores e jogar no modal.
    recebeBanco = JSON.parse(localStorage.getItem("Desempenho"));

    barraDesempenho.forEach((barra, indice) => {   
        if (indice < 6) {
            barra.innerHTML = recebeBanco.vitorias[indice];
            tamanhoDaBarra = (recebeBanco.vitorias[indice] / recebeBanco.numeroDeJogos[0]) * 100;
        } else {
            barra.innerHTML = recebeBanco.derrotas[0];
            tamanhoDaBarra = (recebeBanco.derrotas[0] / recebeBanco.numeroDeJogos[0]) * 100;
        }
        barra.style.width = `${tamanhoDaBarra}%`; 
    });

    barraEstatisticas[0].innerHTML = recebeBanco.numeroDeJogos[0];
    barraEstatisticas[1].innerHTML = Math.ceil((recebeBanco.numeroDeVitorias[0] / recebeBanco.numeroDeJogos[0]) * 100) +"%";
    barraEstatisticas[2].innerHTML = recebeBanco.sequenciaDeVitorias[0];
    barraEstatisticas[3].innerHTML = recebeBanco.maiorSequencia[0];
}

export function atualizaPlacarDeTentativas(vitorias, derrotas) {

    recebeBanco = JSON.parse(localStorage.getItem("Desempenho")); // Recebe o banco

    if (localStorage.hasOwnProperty("Desempenho")) { // Se existe banco, pega os valores e adiciona com os que virão do atualizaPlacarDeTentativas
        
        if (vitorias >= 0 && derrotas == null) { // Se for vitória
            
            for (let i=0; i < desempenho.vitorias.length; i++) {
                desempenho.vitorias[i] = recebeBanco.vitorias[i];
            }

            desempenho.vitorias[vitorias] ++;

            desempenho.derrotas[0] = recebeBanco.derrotas[0];
            
            desempenho.sequenciaDeVitorias[0] = recebeBanco.sequenciaDeVitorias[0];
            desempenho.sequenciaDeVitorias[0] ++;

            desempenho.maiorSequencia[0] = recebeBanco.maiorSequencia[0];
            desempenho.maiorSequencia[0] = Math.max(desempenho.sequenciaDeVitorias[0], desempenho.maiorSequencia[0]);

        } else if (derrotas == 0 && vitorias == null) { // Se for derrota
            
            desempenho.derrotas[derrotas] = recebeBanco.derrotas[derrotas];
            desempenho.derrotas[derrotas] ++;

            desempenho.sequenciaDeVitorias[0] = recebeBanco.sequenciaDeVitorias[0];
            desempenho.sequenciaDeVitorias[0] = 0;  
        }

        desempenho.numeroDeVitorias[0] = recebeBanco.numeroDeVitorias[0];
        desempenho.numeroDeVitorias[0] = desempenho.vitorias.reduce((soma, i) => soma + i);

        desempenho.numeroDeJogos[0] = recebeBanco.numeroDeJogos[0];
        desempenho.numeroDeJogos[0] ++;
        
        barraDesempenho.forEach((barra, indice) => {   
            if (indice < 6) {
                barra.innerHTML = desempenho.vitorias[indice];
                tamanhoDaBarra = (desempenho.vitorias[indice] / desempenho.numeroDeJogos[0]) * 100;
            } else {
                barra.innerHTML = desempenho.derrotas[0];
                tamanhoDaBarra = (desempenho.derrotas[0] / desempenho.numeroDeJogos[0]) * 100;
            }
            barra.style.width = `${tamanhoDaBarra}%`; 
        });

        barraEstatisticas[0].innerHTML = desempenho.numeroDeJogos[0];
        barraEstatisticas[1].innerHTML = Math.ceil((desempenho.numeroDeVitorias[0] / desempenho.numeroDeJogos[0]) * 100) +"%";
        barraEstatisticas[2].innerHTML = desempenho.sequenciaDeVitorias[0];
        barraEstatisticas[3].innerHTML = desempenho.maiorSequencia[0];

        localStorage.setItem("Desempenho", JSON.stringify(desempenho)); // Manda para o banco

    } else { // Se não existe banco, cria os primeiros valores

        if (vitorias != null) {
            desempenho.vitorias[vitorias] ++;
            desempenho.sequenciaDeVitorias[0] ++;
            desempenho.maiorSequencia[0] = Math.max(desempenho.sequenciaDeVitorias[0], desempenho.maiorSequencia[0]);
        } else if (derrotas != null) {
            desempenho.derrotas[derrotas] ++;
            desempenho.sequenciaDeVitorias[0] = 0;
        }
        desempenho.numeroDeVitorias[0] = desempenho.vitorias.reduce((soma, i) => soma + i);
        desempenho.numeroDeJogos[0] ++;
        
        barraDesempenho.forEach((barra, indice) => {   
            if (indice < 6) {
                barra.innerHTML = desempenho.vitorias[indice];
                tamanhoDaBarra = (desempenho.vitorias[indice] / desempenho.numeroDeJogos[0]) * 100;
            } else {
                barra.innerHTML = desempenho.derrotas[0];
                tamanhoDaBarra = (desempenho.derrotas[0] / desempenho.numeroDeJogos[0]) * 100;
            }
            barra.style.width = `${tamanhoDaBarra}%`; 
        });
        
        localStorage.setItem("Desempenho", JSON.stringify(desempenho)); // Manda para o banco
        
        barraEstatisticas[0].innerHTML = desempenho.numeroDeJogos[0];
        barraEstatisticas[1].innerHTML = Math.ceil((desempenho.numeroDeVitorias[0] / desempenho.numeroDeJogos[0]) * 100) +"%";
        barraEstatisticas[2].innerHTML = desempenho.sequenciaDeVitorias[0];
        barraEstatisticas[3].innerHTML = desempenho.maiorSequencia[0];
    }  
}
