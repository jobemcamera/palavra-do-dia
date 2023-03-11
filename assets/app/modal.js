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

// // ------------------------ ESTATÍSTICAS ------------------------
let tamanhoDaBarra = 0;
let numeroDeVitorias = 0;
export let numeroDeJogos = 0;
export let desempenho = {
    vitorias: [0,0,0,0,0,0],
    derrotas: [0],
    sequenciaDeVitorias: [0],
    maiorSequencia: [0]
}

export function atualizaPlacarDeTentativas(vitorias, derrotas) {
    const barraDesempenho = document.querySelectorAll("[data-desempenho]");

    if (vitorias != null) {
        desempenho.vitorias[vitorias] ++;
        desempenho.sequenciaDeVitorias[0] ++;
        desempenho.maiorSequencia[0] = Math.max(desempenho.sequenciaDeVitorias[0], desempenho.maiorSequencia[0]);
    } else if (derrotas != null) {
        desempenho.derrotas[derrotas] ++;
        desempenho.sequenciaDeVitorias[0] = 0;
    }
    numeroDeJogos ++;
    

    barraDesempenho.forEach((barra, indice) => {   
        if (indice < 6) {
            numeroDeVitorias += desempenho.vitorias[indice];
            barra.innerHTML = desempenho.vitorias[indice];
            tamanhoDaBarra = (desempenho.vitorias[indice] / numeroDeJogos) * 100;
        } else {
            barra.innerHTML = desempenho.derrotas[0];
            tamanhoDaBarra = (desempenho.derrotas[0] / numeroDeJogos) * 100;
        }
        barra.style.width = `${tamanhoDaBarra}%`; 
    });

    const barraEstatisticas = document.querySelectorAll("[data-estatisticas]");
    console.log(`numero de jogos: ${numeroDeJogos}`)
    console.log(`numero de vitorias: ${numeroDeVitorias}`)
    barraEstatisticas[0].innerHTML = numeroDeJogos;
    barraEstatisticas[1].innerHTML = Math.ceil((numeroDeVitorias / numeroDeJogos) * 100) +"%";
    barraEstatisticas[2].innerHTML = desempenho.sequenciaDeVitorias[0];
    barraEstatisticas[3].innerHTML = desempenho.maiorSequencia[0];

    numeroDeVitorias = 0;
}
