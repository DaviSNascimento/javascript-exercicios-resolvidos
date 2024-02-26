function validarEmail(email) {

    let posicaoArroba = email.indexOf('@');


    let posicaoPonto = email.lastIndexOf('.');


    if (posicaoArroba < posicaoPonto && posicaoArroba > 0 && posicaoPonto > posicaoArroba + 1 && posicaoPonto < email.length - 1) {
        return true;
    } else {
        return false;
    }
}

console.log( "Resultado: fabio.colombini@dominio.com", validarEmail("fabio.colombini@dominio.com")); 
console.log("Resultado: fabio.colombini@dominio", validarEmail("fabio.colombini@dominio")); 