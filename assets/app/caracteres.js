const caracterDigitado = document.querySelectorAll('.letra');

// Carregar a página com o foco no primeiro Input
caracterDigitado[0].focus();

// Evento de keypress para impedir caracteres especiais
caracterDigitado.forEach((elemento) => {
    elemento.addEventListener("keypress", function(e) {
        if (!verificaCaracter(e)) {
            e.preventDefault();
        } else {
            elemento.addEventListener("keydown", function(tecla) {
                if (!caracteresFuncionais(tecla.key)) {
                    if (avancaLetra(elemento)) {
                        elemento.nextElementSibling.focus();
                    }
                }
                if (voltaLetra(tecla, elemento)) {
                    elemento.previousElementSibling.focus();
                }
            })
        }   
    });
});

function voltaLetra(tecla, elemento) {
    return tecla.key == 'Backspace' && elemento.value == "" && elemento.previousElementSibling != null;
}

function avancaLetra(elemento) {
    return !elemento.value == '' && elemento.nextElementSibling != null;
}

function verificaCaracter(e) {
    const padrao = '[a-zA-Z]';
    const caracter = String.fromCharCode(e.keyCode);
    if (caracter.match(padrao)) {
        return true;
    }
}

function caracteresFuncionais(caracterFuncional) {
    const listaCaracteresFuncionais = ["Enter", "Backspace", "Tab", "Space"]
    if (listaCaracteresFuncionais.includes(caracterFuncional)) {
        return true;
    } else {
        return false;
    }
}