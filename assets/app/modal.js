import { desempenho } from "./main.js";
import { numeroDeJogos } from "./main.js";

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

export function atualizaPlacarDeTentativas() {
    const barraDesempenho = document.querySelectorAll("[data-desempenho]");
    barraDesempenho.forEach((barra, indice) => {
        if (indice >= 0 && indice < (desempenho.length - 4)) {
            numeroDeVitorias += desempenho[indice];
        }
        barra.innerHTML = desempenho[indice];
        tamanhoDaBarra = (desempenho[indice] / numeroDeJogos) * 100;
        barra.style.width = `${tamanhoDaBarra}%`;
    });

    const barraEstatisticas = document.querySelectorAll("[data-estatisticas]");
    console.log(`numero de jogos: ${numeroDeJogos}`)
    console.log(`numero de vitorias: ${numeroDeVitorias}`)
    barraEstatisticas[0].innerHTML = numeroDeJogos;
    barraEstatisticas[1].innerHTML = Math.ceil((numeroDeVitorias / numeroDeJogos) * 100) +"%";
    barraEstatisticas[2].innerHTML = desempenho[7];
    barraEstatisticas[3].innerHTML = desempenho[8];
    numeroDeVitorias = 0;
}
