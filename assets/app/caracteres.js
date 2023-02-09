const caracterDigitado = document.querySelectorAll('.letra');
console.log(caracterDigitado);

// Evento de keypress para impedir caracteres especiais
caracterDigitado.forEach((elemento) => {
    elemento.addEventListener("keypress", function(e) {
        if (!verificaCaracter(e)) {
            e.preventDefault();
        }
    });
});

function verificaCaracter(e) {
    const padrao = '[a-zA-Z]';
    const caracter = String.fromCharCode(e.keyCode);
    if (caracter.match(padrao)) {
        return true;
    }
}
