//projeto de Davi
class Pessoa{
    constructor(nome,codigo){
        this.nome = nome;
        this.codigo = codigo;
        this.automovel = [];
    }
    get nome(){
        return this.nome;
    }
    get codigo(){
        return this.codigo;
    }
    inserirAutomovel(automovel){
        this.automovel.push(automovel);
    }
    removerAutomovelByCod(codigo){
        this.automovel = this.automovel.filter(auto => auto.codigo !== codigo);
    }
    getAutomovel(codigo){
        return this.automovel.find(auto => auto.codigo === codigo);
    }
    imprimir(){
        return  `Código: ${this.codigo}, Nome: ${this.nome}`;
    }
    imprimirCompleto(){
        let result = this.imprimir() + "\nAutomoveis: ";
        this.automovel.forEach(auto => {
            result += `\n${auto.imprimir()}`
        });
        return result;
    }
}

class Automovel {
    constructor(codigo, marca, modelo) {
        this._codigo = codigo;
        this._marca = marca;
        this._modelo = modelo;
    }

    get codigo() {
        return this._codigo;
    }

    imprimir() {
        return `Código: ${this._codigo}, Marca: ${this._marca}, Modelo: ${this._modelo}`;
    }
}