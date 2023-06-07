

function calcPrecio(){
        let nuevoPrecio = 0 ;
        for(let i = 0; i < 10; i++){
        let precioProducto = parseFloat(prompt(`ingrese el precio del producto ${i} `));
        nuevoPrecio = nuevoPrecio + precioProducto ;
        }
        console.log(nuevoPrecio);
        alert(nuevoPrecio);
}

calcPrecio();