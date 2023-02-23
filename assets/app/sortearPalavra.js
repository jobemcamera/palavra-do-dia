import { listaDePalavrasSemAcento } from "./listaDePalavras.js";

export function sortearPalavra() {
    const indiceSorteado = parseInt(Math.random() * listaDePalavrasSemAcento.length);
    const palavraSorteada = listaDePalavrasSemAcento[indiceSorteado];
    console.log(palavraSorteada, indiceSorteado);
    return palavraSorteada;
}