let numero = window.prompt("Digite um número: ");
let resultado = dobro(numero);
window.alert(resultado);

function dobro(numero) {
    numero = Number(numero);
    if (numero > 0) {
        return (numero - 1) * 2;
    } else {
        return "Só é aceito números positivos maiores que zero";
    }
}