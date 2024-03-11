//projeto de Davi
class Main{
constructor(){
    this.pessoa = [];
}



addPessoa(pessoa){
    this.pessoa.push(pessoa);
    const newPessoa = new Pessoa(nome,codigo);
}

addAutomovelPessoa(codigoPessoa, codigoAutomovel, marca, modelo){
    const pessoa = this.pessoa.find(p => p.codigo === codigoPessoa);
    if (!pessoa) {
                console.error(`Pessoa com o código ${codigoPessoa} não foi encontrada.`);
                return;
            }

    const automovel = new Automovel(codigoAutomovel, marca, modelo);
    pessoa.inserirAutomovel(automovel);
}

transferirAutomovel(codigoPessOrigem, codigoPessDestino, codigoAutomovel){
    const pessoaOrigem = this.pessoa.find(p => p.codigo === codigoPessOrigem);
    const pessoaDestino = this.pessoa.find(p => p.codigo === codigoPessDestino);
    const automovel = pessoaOrigem.getAutomovel(codigoAutomovel);

    pessoaOrigem.removerAutomovelByCod(codigoAutomovel);
    pessoaDestino.inserirAutomovel(automovel);
}

mostrarTodasAsPessoas(){
    this.pessoa.forEach(pessoa => {
        console.log(pessoa.imprimirCompleto());
    });
}
}

const main = new Main();
main.addPessoa(Pessoa("João", 1));
main.addAutomovelPessoa(1, 1, "Fiat", "Uno");
main.addAutomovelPessoa(1, 2, "Volkswagen", "Fusca");
main.mostrarTodasAsPessoas();
main.addPessoa(Pessoa("Maria", 2));
main.transferirAutomovel(1, 2, 1);
main.mostrarTodasAsPessoas();
