const listaDePalavras = [
    "sagaz", "amago", "negro", "exito", "termo", "senso"
];

export function sortearPalavra() {
    const indiceSorteado = parseInt(Math.random() * listaDePalavras.length);
    const palavraSorteada = listaDePalavras[indiceSorteado];
    console.log(palavraSorteada, indiceSorteado);
    return palavraSorteada;
}

