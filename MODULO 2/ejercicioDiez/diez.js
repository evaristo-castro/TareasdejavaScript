function numCeroUno(t){
    // Pedir al usuario tamaño del arreglo
  
     
    const arreglo = [];
    
    for(let i=0 ; i<t; i++){
        if ( i % 2 ===0){
           arreglo[i] = 0;
        } else {
            arreglo[i] = 1;
        }
    }
      console.log(arreglo);
    
     
    
    }
    let n = parseInt(prompt("ingrese el tamaño del arreglo:"));
    numCeroUno(n);