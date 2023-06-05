function calcMultiploTres(){
    let nuevoPrecio = 0 ;
    const miArreglo1=[];
    for(let i = 0; i < 12; i++){
    let numero = parseFloat(prompt("ingrese el numero"));
    miArreglo1[i] =numero;
    }
    console.log(miArreglo1);
    let nuevoarreglo = miArreglo1.filter(Element=>Element % 3===0);
    let cadena = nuevoarreglo.join(", ");
    alert(cadena);
    
}
calcMultiploTres();