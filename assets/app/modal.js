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

function abreModalEstatisticas() {
    modalEstatisticas.classList.toggle("escondido");
    opacidade.classList.toggle("escondido");
}
