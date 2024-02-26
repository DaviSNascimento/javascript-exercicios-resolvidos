function Palindromo(str) {
    str = str.toLowerCase();
  
    let inicio = 0;
    let fim = str.length - 1;
  
    while(inicio < fim) {
        if(str[inicio] !== str[fim]) {
            return false;
        }
        inicio++;
        fim--;
    }
  
    return true;
}

console.log("Resultado: Arara ",Palindromo("Arara"));  
console.log("Resultado: teste ",Palindromo("teste"));  
console.log("Resultado: subi no onibus",Palindromo("subinoonibus"));