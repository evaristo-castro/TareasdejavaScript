function numerosNegativosPositivos(){
    let contador1 = 0 ;
    let contador2 = 0 ;
    let contador3 = 0;
    let cantidadNumeros = parseFloat(prompt("ingrese Cantidad de numeros"));
    
    for(let i = 0; i <= cantidadNumeros; i++){
    let numero = parseFloat(prompt("ingrese numeros positivos o negativo"));
    if (numero<0 ) {
        
       contador1 ++; 
        
    }else if (numero==0){
           contador2 ++;
    }
    
    
    else if(numero>0){
         contador3 ++;  
    }
  

}

alert(" Negativos son : " + contador1 + "  numeros neutro  " + contador2 + "  Positivos: " + contador3);
}

numerosNegativosPositivos();