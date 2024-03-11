Criar um arquivo:

    index.html
    
    classes.js

            Classe Pessoa
            Classe Automovel
    
    main.js

            Main
            teste

Classe Pessoa

        propriedades:

            - codigo : int
            - nome : String
            - automoveis : array<Automovel>

        construtor:

            + Pessoa (codigo : int, nome : String)

        metodos

        + get codigo(): int
        + inserirAutomovel(automovel : Automovel)
        + removerAutomovelByCod(codigo: int)

            Remove o automovel do array pelo código

        + getAutomovel(codigo:int)

            Retorna automovel pelo código

        + imprimir(): String

            Imprimi dados da pessoa sem automovel

        + imprimirCompleto() : String

            Imprime dados da pessoa e automoveis



Classe Automovel
    propriedades: 

        - codigo: int
        - marca : String
        - modelo : String

    construtor

        + Automovel (codigo: Int, marca : String, modelo : String)

    metodos

        + get codigo(): int
        + imprimir():String
            Imprime todos os dados do automovel



Classe Main
    propriedades:

        - pessoas: array<Pessoa>

    construtor

        Main()

    metodos:

        + addPessoa(pessoa)

            adiciona uma pessoal a lista de pessoas

        + addAutomovelPessoa(codPessoa, codAuto, marca, modelo)

            adiciona um carro para uma pessoa

        + transfereAutomovel(codPessoaOrigem, codPessoaDestino, codAutomovel)

            transfere um carro de uma pessoa para outra

        + mostrarTodasAsPessoas()


Rodando o Teste

        const main = new Main();
        main.addPessoa(new Pessoa(1, "João"));
        main.addAutomovelPessoa(1, 1, "Fiat", "Uno");
        main.addAutomovelPessoa(1, 2, "Volkswagen", "Fusca");
        main.mostrarTodasAsPessoas();
        main.addPessoa(new Pessoa(2, "Maria"));
        main.transfereAutomovel(1, 2, 1);
        main.mostrarTodasAsPessoas();

 