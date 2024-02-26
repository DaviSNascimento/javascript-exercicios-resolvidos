let line = '';
for (let index = 0; index <= 10 ; index++) {
    if (index < 10) {
        line += index + "-";
    }else{
        line += index;
    }
}
console.log("Resultado: ", line);