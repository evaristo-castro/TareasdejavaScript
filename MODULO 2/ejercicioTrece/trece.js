function llenarArregloPares() {
    
    let arreglo =[];
    let numAux = 2; 
    let acum = 0;
    for(let i=0 ; i<100 ; i++){
         arreglo[i] = numAux;
         numAux  += 2; 
         acum =acum + arreglo[i];

    }
    console.log(arreglo);
    alert("el arreglo es :" + arreglo + "   la suma  de sus valores es:  " + acum)
    console.log(acum);
    
}

llenarArregloPares();

