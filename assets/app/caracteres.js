const inputDaLetra = document.querySelectorAll('.letra');
// Carregar a página com o foco no primeiro Input
inputDaLetra[0].focus();

// Evento de keypress para impedir caracteres especiais
inputDaLetra.forEach((elemento) => {
    elemento.addEventListener("keypress", function(teclaPressionada) {
        if (verificaCaracter(teclaPressionada) == false) {
            teclaPressionada.preventDefault();
        } else if (verificaCaracter(teclaPressionada)) { // mudar depois para só else
            elemento.addEventListener("keydown", function(teclaPressionada) {
                if (caracteresFuncionais(teclaPressionada.key) == false) {
                    if (avancaLetra(elemento)) {
                        elemento.nextElementSibling.focus();
                    }
                }
                if (voltaLetra(teclaPressionada, elemento)) {
                    elemento.previousElementSibling.focus();
                }
            });
        } 
    });
});

function voltaLetra(teclaPressionada, elemento) {
    return teclaPressionada.key == 'Backspace' && elemento.value == "" && elemento.previousElementSibling != null;
}

export function avancaLetra(elemento) {
    return elemento.value != '' && elemento.nextElementSibling != null;
}

function verificaCaracter(teclaPressionada) {
    const padrao = '[a-zA-Z]';
    const caracter = String.fromCharCode(teclaPressionada.keyCode);
    if (caracter.match(padrao)) {
        return true;
    } else {
        return false;
    } 
}

function caracteresFuncionais(caracterFuncional) {
    const listaCaracteresFuncionais = ["Enter", "Backspace"];
    if (listaCaracteresFuncionais.includes(caracterFuncional)) {
        return true;
    } else {
        return false;
    }
}
