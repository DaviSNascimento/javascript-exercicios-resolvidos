ex06
faça func. que mostre o DOBRO do numero anterior.
SE, o numero for negativo ou = a zero,
 colocar seguinte msg: " Só é aceito números positivos maiores que zero". 

 Resultado esperado: (numero - 1) * 2;  
         Ex: num 5 --> Resultado = 8;

rascunho
 func dobro ( numero ){
    
    if ( numero > 0){
        calc = 2 * (numero- 1) ;
        }else {
            console.log(" Só é aceito números positivos maiores que zero ");
        }
 }  