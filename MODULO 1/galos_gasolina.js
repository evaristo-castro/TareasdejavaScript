// FUNCTION CALCULAR GALOS DE GASOLINA EJERCICIO 4 
function valorApagar (galones){
    let litros = galones * 3.78541;
    let centiLitros = litros * 100;
    totalaPagar = centiLitros * 25 ;
    console.log(litros + " Gasolina despachada en  Litros");
    console.log("total a pagar es: " + totalaPagar + " pesos");
  }

  valorApagar(5);