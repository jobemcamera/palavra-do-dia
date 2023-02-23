import { listaDePalavras } from "./listaDePalavras.js";

export function sortearPalavra() {
    const indiceSorteado = parseInt(Math.random() * listaDePalavras.length);
    const palavraSorteada = listaDePalavras[indiceSorteado].normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    console.log(palavraSorteada, indiceSorteado);
    return palavraSorteada;
}