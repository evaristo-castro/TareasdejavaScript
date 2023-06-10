function llenarArregloPares(n) {
    if (n % 2 === 0) {
      // Si n es par, se le resta 1 para asegurarse de que sea impar
      n--;
    }
    let arreglo =[];
    let numAux = 2; 
    for(let i=0 ; i<n ; i++){
         arreglo[i] = numAux;
         numAux  += 2; 

    }
    return arreglo;
}
let num = parseInt(prompt("ingrese el tamño del arreglo"));
let resultado = llenarArregloPares(num);
alert(resultado);
console.log(resultado);




