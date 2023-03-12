import { listaDePalavrasSemAcento } from "./listaDePalavras.js";
import { listaDePalavras } from "./listaDePalavras.js"

export function sortearPalavra() {
    const indiceSorteado = parseInt(Math.random() * listaDePalavrasSemAcento.length);
    const palavraSorteadaDaLista = listaDePalavrasSemAcento[indiceSorteado];
    
    return [palavraSorteadaDaLista, listaDePalavras[indiceSorteado]]; // retorna uma array com a palavra sem acento [0] e com a palavra com acento [1]
}
