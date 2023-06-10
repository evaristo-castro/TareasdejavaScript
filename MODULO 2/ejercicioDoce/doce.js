function llenarFibonacci(){
    
    let arreglo =[0,1];
    
    for(let i=2 ; i<100 ; i++){
         arreglo[i] = arreglo[i-1] + arreglo[i-2] ;
         

    }
    return arreglo;
}

let resultado = llenarFibonacci();
alert(resultado);
console.log(resultado);