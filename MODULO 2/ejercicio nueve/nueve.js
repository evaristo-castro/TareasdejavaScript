function potencia(){
    // Pedir al usuario la base y el exponente
            let base = parseInt(prompt("Ingrese la base:"));
            let exponente = parseInt(prompt("Ingrese el exponente:"));
            
            let potencia = 1;
            // 
            for (var i = 0; i < exponente; i++) {
            potencia  = potencia * base ;
            
            
            }
            // Mostrar la potencia
            alert( ` La potencia es: ${potencia}`);
    
      
    
    }
    potencia();