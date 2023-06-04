function numerosPares(){
    let miArreglo1 = [];
    for(let i=0; i<101; i++){
    miArreglo1[i] = i+1;
    }
    //console.log(miArreglo1);

    let nuevoarreglo = miArreglo1.filter(Element=>Element % 2===0);
    console.log(nuevoarreglo);
}

numerosPares();