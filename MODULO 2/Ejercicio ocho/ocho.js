function nSueldos(){
    // Pedir al usuario la cantidad de sueldos a ingresar
    var cantidadSueldos = parseInt(prompt("Ingrese la cantidad de sueldos:"));
    
    // Crear un array para almacenar los sueldos ingresados
    var sueldos = [];
    let contador = 0;
    
    // Leer los sueldos y almacenarlos en el arreglo
    for (var i = 0; i < cantidadSueldos; i++) {
      var sueldo = parseInt(prompt("Ingrese el sueldo #" + (i+1)  + ":"));
      sueldos.push(sueldo);
      
    }
    const sueldoMenor= Math.min(...sueldos);
    alert( ` Los sueldos son: ${sueldos}, el suedo menor es ${sueldoMenor}`);
    
      
    
    }
    nSueldos();