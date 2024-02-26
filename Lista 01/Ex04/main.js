
function gerarEmail(nomeInteiro) {

 nomeInteiro = nomeInteiro.trim();

    let posicaoNome = nomeInteiro.indexOf(' ');
    let posicaoSobrenome = nomeInteiro.lastIndexOf(' ');
    let primeiroNome = nomeInteiro.substring(0, posicaoNome);
    let ultimoNome = posicaoSobrenome === -1? nomeInteiro : nomeInteiro.substring(posicaoSobrenome + 1);
    let mail = `${primeiroNome}.${ultimoNome}@facens.br`.toLowerCase();

    return mail;

}

let nome = "Davi Nascimento";
let email = gerarEmail(nome);
console.log(email);

