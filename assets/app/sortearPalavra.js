import { listaDePalavrasSemAcento } from "./listaDePalavras.js";

export function sortearPalavra() {
    const indiceSorteado = parseInt(Math.random() * listaDePalavrasSemAcento.length);
    const palavraSorteadaDaLista = listaDePalavrasSemAcento[indiceSorteado];
    console.log(palavraSorteadaDaLista, indiceSorteado);
    return palavraSorteadaDaLista;
}
