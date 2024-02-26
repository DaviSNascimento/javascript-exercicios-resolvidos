function contarVogais(str) {
    let count = 0;
    const vogais = 'aeiou'; 

    for (let i = 0; i < str.length; i++) {
        if (vogais.includes(str[i])) {
            count++; 
        }
    }

    return count;
}

let stringExemplo = "o rato roeu a roupa do rei de roma";
let numeroDeVogais = contarVogais(stringExemplo);

console.log("Número de vogais:", numeroDeVogais);