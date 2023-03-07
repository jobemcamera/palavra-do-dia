const abrirModalDuvidas = document.querySelector("#botao-modal-duvidas");
const modalDuvidas = document.querySelector("#modal-duvidas");
const opacidade = document.querySelector("#opacidade");

function mudaOpacidade() {
    modalDuvidas.classList.toggle("escondido");
    opacidade.classList.toggle("escondido");
}

[abrirModalDuvidas, modalDuvidas, opacidade].forEach(elemento => {
    elemento.addEventListener("click", mudaOpacidade);
})