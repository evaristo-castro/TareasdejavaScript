// FUNCTION CALCULAR SALARIO
function salario(salario) {
    if (salario < 699999){
         let descuento = (salario * 0.02) 
         let auxTransporte = (salario * 0.06)
         
         let nuevoSalario = (salario - descuento + auxTransporte)
         console.log(nuevoSalario);

    }else if(salario<1000000) {
         let descuento = (salario * 0.04) 
         let nuevoSalario = (salario - descuento) + 12000 ;
         
        console.log(nuevoSalario);
    }else{
        let descuento = (salario * 0.06) 
        let nuevoSalario = (salario - descuento);
        
       console.log(nuevoSalario);  
    }

  }

  salario(1000000);